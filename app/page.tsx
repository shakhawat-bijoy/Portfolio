"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Loading from "@/components/Loading"; // Adjust the path if needed
import { TracingBeamDemo } from "@/components/TracingBeamDemo";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds delay for the loading screen

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Show the loading component while the site is loading
  if (isLoading) {
    return <Loading />;
  }

  // Main content to render after loading is complete
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        {/* <HeroParallaxDemo/> */}
        <Experience />
        <Approach />
        {/* <TracingBeamDemo/> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;






// "use client";
// import { useState, useEffect } from "react";
// import { navItems } from "@/data";
// import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import Loading from "@/components/Loading";

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Track when resources are loaded
//     const handleLoad = () => {
//       setIsLoading(false);
//     };

//     // Add load event listener
//     window.addEventListener("load", handleLoad);

//     // Fallback timer in case load event doesn't fire
//     const fallbackTimer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     // Cleanup
//     return () => {
//       window.removeEventListener("load", handleLoad);
//       clearTimeout(fallbackTimer);
//     };
//   }, []);

//   return (
//     <>
//       {/* Loading overlay */}
//       <div
//         className={`fixed inset-0 z-50 bg-black-100 transition-opacity duration-500 ${
//           isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <Loading />
//       </div>

//       {/* Main content */}
//       <main
//         className={`relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 transition-opacity duration-500 ${
//           isLoading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <div className="max-w-7xl w-full">
//           <FloatingNav navItems={navItems} />
//           <Hero />
//           <Grid />
//           <RecentProjects />
//           <Experience />
//           <Approach />
//           <Footer />
//         </div>
//       </main>
//     </>
//   );
// };

// export default Home;
