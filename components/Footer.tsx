import React, { useMemo } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import AboutMe from "@/components/ui/AboutMe";
import Certificate from "@/components/ui/Certificate";
import Link from "next/link";

const Footer = () => {
  // Memoize the email href to prevent string concatenation on every render
  const emailHref = useMemo(() => "mailto:shakhawatbijoy1@gmail.com", []);
  
  // Memoize the copyright text to prevent string operations
  const copyrightText = useMemo(() => `Copyright © ${new Date().getFullYear()} `, []);
  
  // Memoize the social media icon style to prevent recreation
  const socialIconStyle = useMemo(() => 
    "w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-gray-800 rounded-lg border border-gray-600",
    []
  );

  return (
    <footer className="w-full md:pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="absolute left-0 bottom-0 w-full overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-auto opacity-50"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={emailHref}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex items-center justify-center md:gap-10 gap-4">
        <AboutMe />
        <Certificate />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          {copyrightText}
          <Link href="https://bijoy-shakhawat.vercel.app/" target="_blank">
            Shakhawat Bijoy
          </Link>
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconStyle}
            >
              <img 
                src={info.img} 
                alt={`${info.id} social media icon`}
                width={20} 
                height={20}
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;