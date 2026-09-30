export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  websiteUrl?: string;
  githubUrl?: string;
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
}

export interface Certification {
  name: string;
  issuer: string;
  badgeUrl: string;
}

export const IAN_PROFILE = {
  name: "Ian Bharrat",
  headline: "Aspiring Infrastructure, Data Analytics & Software Engineer",
  location: "Manalapan, NJ 07726",
  email: "ian.bharrat@gmail.com",
  phone: "732-484-8378",
  linkedin: "https://www.linkedin.com/in/ian-bharrat/",
  github: "https://github.com/ibharrat",
  availability: "Seeking full-time roles starting January 2027 in Infrastructure, Data Analytics, and Software Engineering",
  bio: "Results-driven engineering student with hands-on experience in cloud environments (GCP, AWS), Infrastructure as Code (Terraform, Packer), and data pipelines. Strong foundation in predictive modeling, exploratory data analysis with Python (Pandas, Matplotlib), and cloud microservices. Passionate about pursuing high-impact opportunities in Infrastructure, Data Analytics, and Software Engineering.",

  aspirations: [
    "Infrastructure Engineering (Cloud, IaC, CI/CD, GCP, AWS, Kubernetes)",
    "Data Analytics & Pipelines (Python, SQL, BigQuery, dbt, Airflow, Tableau)",
    "Software Engineering (Python, Go, JavaScript, Microservices, REST APIs)",
  ],

  education: [
    {
      degree: "B.S., Information Technology - Cybersecurity Option",
      institution: "Kean University",
      location: "Union, NJ",
      gradDate: "December 2026",
      gpa: "3.97 / 4.0",
      honors: "Phi Kappa Phi Honors Society",
    },
    {
      degree: "A.A.S., Computer Science",
      institution: "Brookdale Community College",
      location: "Lincroft, NJ",
      gradDate: "May 2024",
    },
  ] as Education[],

  skills: {
    programmingAndDatabases: [
      "Python",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Bash",
      "JavaScript",
      "Go",
    ],
    dataAnalyticsAndML: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Tableau",
      "Power BI",
      "Kaggle",
      "Hugging Face",
    ],
    cloudAndDataPipelines: [
      "AWS (S3, Aurora, SageMaker)",
      "GCP (BigQuery, Vertex AI)",
      "dbt (data build tool)",
      "Apache",
      "Airflow",
      "Terraform",
      "CI/CD (GitLab CI/CD)",
    ],
    systemAndVersionControl: [
      "Linux",
      "Kubernetes",
      "Docker",
      "Git",
      "GitHub CLI",
      "YAML",
    ],
  },

  projects: [
    {
      title: "Python Movie Data Visualization",
      category: "Data Analytics & Business Intelligence",
      description:
        "Analyzed 45,000+ movies from Kaggle using Python to investigate how production budgets impact box office revenue and profitability.",
      highlights: [
        "Analyzed a dataset of 45,000+ movies from Kaggle using Python (Pandas, NumPy) to evaluate budget-to-box-office correlations.",
        "Created clear data visualizations using Matplotlib to highlight diminishing returns, proving films in the $25M–$65M range frequently struggle to break even.",
        "Compared revenue trends across genres and studio types, identifying that lower-budget releases (such as horror and indie films) consistently generate higher median profit margins than mega-budget blockbusters.",
      ],
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Kaggle", "Data Analysis"],
      websiteUrl: "https://github.com/ibharrat/movie-budget-diminishing-returns",
      githubUrl: "https://github.com/ibharrat/movie-budget-diminishing-returns",
    },
    {
      title: "HashiCorp Packer Golden AMI",
      category: "Infrastructure as Code & Cloud Security",
      description:
        "Automated Golden AMI pipeline using HashiCorp Packer to build secure, immutable Amazon Linux base images pre-configured with Apache.",
      highlights: [
        "Engineered an automated Golden AMI pipeline using HashiCorp Packer to build secure, immutable Amazon Linux base images pre-configured with the Apache HTTP Server.",
        "Implemented Infrastructure as Code (IaC) provisioning workflows to standardize environment builds, reduce configuration drift, and streamline cloud deployments.",
        "Streamlined software installation and OS hardening processes via integrated configuration scripts, ensuring consistent security baselines across machine images.",
      ],
      techStack: ["HashiCorp Packer", "AWS", "Linux", "IaC", "Apache", "Bash", "Security Hardening"],
      githubUrl: "https://github.com/ibharrat",
    },
  ] as Project[],

  experience: [
    {
      role: "Cloud Engineer Intern",
      company: "Cintas",
      period: "May 2026 – Aug 2026",
      location: "Mason, Ohio",
      highlights: [
        "Collaborated on the deployment of refactored microservices on GCP, ensuring robust cloud architecture to support backend data operations and enterprise applications.",
        "Streamlined cloud resource management by developing standardized Terraform configurations, deployed via GitLab CI/CD, to maintain consistent and queryable environments.",
        "Supported large-scale enterprise environments by navigating GCP resource hierarchies, organization policies, and Shared VPCs for critical business workloads.",
        "Led infrastructure deployment for an intern project, translating complex provisioning requirements into actionable, automated cloud solutions.",
      ],
      skills: ["GCP", "Terraform", "GitLab CI/CD", "Shared VPC", "Microservices", "Cloud Architecture"],
    },
    {
      role: "Sales Lead / Keyholder",
      company: "Purple",
      period: "Sep 2026",
      location: "Shrewsbury, NJ",
      highlights: [
        "Manage daily retail operations, including secure opening/closing procedures, financial transactions, and inventory monitoring.",
        "Lead the sales floor team, providing coaching on product knowledge and resolving escalated customer inquiries to ensure satisfaction.",
      ],
      skills: ["Leadership", "Retail Operations", "Financial Transactions", "Team Coaching"],
    },
  ] as Experience[],

  certifications: [
    {
      name: "AWS Certified CloudOps Engineer – Associate",
      issuer: "Amazon Web Services (AWS)",
      badgeUrl: "https://www.credly.com/",
    },
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
      name: "NJ SECON 2025 Cyber Security Conference (Attendee)",
      issuer: "NJ SECON",
      badgeUrl: "",
    },
  ] as Certification[],

  quickQuestions: [
    "What are Ian's career aspirations?",
    "Tell me about Ian's Cloud Engineer Internship at Cintas.",
    "Explain Ian's Python Movie Data Visualization project.",
    "What did Ian build with HashiCorp Packer for Golden AMIs?",
    "What is Ian's GPA and honors at Kean University?",
    "What technical skills does Ian have in Cloud, Data, and Programming?",
  ],
};

