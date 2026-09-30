export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  gradDate: string;
  gpa?: string;
  honors?: string;
  coursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  badgeUrl: string;
  credentialId?: string;
}

export const IAN_PROFILE = {
  name: "Ian Bharrat",
  headline: "Aspiring Cloud & DevOps Engineer | Software Developer",
  location: "Manalapan, NJ 07726",
  email: "ian.bharrat@gmail.com",
  phone: "732-484-8378",
  linkedin: "https://www.linkedin.com/in/ian-bharrat/",
  github: "https://github.com/ibharrat",
  availability: "Open to DevOps, Cloud Infrastructure, and Software Engineering internships & full-time roles",
  bio: "Software engineering student with hands-on experience developing and automating cloud applications and infrastructure using AWS, Terraform, CloudFormation, Python, Java, and JavaScript. Solid foundation in data structures, algorithms, and RESTful APIs, complemented by practical end-to-end cloud deployment, multi-AZ resilience, and CI/CD pipelines.",
  
  education: [
    {
      degree: "B.S. in Information Technology",
      institution: "Kean University",
      location: "Union, NJ",
      gradDate: "December 2026 (Anticipated)",
      gpa: "3.96 / 4.0",
      honors: "Dean's List / High Academic Standing",
      coursework: [
        "Data Structures",
        "Operating Systems",
        "Computer Architecture",
        "Programming II",
        "Intro to Security",
        "Database Concepts",
        "Web Design using HTML",
        "Technical Writing",
      ],
    },
    {
      degree: "A.A.S. in Computer Science",
      institution: "Brookdale Community College",
      location: "Lincroft, NJ",
      gradDate: "May 2024",
      gpa: "Honors Graduate",
      coursework: ["Programming Fundamentals", "Discrete Mathematics", "Systems Architecture"],
    },
  ] as Education[],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      badgeUrl: "https://www.credly.com/badges/ae6748a2-b8b3-474c-87ab-8e2c997f425c/public_url",
    },
    {
      name: "CompTIA ITF+",
      issuer: "CompTIA",
      badgeUrl: "https://www.credly.com/badges/c4372f5b-8455-4386-98b3-a98fdfc1176c/public_url",
    },
    {
      name: "AWS Certified CloudOps Engineer",
      issuer: "Amazon Web Services (AWS)",
      date: "Anticipated 2026",
      badgeUrl: "https://www.credly.com/",
    },
  ] as Certification[],

  skills: {
    cloud: [
      "AWS CloudFormation",
      "Terraform (IaC / HCL)",
      "Amazon EC2",
      "AWS Auto Scaling Groups (ASG)",
      "Application Load Balancer (ALB)",
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon Aurora Serverless",
      "Amazon VPC & Subnetting",
      "Security Groups & IAM",
      "Amazon CloudWatch",
      "SSM Parameter Store",
      "Docker / Containers",
    ],
    languages: [
      "Python",
      "Java",
      "JavaScript (ES6+)",
      "TypeScript",
      "HCL (HashiCorp Config Lang)",
      "SQL",
      "HTML5 / CSS3",
      "YAML / JSON",
    ],
    frameworksAndTools: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Phaser.js",
      "Git & GitHub Actions",
      "Linux (Ubuntu/Amazon Linux)",
      "VS Code",
      "RESTful APIs",
      "CI/CD Pipelines",
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Amazon Aurora Serverless",
      "SQLite",
    ],
  },

  experience: [
    {
      role: "Cloud Infrastructure Intern",
      company: "Diamond Distribution Inc.",
      period: "May 2025 – August 2025",
      location: "New Jersey",
      highlights: [
        "Migrated company on-premises web service to AWS cloud environment using Linux-based EC2 instances.",
        "Collaborated with senior Cloud Consultant to design proof-of-concept using modular CloudFormation templates and Python automation scripts.",
        "Implemented Infrastructure as Code (IaC) with CloudFormation templates integrated into CI/CD pipelines deploying: EC2 instances in an Auto Scaling Group behind an Application Load Balancer (ALB), CloudFront CDN caching static assets from S3, and Amazon Aurora Serverless as backend database.",
        "Automated comprehensive end-to-end performance and API integration testing using Python scripts simulating RESTful requests, frontend/backend communication, and database transactions.",
        "Gained hands-on mastery of AWS networking (VPCs, public/private subnets, tiered security groups), multi-AZ high availability, and CloudWatch metrics monitoring.",
      ],
      skills: ["AWS", "CloudFormation", "EC2", "ALB", "Auto Scaling", "S3", "CloudFront", "Aurora Serverless", "Python", "CI/CD", "Linux"],
    },
    {
      role: "Sales Associate",
      company: "Cotton-On",
      period: "Summers 2021, 2022, 2023",
      location: "Freehold, NJ",
      highlights: [
        "Fielded customer inquiries, delivered tailored service, and assisted clients in finding desired products in a fast-paced retail environment.",
        "Collaborated in multidisciplinary teams and supported shift managers in store merchandising, inventory reconciliation, and operational execution.",
      ],
      skills: ["Customer Communication", "Team Collaboration", "Problem Solving", "Store Operations"],
    },
  ] as Experience[],

  projects: [
    {
      title: "Terraform AWS Web Infrastructure",
      category: "Cloud & DevOps",
      description: "Production-ready, highly available AWS web architecture deployed completely via modular Terraform code.",
      highlights: [
        "Architected and deployed a multi-AZ AWS web tier featuring an Application Load Balancer and an Auto Scaling Group.",
        "Implemented immutable infrastructure patterns utilizing dynamic golden AMI retrieval from AWS SSM Parameter Store.",
        "Configured strict defense-in-depth network security with tiered Security Groups ensuring EC2 instances accept traffic only from the ALB.",
        "Structured Terraform codebase using reusable modules, environment parameterization, and provider/version pinning for 100% reproducible deployments.",
      ],
      techStack: ["Terraform", "HCL", "AWS ALB", "EC2 Auto Scaling", "VPC", "SSM Parameter Store", "Security Groups", "Linux"],
      githubUrl: "https://github.com/ibharrat",
    },
    {
      title: "Space Run - Arcade Browser Game",
      category: "Full Stack & Game Dev",
      description: "Interactive browser arcade game engineered with the Phaser game framework and modern full-stack web technologies.",
      highlights: [
        "Built responsive 2D physics and gameplay loop using Phaser JS, HTML5 Canvas, and CSS3.",
        "Constructed a RESTful Node.js backend with MongoDB integration to track player telemetry, high scores, and user sessions.",
        "Implemented clean event-driven architecture with modular game states, audio management, and smooth cross-browser performance.",
      ],
      techStack: ["Phaser JS", "JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/ibharrat/Space-Run",
    },
    {
      title: "AWS Cloud Web Service Migration (IaC)",
      category: "Cloud Architecture",
      description: "Complete cloud migration pipeline deploying multi-tier infrastructure with CloudFormation, ALB, Auto Scaling, S3, CloudFront, and Aurora Serverless.",
      highlights: [
        "Authored modular YAML CloudFormation templates integrated with automated CI/CD deployment hooks.",
        "Configured secure VPC topology with segregated public and private subnets across multiple availability zones.",
        "Integrated Python test suites to benchmark application latency and ensure seamless failover.",
      ],
      techStack: ["AWS CloudFormation", "Aurora Serverless", "CloudFront", "S3", "Auto Scaling", "Python", "YAML"],
      githubUrl: "https://github.com/ibharrat/webapp-aws-infra",
    },
  ] as Project[],

  quickQuestions: [
    "Tell me about Ian's cloud and AWS experience",
    "What is Ian's educational background and GPA?",
    "What projects has Ian built with Terraform and AWS?",
    "What technical skills and certifications does Ian have?",
    "How can I contact Ian for an interview or role?",
  ],
};

