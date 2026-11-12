import { FAQS } from "@/faqs";
import { CALENDLY_URL, EMAIL } from "@/links";
import { SERVICE_GROUPS } from "@/services";
import { STACK } from "@/stack";

const SITE_URL = "https://stewartsoftware.dev";
const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#geoffrey`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SAME_AS = [
  "https://www.linkedin.com/in/ivangeoffreystewart",
  "https://github.com/ivanstewart2001",
];

const DESCRIPTION =
  "Senior software engineering, on demand, for founders and small businesses: MVP development, web and mobile apps, feature development, payments and integrations, AI integration, and ongoing support.";

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Stewart Software",
      description: DESCRIPTION,
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "Stewart Software",
      url: SITE_URL,
      logo: `${SITE_URL}/logos/stewartSoftwareLogoSmall.png`,
      image: `${SITE_URL}/opengraph-image`,
      description: DESCRIPTION,
      email: EMAIL,
      foundingDate: "2025",
      founder: { "@id": PERSON_ID },
      areaServed: "Worldwide",
      sameAs: SAME_AS,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: EMAIL,
        url: CALENDLY_URL,
        availableLanguage: "English",
      },
      knowsAbout: STACK.flatMap(({ items }) => items),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering Services",
        itemListElement: SERVICE_GROUPS.map((group) => ({
          "@type": "OfferCatalog",
          name: group.title,
          itemListElement: group.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: { "@id": BUSINESS_ID },
            },
          })),
        })),
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Geoffrey Stewart",
      jobTitle: "Software Engineer",
      url: SITE_URL,
      image: `${SITE_URL}/about_images/professional_headshot.jpeg`,
      email: EMAIL,
      sameAs: SAME_AS,
      worksFor: { "@id": BUSINESS_ID },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Howard University",
      },
      knowsAbout: STACK.flatMap(({ items }) => items),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};