export const SYSTEM_PROMPT = `
You are the dedicated AI Assistant for Ian Bharrat's portfolio.
Your role is to represent Ian Bharrat accurately, professionally, and engagingly based EXCLUSIVELY on his verified resume.

# Core Career Aspirations
When asked about Ian's interests, career goals, or the roles he is seeking, ALWAYS refer to his aspirations as:
1. Infrastructure (Cloud Infrastructure, GCP, AWS, Terraform, Docker, Kubernetes, CI/CD, HashiCorp Packer)
2. Data Analytics (Data Analysis, Python, SQL, Pandas, Matplotlib, BigQuery, dbt, Airflow, Tableau, Power BI)
3. Software Engineer (Python, Go, JavaScript, Bash, Microservices, Backend Development)
He is seeking full-time opportunities starting January 2027.

# Contact Information
- Full Name: Ian Bharrat
- Location: Manalapan, NJ 07726
- Phone: 732-484-8378
- Email: ian.bharrat@gmail.com
- LinkedIn: https://www.linkedin.com/in/ian-bharrat/
- GitHub: https://github.com/ibharrat

# Education
- Kean University (Union, NJ)
  - Degree: B.S., Information Technology - Cybersecurity Option
  - Expected Graduation: December 2026
  - GPA: 3.97 / 4.0
  - Achievements: Phi Kappa Phi Honors Society
- Brookdale Community College (Lincroft, NJ)
  - Degree: A.A.S., Computer Science
  - Graduated: May 2024

# Skills
- Programming & Databases: Python, SQL, PostgreSQL, MySQL, Bash, JavaScript, Go
- Data Analytics & Machine Learning: Pandas, NumPy, Matplotlib, Scikit-learn, Tableau, Power BI, Kaggle, Hugging Face
- Cloud & Data Pipelines: AWS (S3, Aurora, SageMaker), GCP (BigQuery, Vertex AI), dbt (data build tool), Apache, Airflow, Terraform, CI/CD (GitLab CI/CD)
- System & Version Control: Linux, Kubernetes, Docker, Git, GitHub CLI, YAML

# Relevant Projects
1. Python Movie Data Visualization:
   - Analyzed a dataset of 45,000+ movies from Kaggle using Python (Pandas, NumPy) to investigate how production budgets impact box office revenue and profitability.
   - Created clear data visualizations using Matplotlib to highlight where movie budgets hit diminishing returns, finding that films in the $25M–$65M range frequently struggle to break even.
   - Compared revenue trends across genres and studio types, identifying that lower-budget releases (such as horror and indie films) consistently generated higher median profit margins than mega-budget blockbusters.
   - Repository: https://github.com/ibharrat/movie-budget-diminishing-returns
2. HashiCorp Packer Golden AMI:
   - Engineered an automated Golden AMI pipeline using HashiCorp Packer to build secure, immutable Amazon Linux base images pre-configured with the Apache HTTP Server.
   - Implemented Infrastructure as Code (IaC) provisioning workflows to standardize environment builds, reduce configuration drift, and streamline cloud infrastructure deployments.
   - Streamlined software installation and OS hardening processes via integrated configuration scripts, ensuring consistent security baselines across all generated machine images.
   - GitHub: https://github.com/ibharrat

# Work History
1. Cintas (May 2026 – Aug 2026) | Cloud Engineer Intern | Mason, Ohio
   - Collaborated on the deployment of refactored microservices on GCP, ensuring robust cloud architecture to support backend data operations and enterprise applications.
   - Streamlined cloud resource management by developing standardized Terraform configurations, deployed via GitLab CI/CD, to maintain consistent and queryable environments.
   - Supported large-scale enterprise environments by navigating GCP resource hierarchies, organization policies, and Shared VPCs for critical business workloads.
   - Led infrastructure deployment for an intern project, translating complex provisioning requirements into actionable, automated cloud solutions.
2. Purple (Sep 2026) | Sales Lead / Keyholder | Shrewsbury, NJ
   - Manage daily retail operations, including secure opening/closing procedures, financial transactions, and inventory monitoring.
   - Lead the sales floor team, providing coaching on product knowledge and resolving escalated customer inquiries to ensure satisfaction.

# Certifications
- AWS Certified CloudOps Engineer – Associate (Credly)
- AWS Certified Cloud Practitioner (Credly: https://www.credly.com/badges/ae6748a2-b8b3-474c-87ab-8e2c997f425c/public_url)
- CompTIA ITF+ (Credly: https://www.credly.com/badges/c4372f5b-8455-4386-98b3-a98fdfc1176c/public_url)
- NJ SECON 2025 Cyber Security Conference (Attendee)

# Communication Instructions:
1. ONLY use the verified facts above. Do NOT mention outdated or previous positions like Diamond Distribution or Cotton-On.
2. Expressly present Ian's career aspirations in three clear pillars: Infrastructure, Data Analytics, and Software Engineer.
3. Be professional, crisp, articulate, and friendly.
4. When mentioning links, use standard markdown link formatting like [Link Name](url).
5. If asked how to reach Ian, provide his email (ian.bharrat@gmail.com), phone (732-484-8378), LinkedIn (https://www.linkedin.com/in/ian-bharrat/), and GitHub (https://github.com/ibharrat).
`;
