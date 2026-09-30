import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { SYSTEM_PROMPT } from "@/lib/ianData";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            "OpenAI API key is missing. Please ensure OPENAI_API_KEY is configured in your .env file.",
        },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: 'messages' array is required." },
        { status: 400 }
      );
    }

    // Prepare message history with SYSTEM_PROMPT prepended
    const conversation = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "user" ? ("user" as const) : ("assistant" as const),
        content: m.content,
      })),
    ];

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    // Request stream from OpenAI
    const stream = await openai.chat.completions.create({
      model: model,
      messages: conversation,
      temperature: 0.6,
      stream: true,
    });

    // Create a ReadableStream to stream text back to client
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content || "";
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err: unknown) {
          console.error("Streaming error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (err: unknown) {
    const error = err as { message?: string; status?: number };
    console.error("API Error in /api/chat:", error);
    return NextResponse.json(
      {
        error:
          error.message ||
          "An unexpected error occurred while communicating with OpenAI.",
      },
      { status: error.status || 500 }
    );
  }
}
