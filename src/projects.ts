interface Project {
  title: string;
  description: string;
  industry: string;
  image: string;
  technologies?: string[];
}

export const PROJECTS: Array<Project> = [
  {
    title: "Let's Fellowship",
    description:
      "Let's Fellowship is an online platform that fosters unity and collaboration among Christian churches. It simplifies the process of finding a church and promotes resource sharing, such as volunteers and event spaces, between congregations and community partners. The platform is designed to help churches connect, engage, and serve their communities more effectively.",
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
    title: "Talee",
    description:
      "Talee is a flexible school class management system that dynamically maps students to specific periods, terms, and schedule templates, enabling precise student assignment tracking and automating attendance management across complex academic calendars.",
    industry: "Education",
    image: "/project_images/talee.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "MongoDB",
    ],
  },
];
