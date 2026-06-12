export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Analytic IT Services",
    role: "Full Stack Developer",
    period: "2026 — Present · 1 yr 2 mo",
    highlights: [
      "Developed full stack responsive web applications using HTML, CSS, Bootstrap, and JavaScript, reducing UI bugs by 40%.",
      "Built dynamic frontends using React.js and Next.js, improving page load time by 35% through code splitting and lazy loading.",
      "Designed and developed REST API backends using Node.js and Nest.js, supporting 5+ modules across the application.",
      "Managed MongoDB and PostgreSQL databases, optimizing queries to reduce response time by 25%.",
      "Implemented secure authentication systems using JWT and session management for 3+ projects.",
      "Achieved 30% improvement in application loading speed through performance optimization and caching strategies.",
    ],
  },
  {
    company: "Speed Techno Training Institute",
    role: "MERN Stack Training",
    period: "2025",
    highlights: [
      "Completed intensive 8-month MERN stack training program with hands-on project development.",
      "Built 3+ full stack projects integrating React.js, Node.js, MongoDB, and REST APIs.",
      "Gained practical experience in full stack development, API integration, and frontend-backend architecture.",
    ],
  },
];
