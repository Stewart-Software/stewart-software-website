interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  industry: string;
  image: string;
  links?: ProjectLink[];
  technologies?: string[];
}

export const PROJECTS: Array<Project> = [
  {
    title: "Talee",
    description:
      "Schools lose class time to roll call and often can't tell where a student is between periods. I built Talee end to end: it detects which room students are in and takes attendance automatically, with a web dashboard for district and school staff, iOS and Android apps for students and parents, and a backend that syncs rosters from student information systems. Available on the App Store and Google Play.",
    industry: "Education",
    image: "/project_images/talee.png",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/taleemobile/id6783080391",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.taleemobile.app",
      },
    ],
    technologies: [
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
    ],
  },
  {
    title: "Let's Fellowship",
    description:
      "Churches in the same community rarely know what the others need or can share. I built Let's Fellowship to connect them: people can find a church that fits, and congregations and community partners can share volunteers, event spaces, and other resources.",
    industry: "Religious/Nonprofit",
    image: "/project_images/lets-fellowship.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "MongoDB",
    ],
  },
  {
    title: "Jynxzi Clips",
    description:
      "Rainbow Six Siege players wanted one place to share and rank their best plays. I built and launched Jynxzi Clips, a clip platform for Xbox, PlayStation, and PC creators with community ratings, leaderboards, a daily Clip of the Day, and real-time scores. Multi-layer caching, CDN delivery, and Sentry monitoring kept it fast and reliable.",
    industry: "Gaming",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "NestJS",
      "Redis",
      "Sentry",
      "Cloudflare",
      "Google Cloud Run",
      "Vercel",
    ],
    image: "/project_images/jynxzi-clips.jpg",
  },
];
