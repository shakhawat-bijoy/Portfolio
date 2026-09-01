"use client";
import { Suspense, lazy, useState, useEffect } from "react";
import {
  companies,
  gridItems,
  navItems,
  projects,
  socialMedia,
  testimonials,
  workExperience,
} from "@/data";
import type { PortfolioContent } from "@/lib/content";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {
  HeroSkeleton,
  GridSkeleton,
  ProjectsSkeleton,
  ExperienceSkeleton,
  ApproachSkeleton,
  FooterSkeleton
} from "@/components/LoadingSkeleton";

// Lazy load all components
const LazyHero = lazy(() => import("@/components/Hero"));
const LazyGrid = lazy(() => import("@/components/Grid"));
const LazyRecentProjects = lazy(() => import("@/components/RecentProjects"));
const LazyExperience = lazy(() => import("@/components/Experience"));
const LazyApproach = lazy(() => import("@/components/Approach"));
const LazyFooter = lazy(() => import("@/components/Footer"));

const localContent: PortfolioContent = {
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

// Client-only wrapper to prevent SSR issues
const ClientOnly = ({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

// Main content component that loads all components together
const MainContent = ({ content }: { content: PortfolioContent }) => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* FloatingNav loaded immediately for better UX */}
        <FloatingNav navItems={content.navItems} />

        <Suspense fallback={<HeroSkeleton />}>
          <LazyHero hero={content.hero} />
        </Suspense>

        <Suspense fallback={<GridSkeleton />}>
          <LazyGrid items={content.gridItems} />
        </Suspense>

        <Suspense fallback={<ProjectsSkeleton />}>
          <LazyRecentProjects projects={content.projects} />
        </Suspense>

        <Suspense fallback={<ExperienceSkeleton />}>
          <LazyExperience workExperience={content.workExperience} />
        </Suspense>

        <Suspense fallback={<ApproachSkeleton />}>
          <LazyApproach />
        </Suspense>

        <Suspense fallback={<FooterSkeleton />}>
          <LazyFooter socialMedia={content.socialMedia} footer={content.footer} />
        </Suspense>
      </div>
    </main>
  );
};

const Home = () => {
  const [content, setContent] = useState<PortfolioContent>(localContent);

  useEffect(() => {
    fetch("/api/content")
      .then((response) => response.json())
      .then(setContent)
      .catch(() => setContent(localContent));
  }, []);

  return (
    <ClientOnly>
      <MainContent content={content} />
    </ClientOnly>
  );
};

export default Home;