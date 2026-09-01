import {
  companies,
  gridItems,
  navItems,
  projects,
  socialMedia,
  testimonials,
  workExperience,
} from "@/data";
import { getDatabase } from "@/lib/mongodb";

export type PortfolioContent = {
  navItems: typeof navItems;
  gridItems: typeof gridItems;
  projects: typeof projects;
  testimonials: typeof testimonials;
  companies: typeof companies;
  workExperience: typeof workExperience;
  socialMedia: typeof socialMedia;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    resumeUrl: string;
  };
  footer: {
    heading: string;
    description: string;
    email: string;
  };
};

export const defaultContent: PortfolioContent = {
  navItems,
  gridItems,
  projects,
  testimonials,
  companies,
  workExperience,
  socialMedia,
  hero: {
    eyebrow: "Dynamic Web Magic with React.js",
    title: "Transforming Concepts into Seamless User Experiences",
    subtitle: "Hi! I'm Shakhawat Bijoy, a React.JS FrontEnd Developer.",
    resumeUrl: "/shakhawat-bijoy.pdf",
  },
  footer: {
    heading: "Ready to take your digital presence to the next level?",
    description:
      "Reach out to me today and let's discuss how I can help you achieve your goals.",
    email: "shakhawatbijoy1@gmail.com",
  },
};

const collection = "portfolio_content";

export async function getPortfolioContent(): Promise<PortfolioContent> {
  const database = await getDatabase();
  if (!database) return defaultContent;

  const stored = await database
    .collection<PortfolioContent>(collection)
    .findOne({ key: "main" });
  return stored
    ? ({
        ...defaultContent,
        ...stored,
        _id: undefined,
        key: undefined,
      } as PortfolioContent)
    : defaultContent;
}

export async function savePortfolioContent(content: PortfolioContent) {
  const database = await getDatabase();
  if (!database)
    throw new Error(
      "MongoDB is not configured. Add MONGODB_URI to .env.local.",
    );

  await database
    .collection(collection)
    .replaceOne(
      { key: "main" },
      { key: "main", ...content, updatedAt: new Date() },
      { upsert: true },
    );
  return content;
}
