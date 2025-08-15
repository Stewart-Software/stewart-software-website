export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stewart Software",
  url: "https://stewartsoftware.dev",
  logo: "https://stewartsoftware.dev/logos/opengraph_1200x630.png",
  description:
    "Custom software development for startups and small businesses. Specializing in MVP development, web applications, and mobile apps.",
  foundingDate: "2025", // adjust if earlier
  founder: {
    "@type": "Person",
    name: "Geoffrey Stewart",
    jobTitle: "Software Engineer & Founder",
    url: "https://stewartsoftware.dev",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "geoffrey@stewartsoftware.dev",
      availableLanguage: "English",
    },
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "Software Development",
    "MVP Development",
    "Web Applications",
    "Mobile Applications",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Full Stack Development",
  ],
  offers: {
    "@type": "Service",
    name: "Custom Software Development",
    description:
      "MVP development, web applications, and mobile app development for startups and small businesses",
    serviceType: "Software Development",
    category: "Technology",
  },
  sameAs: [
    "https://www.linkedin.com/in/ivangeoffreystewart",
    "https://github.com/ivanstewart2001",
  ],
};
