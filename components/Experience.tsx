import React, { useMemo } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  // Memoize the gradient style to prevent recreation on every render
  const gradientStyle = useMemo(() => ({
    background: "rgb(4,7,29)",
    backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    borderRadius: "calc(1.75rem * 0.96)",
  }), []);

  // Memoize the button class to prevent string concatenation on every render
  const buttonClassName = useMemo(() => 
    "flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 pointer-events-none",
    []
  );

  return (
    <div className="w-full md:py-20 py-10">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={gradientStyle}
            className={buttonClassName}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                loading="lazy"
                decoding="async"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;