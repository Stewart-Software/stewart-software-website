import {
  CreditCard,
  Handshake,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceGroup {
  title: string;
  subtitle: string;
  services: Service[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Build Something New",
    subtitle: "Starting from an idea",
    services: [
      {
        title: "MVP Development",
        description:
          "Go from idea to a launched product in weeks. Built to validate fast and grow without a rewrite.",
        icon: Rocket,
      },
      {
        title: "Web & Mobile Apps",
        description:
          "Custom web apps and cross-platform mobile apps, like Talee, live on the App Store and Google Play.",
        icon: Smartphone,
      },
    ],
  },
  {
    title: "Improve What You Have",
    subtitle: "Already have a product",
    services: [
      {
        title: "Features & Fixes",
        description:
          "New features shipped, bugs fixed, or a stalled project finished. I jump into existing codebases and get things moving.",
        icon: Wrench,
      },
      {
        title: "AI Integration",
        description:
          "Add practical AI features like chat, smart search, and automation to the product you already have.",
        icon: Sparkles,
      },
      {
        title: "Payments & Integrations",
        description:
          "Stripe payments and subscriptions, sign-in, and third-party APIs connected cleanly so your tools work together.",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Ongoing Partnership",
    subtitle: "No in-house developer",
    services: [
      {
        title: "Your Go-To Engineer",
        description:
          "A dedicated developer on a flexible, ongoing basis, building and improving your software as your business grows.",
        icon: Handshake,
      },
      {
        title: "Maintenance & Support",
        description:
          "Keep your app secure, up to date, and running smoothly long after launch.",
        icon: ShieldCheck,
      },
    ],
  },
];
