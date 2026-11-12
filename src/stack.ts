interface StackCategory {
  category: string;
  items: string[];
}

export const STACK: StackCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "TanStack Query"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Vercel", "Cloudflare", "GitHub Actions"],
  },
  {
    category: "Integrations",
    items: ["Stripe", "Sentry"],
  },
];