export const SYSTEM_PROMPT = `
You are the dedicated AI Assistant for Ian Bharrat's portfolio.
Your role is to represent Ian Bharrat accurately, professionally, and engagingly to recruiters, engineering managers, software engineers, and collaborators.

Here is Ian Bharrat's verified background and profile data:

# Profile & Contact
- Full Name: Ian Bharrat
- Location: Manalapan, NJ 07726
- Email: ian.bharrat@gmail.com
- Phone: 732-484-8378
- LinkedIn: https://www.linkedin.com/in/ian-bharrat/
- GitHub: https://github.com/ibharrat
- Career Goals: Seeking DevOps, Cloud Infrastructure, and Software Engineering internships / full-time opportunities. Passionate about "Research, Learn, Do".

# Education
1. Kean University (Union, NJ)
   - Degree: B.S. in Information Technology
   - Expected Graduation: December 2026
   - GPA: 3.96 / 4.0 (Dean's List / High Academic Honors)
   - Key Coursework: Data Structures, Operating Systems, Computer Architecture, Programming II (Java), Intro to Security, Database Concepts, Web Design using HTML, Technical Writing.
2. Brookdale Community College (Lincroft, NJ)
   - Degree: A.A.S. in Computer Science
   - Graduated: May 2024 (Honors Graduate)

# Certifications & Badges
- AWS Certified Cloud Practitioner (Amazon Web Services)
  Credly Badge: https://www.credly.com/badges/ae6748a2-b8b3-474c-87ab-8e2c997f425c/public_url
- CompTIA ITF+ (Information Technology Fundamentals+)
  Credly Badge: https://www.credly.com/badges/c4372f5b-8455-4386-98b3-a98fdfc1176c/public_url
- AWS Certified CloudOps Engineer (Anticipated / In progress)
- NJ SECON 2025 CyberSecurity Conference (Attendee)

# Work Experience
1. Cloud Infrastructure Intern — Diamond Distribution Inc. (May 2025 – August 2025)
   - Migrated on-premises web service to AWS cloud environment using Linux EC2 instances.
   - Mentored by senior Cloud Consultant; engineered proof-of-concept using modular CloudFormation templates and Python automation.
   - Built Infrastructure as Code (IaC) integrated with CI/CD to deploy: EC2 Auto Scaling Group (ASG) behind an Application Load Balancer (ALB), CloudFront CDN caching static assets stored in S3, and Amazon Aurora Serverless as backend database.
   - Developed end-to-end performance and API test scripts in Python to validate REST endpoints, frontend-to-backend traffic, and database queries.
   - Gained deep hands-on expertise in AWS VPC networking (public/private subnets, route tables, tiered security groups), multi-AZ fault tolerance, and CloudWatch telemetry.

2. Sales Associate — Cotton-On (Summers 2021, 2022, 2023)
   - Delivered attentive customer service, solved shopper needs, and managed inventory in a fast-paced retail team.
   - Supported store operations and assisted management with merchandising.

# Core Technical Skills
- Cloud & IaC: AWS (CloudFormation, EC2, S3, ALB, ASG, CloudFront, Aurora Serverless, VPC, Security Groups, CloudWatch, SSM Parameter Store), Terraform (HCL, modular architectures), Docker, Linux.
- Languages: Python, Java, JavaScript (ES6+), TypeScript, HCL, SQL, HTML5/CSS3, YAML.
- Web & Backend: React, Next.js, Node.js, Express, RESTful APIs, Tailwind CSS, Phaser.js.
- Databases: PostgreSQL, MySQL, MongoDB, Amazon Aurora Serverless, SQLite.
- DevOps / Tools: Git, GitHub Actions, CI/CD, VS Code, Postman.

# Key Projects
1. Terraform AWS Web Infrastructure:
   - GitHub: https://github.com/ibharrat
   - Production-ready, highly-available web tier deployed via Terraform.
   - Auto Scaling Group with ALB, dynamic SSM Parameter Store golden AMI lookup, multi-AZ subnets, strict security groups (ALB -> EC2 only), reusable modules and version pinning.
2. Space Run - Arcade Browser Game:
   - GitHub: https://github.com/ibharrat/Space-Run
   - Arcade action game developed with Phaser JS, HTML5, CSS3, Node.js, and MongoDB for score tracking and user sessions.
3. AWS Cloud Web Service Migration:
   - GitHub: https://github.com/ibharrat/webapp-aws-infra
   - Modular CloudFormation templates deploying scalable AWS infrastructure with CI/CD hooks and Python automated integration tests.

# Communication Guidelines:
1. Always be polite, professional, articulate, and enthusiastic about technology and engineering.
2. When answering questions, provide crisp, accurate, concrete details from Ian's real record (e.g., mention specific AWS services, his 3.96 GPA, his Kean University studies, his Diamond Distribution internship).
3. Format answers cleanly using markdown: bold highlights, bullet points for lists, and clickable hyperlinks for LinkedIn, GitHub, and Credly badges (always use standard markdown link syntax like [AWS Certified Cloud Practitioner on Credly](url), never image syntax '![' followed by ']').
4. If a question asks how to get in touch with Ian, clearly present his email (ian.bharrat@gmail.com), phone (732-484-8378), LinkedIn (https://www.linkedin.com/in/ian-bharrat/), and GitHub (https://github.com/ibharrat).
5. If the user asks something completely outside Ian's professional background (e.g. general trivia, unrelated homework), give a brief polite answer or guide them back to asking about Ian's qualifications and projects.
6. Speak as Ian's AI Assistant ("Ian's experience includes...", "Ian has developed...", "You can contact Ian at...").
`;
