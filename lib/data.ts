export const LINKS = {
  github: "https://github.com/manashinde16",
  linkedin: "https://www.linkedin.com/in/manashinde16/",
  email: "manashinde16@gmail.com",
  phone: "+91-9960771836",
  resume:
    "https://docs.google.com/document/d/1YZB3cXQdqQe-MsAwXyU8bj94Tb3OF5Ju/edit?usp=sharing",
};

export type Experience = {
  meta: string;
  role: string;
  org: string;
  orgNote: string;
  points: string[];
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    meta: "Oct 2025 — Present · Remote",
    role: "Software Developer",
    org: "DoTimely",
    orgNote: "Mason, Ohio, USA",
    points: [
      "Led the migration of a legacy jQuery codebase to React, improving performance, maintainability and developer productivity.",
      "Designed and implemented complete customer flows with smooth navigation and a better user experience.",
      "Worked on payment features — reliability, validation and seamless billing interactions.",
      "Optimized front-end performance: fewer network calls, lower memory usage, faster load times.",
      "Integrated AWS S3 for secure, efficient media uploads.",
      "Built AI-powered UI features, including a chatbot interface for customer support and automation workflows.",
      "Fixed critical bugs and restored broken functionality without introducing regressions.",
    ],
    tags: ["React", "jQuery → React", "AWS S3", "Payments", "AI / Chatbot UI"],
  },
  {
    meta: "Jan 2024 — Jun 2024 · Pune",
    role: "Software Developer Intern",
    org: "Applied AI Consulting (AAIC)",
    orgNote: "",
    points: [
      "Developed scalable, modular React UI components in Agile sprints for AI-automation and logistics platforms.",
      "Integrated REST APIs and microservice endpoints into production UI flows.",
      "Implemented OCR with GCP Vision API and authentication with AWS Cognito in customer-facing apps.",
      "Translated Figma mockups into responsive, production-grade components with PMs and designers.",
      "Wrote unit tests, fixed performance bottlenecks, and shipped via GitLab CI/CD pipelines.",
    ],
    tags: ["React", "GCP Vision", "AWS Cognito", "CI/CD", "Microservices"],
  },
  {
    meta: "Sep 2022 — Nov 2022 · Nagpur",
    role: "Web Development Intern",
    org: "Atlanta Computers",
    orgNote: "",
    points: [
      "Built responsive, cross-browser web designs with attention to visual quality.",
      "Added interactive JavaScript features that increased site engagement by 20%.",
    ],
    tags: ["JavaScript", "Responsive Design", "Cross-browser"],
  },
];

export type SkillGroup = { idx: string; title: string; items: string[] };

export const SKILLS: SkillGroup[] = [
  {
    idx: "[A]",
    title: "Frontend",
    items: ["React", "Redux", "React Native", "Tailwind CSS", "Material UI", "jQuery", "HTML/CSS"],
  },
  {
    idx: "[B]",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Rate limiting", "Logging", "Socket.io"],
  },
  {
    idx: "[C]",
    title: "Data & Cloud",
    items: ["MySQL", "SQL", "MongoDB", "Redis", "AWS S3", "AWS Cognito", "GCP Vision"],
  },
  {
    idx: "[D]",
    title: "Languages & Tools",
    items: ["Java (OOP, DSA)", "JavaScript", "Jest", "Git / GitHub / GitLab", "Figma", "Agile / SDLC"],
  },
];

export type FeaturedProject = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  repo: string;
};

export const FEATURED: FeaturedProject[] = [
  {
    id: "FEATURED — 001",
    name: "SmartAI Router",
    description:
      "A cost-optimized LLM request gateway. Routes prompts to the most efficient model (OpenAI, Claude, Gemini, Cohere…) based on token usage, availability and reliability — with provider fallback, Redis caching, rate limiting, prompt logging, and usage-based cost tracking for production-grade LLM operations.",
    tags: ["Node.js", "Express", "Redis", "Neon", "Next.js", "Clerk"],
    repo: "https://github.com/manashinde16/SmartAI-Router",
  },
  {
    id: "FEATURED — 002",
    name: "TeamLoop",
    description:
      "A B2B team collaboration platform built on the MERN stack with real-time messaging via Socket.io. Role-based access control, scalable MongoDB storage, and secure project workflows deliver instant, organized team communication.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "RBAC"],
    repo: "https://github.com/manashinde16/TeamLoop-MERN",
  },
];

export type FlipProject = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  back: string[];
  link: string;
};

export const FLIP_PROJECTS: FlipProject[] = [
  {
    id: "003",
    name: "Sommaire AI",
    description:
      "An intelligent document summarization platform that turns complex PDFs into clear, concise summaries using LangChain, OpenAI and Google Generative AI.",
    tags: ["Next.js", "TypeScript", "LangChain", "Neon"],
    back: [
      "Upload → parse → summarize pipeline with UploadThing handling PDF storage",
      "LangChain orchestrates OpenAI and Gemini for reliable summaries",
      "Neon serverless Postgres stores documents and results",
    ],
    link: "https://github.com/manashinde16",
  },
  {
    id: "004",
    name: "Mediplus",
    description:
      "A medical appointment booking platform that lets patients schedule visits with healthcare providers efficiently, with JWT-secured auth.",
    tags: ["React", "Express", "MongoDB", "JWT"],
    back: [
      "Separate patient and provider scheduling flows",
      "JWT auth with protected routes and sessions",
      "MongoDB models for appointments and availability",
    ],
    link: "https://github.com/manashinde16",
  },
  {
    id: "005",
    name: "Game Discount Notifier",
    description:
      "A Chrome extension that tracks games across platforms and notifies users when any store offers a 50%+ discount — always surfacing the best deal.",
    tags: ["JavaScript", "Chrome API", "Cheerio.js"],
    back: [
      "Scrapes major storefronts with Cheerio.js",
      "Chrome notifications fire on 50%+ price drops",
      "Picks the best platform by discount and duration",
    ],
    link: "https://github.com/manashinde16",
  },
];

export const MARQUEE = [
  "React", "Node.js", "TypeScript", "Express", "MySQL", "Redis", "Java",
  "AWS S3", "Redux", "Tailwind CSS", "REST APIs", "Jest", "Figma", "Git",
];
