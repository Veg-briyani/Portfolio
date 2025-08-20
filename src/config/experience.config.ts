import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Full-Stack Developer",
    employmentType: "Part-time",
    company: {
      name: "Bignote Publications",
      url: "#",
    },
    location: {
      name: "Remote",
    },
    start: "June 2023",
    end: "October 2023",
    description: [
      "Developed and maintained the e-commerce website for Bignote’s book catalog",
      "Implemented dynamic product listing and secure payment integration with Stripe",
      "Automated book upload workflows to improve editorial efficiency",
      "Enhanced SEO, accessibility, and mobile responsiveness across pages",
      "Tech: Next.js, React, Tailwind, Node.js, MongoDB, Stripe, Vercel"
    ],
  },
  {
    title: "Frontend Developer",
    employmentType: "Part-time",
    company: {
      name: "Maang.in",
      url: "#",
    },
    location: {
      name: "Remote",
    },
    start: "January 2024",
    end: "Present",
    description: [
      "Redesigned UI/UX for Maang's job-matching platform focused on Tier-2/3 engineering talent",
      "Built dynamic role listing, candidate dashboards, and onboarding flows using reusable components",
      "Worked closely with backend and design teams to deliver a cohesive frontend experience",
      "Improved performance and accessibility across desktop and mobile",
      "Tech: React, TypeScript, Tailwind, Zustand, Next.js, Vercel"
    ],
  },
  {
    title: "Full-Stack Developer",
    employmentType: "Contract",
    company: {
      name: "GigaML (Client - Zepto)",
      url: "#",
    },
    location: {
      name: "Remote",
    },
    start: "March 2024",
    end: "Present",
    description: [
      "Collaborated on AI-powered tools for Zepto’s catalog and logistics pipeline",
      "Built internal dashboards to visualize real-time product and inventory data",
      "Integrated ML APIs for intelligent tagging, anomaly detection, and operations insight",
      "Modernized existing codebase and improved development workflows with TypeScript and Docker",
      "Tech: React, Next.js, TypeScript, Node.js, PostgreSQL, Python, Tailwind, Docker, AWS"
    ],
  },
  
];