export type Project = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "shopkart",
    title: "ShopKart — Multi-Vendor E-Commerce",
    description:
      "Production-style marketplace with customer storefront, merchant seller portal, and admin dashboard. Features Razorpay payments, Google OAuth, real-time notifications, and end-to-end order fulfillment.",
    highlights: [
      "Multi-role platform with customer, merchant, and admin dashboards",
      "COD + Razorpay checkout with returns, refunds, and order tracking",
      "Real-time notifications via Socket.IO and transactional email",
    ],
    tech: ["React", "NestJS", "MongoDB", "Razorpay", "Socket.IO", "TypeScript"],
    image: "/work/E-Commerce-3.png",
    liveUrl: "https://ecommerce-site-zeta-rosy.vercel.app/",
    githubUrl: "https://github.com/Sushil-Kumar-2/Ecommerce-site",
    featured: true,
  },
  {
    id: "sms-next",
    title: "Student Management System",
    description:
      "Full-stack admin application for managing student records with role-based access for admins and teachers. Built with Next.js App Router, Prisma, and PostgreSQL.",
    highlights: [
      "JWT authentication with admin and teacher role-based access",
      "Dashboard with stats, department charts, and analytics",
      "Student CRUD with search, filters, and pagination",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "JWT", "TypeScript"],
    image: "/projects/sms-next.svg",
    githubUrl:
      "https://github.com/Sushil-Kumar-2/Student-Management-System-Next",
    featured: true,
  },
];
