# Ian Bharrat — Interactive AI Portfolio & Resume Assistant 🤖

An interactive, modern, ultra-sleek portfolio chatbot answering inquiries about **Ian Bharrat**'s cloud infrastructure background, AWS migrations, Terraform architectures, Kean University education (3.96 GPA), and verified certifications.

Designed with a **sleek, modern black-on-black aesthetic** with crystal-clear readability, streaming real-time responses powered by **OpenAI**, and seamless mobile/desktop responsiveness.

---

## 🌟 Key Features

- **⚡ Real-Time Streaming Chat**: Instant token streaming powered by OpenAI's `gpt-4o-mini` via serverless API route handlers.
- **🖤 Sleek Black-on-Black Theming**: Monochromatic Obsidian dark mode with refined subtle borders, glassmorphic headers, and crisp high-contrast typography.
- **🎯 Grounded Knowledge Base**: Accurate details on Ian's:
  - **AWS Cloud Internship** at Diamond Distribution Inc. (CloudFormation, ASG, ALB, Aurora Serverless, S3, CloudFront).
  - **Terraform AWS Web Infrastructure** (SSM golden AMI, multi-AZ, security groups).
  - **Academic Record**: B.S. in Information Technology at Kean University (**3.96 GPA**), A.A.S. in Computer Science at Brookdale CC.
  - **Certifications**: AWS Certified Cloud Practitioner & CompTIA ITF+ with direct Credly verification links.
  - **Arcade Browser Game**: *Space Run* (Phaser JS, Node.js, MongoDB).
- **💡 Interactive Suggestion Cards**: Quick-start prompt chips for recruiters and engineers.
- **📱 Slide-Out Profile Drawer**: Instant snapshot of credentials, education, and direct contact details.
- **🔒 Secure Secrets Management**: API keys strictly handled on the backend via `.env`, never exposed to the client, and excluded from Git commits via comprehensive `.gitignore` rules.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Model**: [OpenAI API](https://platform.openai.com/) (`gpt-4o-mini`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown & Code Rendering**: `react-markdown` & `remark-gfm`

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/ibharrat/ian-portfolio-chatbot.git
cd ian-portfolio-chatbot
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory (you can copy `.env.example`):

```bash
cp .env.example .env
```

Add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

> **Note**: `.env` is listed in `.gitignore` and will never be tracked by Git.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/).
3. In the Vercel project settings under **Environment Variables**, add:
   - `OPENAI_API_KEY`: Your OpenAI API key.
   - `OPENAI_MODEL`: `gpt-4o-mini`
4. Click **Deploy**!

---

## 📬 Contact Ian Bharrat

- **Email**: [ian.bharrat@gmail.com](mailto:ian.bharrat@gmail.com)
- **Phone**: [732-484-8378](tel:732-484-8378)
- **LinkedIn**: [linkedin.com/in/ian-bharrat](https://www.linkedin.com/in/ian-bharrat/)
- **GitHub**: [github.com/ibharrat](https://github.com/ibharrat)
- **Location**: Manalapan, NJ 07726
