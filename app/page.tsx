"use client";
import { Suspense, lazy, useState, useEffect } from "react";
import { navItems } from "@/data";

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
const MainContent = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* FloatingNav loaded immediately for better UX */}
        <FloatingNav navItems={navItems} />

        <Suspense fallback={<HeroSkeleton />}>
          <LazyHero />
        </Suspense>

        <Suspense fallback={<GridSkeleton />}>
          <LazyGrid />
        </Suspense>

        <Suspense fallback={<ProjectsSkeleton />}>
          <LazyRecentProjects />
        </Suspense>

        <Suspense fallback={<ExperienceSkeleton />}>
          <LazyExperience />
        </Suspense>

        <Suspense fallback={<ApproachSkeleton />}>
          <LazyApproach />
        </Suspense>

        <Suspense fallback={<FooterSkeleton />}>
          <LazyFooter />
        </Suspense>
      </div>
    </main>
  );
};

const Home = () => {
  return (
    <ClientOnly>
      <MainContent />
    </ClientOnly>
  );
};

export default Home;