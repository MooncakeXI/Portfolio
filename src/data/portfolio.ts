export interface SocialLink {
  label: string;
  href: string;
  platform: "github" | "linkedin" | "twitter" | "email" | "external";
}

export interface Skill {
  name: string;
  level: number;
}

export interface EducationItem {
  school: string;
  degree: string;
  major?: string;
  period: string;
  details?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  color?: string; // Optional gradient classes for featured visuals
}

export const personalInfo = {
  name: "Suvijak Phuphakdeepan",
  logoText: "<dev />",
  title: "Software Developer",
  roles: [
    "software engineer.",
    "full-stack developer.",
    "open-source contributor.",
    "problem solver.",
  ],
  bioShort:
    "I specialize in building exceptional digital experiences. Currently focused on crafting accessible, performant, and beautifully designed applications.",
  aboutParagraphs: [
    "Hello! I'm John, a software developer who loves building things that live on the internet. My interest in web development started back in 2016 when I decided to try editing custom Tumblr themes -- turns out hacking together a custom reblog button taught me a lot about HTML and CSS!",
    "Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation, and a digital agency. My main focus these days is building accessible, inclusive products and digital experiences.",
  ],
  avatarInitials: "JD",
  email: "suvijak237@gmail.com",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/MooncakeXI",
      platform: "github",
    },
    { label: "LinkedIn", href: "https://linkedin.com", platform: "linkedin" },
    { label: "Twitter", href: "https://twitter.com", platform: "twitter" },
    { label: "Email", href: "mailto:suvijak237@gmail.com", platform: "email" },
  ] as SocialLink[],
};

export const skills: Skill[] = [
  { name: "TypeScript", level: 92 },
  { name: "React / Next.js", level: 95 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "Docker / K8s", level: 75 },
  { name: "Tailwind CSS", level: 93 },
  { name: "GraphQL", level: 78 },
];

export const education: EducationItem[] = [
  {
    school: "Chulalongkorn University",
    degree: "Bachelor of Engineering",
    major: "Computer Engineering and Digital Technology",
    period: "2024 - Present",
    details: "Focused on Distributed Systems and Software Architecture.",
  },
  {
    school: "Suratpittaya School",
    degree: "High School Diploma",
    major: "Science Technology Environment and Mathematics",
    period: "2021 - 2023",
    details: "Science and Mathematics Intensive Program.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "Jan 2024 - Present",
    points: [
      "Led the migration of a legacy monolith to a microservices architecture, reducing deployment times by 70%.",
      "Architected and built the company's new design system used across 8 product teams.",
      "Mentored 4 junior developers through code reviews, pair programming, and technical workshops.",
    ],
  },
  {
    company: "TechStart Inc",
    role: "Full Stack Developer",
    period: "Mar 2022 - Dec 2023",
    points: [
      "Built and shipped a real-time analytics dashboard processing 1M+ events daily.",
      "Implemented CI/CD pipelines that reduced release cycle from 2 weeks to same-day.",
      "Collaborated with design team to improve conversion rates by 35% through A/B testing.",
    ],
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "Jun 2020 - Feb 2022",
    points: [
      "Developed responsive, accessible websites for 15+ clients across healthcare, fintech, and e-commerce.",
      "Introduced component-based architecture that reduced development time for new projects by 40%.",
      "Conducted accessibility audits ensuring WCAG 2.1 AA compliance for all deliverables.",
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: "Cloud Dashboard",
    description:
      "A comprehensive cloud infrastructure dashboard that provides real-time monitoring, cost analytics, and resource management. Built with performance and accessibility in mind.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-primary/5 to-primary/15",
  },
  {
    title: "DevSync",
    description:
      "A real-time collaborative code editor with built-in version control, live cursors, and instant deployment. Supports 30+ programming languages.",
    tech: ["Next.js", "WebSockets", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-primary/10 to-transparent",
  },
  {
    title: "Flux API",
    description:
      "A high-performance REST API framework with automatic documentation generation, rate limiting, and built-in authentication. Handles 10k+ requests per second.",
    tech: ["Go", "gRPC", "PostgreSQL", "Kubernetes"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-transparent to-primary/8",
  },
];

export const otherProjects: ProjectItem[] = [
  {
    title: "CLI Task Manager",
    description:
      "A minimal command-line task manager with local storage, tagging, and priority sorting.",
    tech: ["Rust", "SQLite"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "An open-source portfolio site generator that converts Markdown content to a polished site.",
    tech: ["Next.js", "MDX", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Pixel Art Editor",
    description:
      "A browser-based pixel art editor with layers, animation timelines, and export to GIF/PNG.",
    tech: ["Canvas API", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
  },
];
