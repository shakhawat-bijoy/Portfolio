import React, { useMemo } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  // Memoize the spotlight configurations to prevent recreation on every render
  const spotlightConfigs = useMemo(() => [
    {
      className: "-top-40 -left-10 md:-left-32 md:-top-20 h-screen",
      fill: "white"
    },
    {
      className: "h-[80vh] w-[50vw] top-10 left-full",
      fill: "purple"
    },
    {
      className: "left-80 top-28 h-[80vh] w-[50vw]",
      fill: "blue"
    }
  ], []);

  // Memoize the grid background classes to prevent string recreation
  const gridBackgroundClass = useMemo(() => 
    "h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center",
    []
  );

  const radialGradientClass = useMemo(() => 
    "absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
    []
  );

  // Memoize the hero text to prevent string recreation
  const heroText = useMemo(() => "Transforming Concepts into Seamless User Experiences", []);
  const subText = useMemo(() => "Hi! I'm Shakhawat Bijoy, a React.JS FrontEnd Developer.", []);

  // Memoize the download link attributes
  const resumeDownload = useMemo(() => ({
    href: "/ShakhawatBijoy1.pdf",
    download: "Shakhawat-Bijoy-Resume.pdf"
  }), []);

  return (
    <div className="md:pb-20 pb-0 md:pt-36 pt-28" id="home">
      {/**
       *  UI: Spotlights
       */}
      <div>
        {spotlightConfigs.map((config, index) => (
          <Spotlight
            key={index}
            className={config.className}
            fill={config.fill}
          />
        ))}
      </div>

      {/**
       *  UI: grid
       */}
      <div className={gridBackgroundClass}>
        {/* Radial gradient for the container to give a faded look */}
        <div className={radialGradientClass} />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with React.js
          </p>

          <TextGenerateEffect
            words={heroText}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {subText}
          </p>

          <div className="flex justify-between items-center gap-5">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            {/* Correct link to download the PDF */}
            <a
              href={resumeDownload.href}
              download={resumeDownload.download}
            >
              <MagicButton
                title="Hire Me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;