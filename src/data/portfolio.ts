import condoMlPipelineImg from "@/assets/condo-ml-pipeline.png";
import smartFarmIotImg from "@/assets/smart-farm-iot.png";

export interface SocialLink {
  label: string;
  href: string;
  platform: "github" | "linkedin" | "twitter" | "email" | "external";
}

export interface Skill {
  name: string;
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
  skillsLearned: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  color?: string; // Optional gradient classes for featured visuals
  image?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  period: string;
  description?: string;
}

export const personalInfo = {
  name: "Suvijak Phuphakdeepan",
  logoText: "<dev />",
  title: "Software Engineer",
  roles: ["software engineer.", "full-stack developer.", "problem solver."],
  bioShort:
    "Proactive Computer Engineering student with hands-on experience in full-stack web development and a strong interest in AI-powered systems.",
  aboutParagraphs: [
    "Hello! I'm Suvijak, a Computer Engineering and Digital Technology student at Chulalongkorn University. I have a strong problem-solving mindset and a passion for learning modern technologies, cloud platforms, and AI integrations to deliver impactful software solutions.",
    "Recently, I worked as a Software Engineer at PorTCAS where I built document-processing pipelines using the Gemini API. Prior to that, I interned at Index Living Mall developing full-stack web applications for large-scale clearance events.",
  ],
  email: "6733280721@student.chula.ac.th",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/MooncakeXI",
      platform: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suvijak-phuphakdeepan/",
      platform: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:6733280721@student.chula.ac.th",
      platform: "email",
    },
  ] as SocialLink[],
};

export const skills: Skill[] = [
  { name: "Python" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "REST API Design" },
  { name: "SQL" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Machine Learning" },
  { name: "Firebase" },
  { name: "Docker" },
  { name: "Postman" },
  { name: "Git" },
];

export const education: EducationItem[] = [
  {
    school: "Chulalongkorn University",
    degree: "Bachelor of Engineering",
    major: "Computer Engineering and Digital Technology",
    period: "Aug 2024 - Present",
    details: "GPAX: 3.41",
  },
  {
    school: "Suratpittaya School",
    degree: "High School Diploma",
    major: "Science Mathematics Technology and Environment (SMTE)",
    period: "2021 - 2023",
    details: "GPAX: 3.70",
  },
  {
    school: "Suratpittaya School",
    degree: "Junior High School Diploma",
    major: "Enriched Science and Technology (EST)",
    period: "2018 - 2020",
    details: "GPAX: 3.47",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "PorTCAS",
    role: "Software Engineer",
    period: "May 2026 - Jul 2026",
    points: [
      "Prototyped how far Google Drive and Gemini could push the platform past a typical web app, turning the proof-of-concepts that worked into real integrations.",
      "Built a document pipeline that reads transcripts, portfolios, and pitch decks up to 30 pages long and turns them into structured data with the Gemini API, with retries and timeouts built in so it doesn't fall over in production.",
      "Designed a token-based credit system from scratch, schema through 4 API endpoints, to keep usage of the platform's AI features fair and trackable.",
    ],
    skillsLearned: [
      "Gemini API",
      "Google Drive API",
      "Node.js",
      "Credit System Design",
      "Retry/Timeout Handling",
    ],
  },
  {
    company: "Index Living Mall",
    role: "Full Stack Developer",
    period: "May 2025 - Jul 2025",
    points: [
      "Shipped 'DC Clearance,' a web app built for Index Living Mall's biannual clearance sales, events that draw 60,000-100,000 shoppers through 6,000+ SKUs.",
      "Built out 11 REST endpoints covering everything from product listings and pricing/discount rules to wishlists and order history.",
      "Traced slow queries back to the ORM and rewrote the hot paths as hand-written SQL joins, keeping things fast as the catalog kept growing.",
      "Designed the UI mobile-first from day one, since most shoppers were browsing the clearance floor from their phones.",
      "Sat down with warehouse and sales staff directly and shipped feature changes mid-event based on what they actually needed on the floor.",
    ],
    skillsLearned: [
      "REST API Design",
      "SQL Optimization",
      "Mobile-First UI",
      "Stakeholder Collaboration",
      "React",
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: "End-to-End ML Pipeline: AI-Powered Condo Happiness Scoring",
    description:
      "Developed an Airflow pipeline processing 180,000+ urban complaint records and 2,000+ condo listings to train an ML model generating location-based happiness scores. Built interactive dashboards visualizing prices, risks, and happiness metrics across all 50 Bangkok districts.",
    tech: ["Python", "Airflow", "Machine Learning", "Data Visualization"],
    github: "https://github.com/ApiwitJoey/DSDE_SING_WATER_2025",
    live: "",
    color: "from-primary/5 to-primary/15",
    image: condoMlPipelineImg,
  },
  {
    title: "Software Design & IoT: Smart Farming System for Urban Residents",
    description:
      "Architected the embedded hardware system and built real-time pipelines streaming data from 6 sensor nodes every 5 seconds into Firebase, with automated LINE alerts. Led cross-functional integration connecting hardware seamlessly with the web app.",
    tech: [
      "IoT / Embedded Systems",
      "Firebase",
      "Real-time Data",
      "System Integration",
    ],
    live: "",
    color: "from-primary/10 to-transparent",
    image: smartFarmIotImg,
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "NAT Olympic Applied Math Camp 2023 – Candidate Selection",
    issuer: "Office of National Academic Test Program (NAT)",
    period: "Oct 2023",
    description:
      "Selected as a candidate representative through the qualifying exam for the Applied Mathematics track.",
  },
  {
    title: "สอวน. Computer Camp 2, Academic Year 2021",
    issuer: "Walailak University – POSN Computer Olympiad Center",
    period: "Apr 2022",
    description: "Completed Computer Olympiad training camp 2.",
  },
  {
    title: "สอวน. Computer Camp 2, Academic Year 2022",
    issuer: "Walailak University – POSN Computer Olympiad Center",
    period: "Apr 2023",
    description: "Completed Computer Olympiad training camp 2.",
  },
  {
    title: "SMTE Open House 2023 – 2nd Runner-up (Gold)",
    issuer: "SMTE School Network, hosted at Satree Phuket School",
    period: "Aug 2023",
    description:
      "2nd runner-up, poster project presentation, Computer category, at the 13th SMTE innovation fair.",
  },
  {
    title: "SMTE Open House 2023 – 1st Runner-up (Silver)",
    issuer: "SMTE School Network, hosted at Satree Phuket School",
    period: "Aug 2023",
    description:
      "1st runner-up, Computer Genius quiz competition, at the 13th SMTE innovation fair.",
  },
  {
    title: "MakeX Robotics Competition – 2nd Runner-up",
    issuer:
      "MakeX Challenge, Asian Intercontinental Tournament (Energy Innovator)",
    period: "Jul 2023",
    description: "2nd runner-up with Team Hoperation, competing for Thailand.",
  },
];
