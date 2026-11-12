export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Anything where I'm building: new MVPs, web and mobile apps, new features for existing products, payments and integrations, AI features, and ongoing development. If it involves writing code to move your business forward, let's talk.",
  },
  {
    question: "Can you work on an existing codebase?",
    answer:
      "Yes. I can pick up where another developer left off, add features, fix issues, or modernize an aging app. I'll get familiar with the code first so I can give you an honest scope and quote.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs take 4-8 weeks, depending on scope and complexity. You'll get a detailed timeline during planning so you know exactly what to expect.",
  },
  {
    question: "Do you work with non-technical founders and business owners?",
    answer:
      "Absolutely. Most of my clients aren't developers. I'll guide you through the technical decisions and explain everything in plain English so you're always informed.",
  },
  {
    question: "What's included, and how do we stay in touch?",
    answer:
      "New builds include planning, design, development, testing, and deployment. I keep you updated through whatever you prefer (email, Slack, etc.), hold weekly check-ins, and share demos and a staging environment so you can see progress as it happens.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every new build comes with 30 days of free post-launch support. After that, I'm available for maintenance and new features, either as needed or on an ongoing basis if you'd like a go-to developer without hiring full-time.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Mostly TypeScript across the stack: Next.js and React on the web, React Native and Expo for mobile, and Node.js/NestJS on the backend, with PostgreSQL, MongoDB, or Supabase for data and AWS, Google Cloud, or Vercel for hosting. I also work in Python, Java, and C++, and I'm comfortable picking up whatever your existing product already uses.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. I'm happy to sign an NDA before we discuss your project in detail.",
  },
  {
    question: "What does a project cost?",
    answer:
      "Every project is different, so I quote each one individually. After a free discovery call, you'll get a clear quote based on your scope and timeline. If the scope changes significantly later, I'll give you an updated estimate before doing the work, so there are no surprises.",
  },
];
