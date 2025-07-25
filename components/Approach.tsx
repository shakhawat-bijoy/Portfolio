import React, { memo, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// Memoized phase data to prevent recreating objects
const PHASES = [
  {
    id: 1,
    title: "Planning & Strategy",
    order: "Phase 1",
    description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    canvasConfig: {
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden"
    }
  },
  {
    id: 2,
    title: "Development & Progress Update",
    order: "Phase 2",
    description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    canvasConfig: {
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [[255, 166, 158], [221, 255, 247]],
      dotSize: 2
    }
  },
  {
    id: 3,
    title: "Development & Launch",
    order: "Phase 3",
    description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    canvasConfig: {
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]]
    }
  }
];

// Memoized card style to prevent recreation
const cardStyle = {
  background: "rgb(4,7,29)",
  backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
};

const Approach = memo(() => {
  return (
    <section id="approach" className="w-full md:py-20 py-10">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {PHASES.map((phase) => (
          <Card
            key={phase.id}
            title={phase.title}
            icon={<AceternityIcon order={phase.order} />}
            description={phase.description}
            canvasConfig={phase.canvasConfig}
          />
        ))}
      </div>
    </section>
  );
});

Approach.displayName = "Approach";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  canvasConfig: {
    animationSpeed: number;
    containerClassName: string;
    colors?: number[][];
    dotSize?: number;
  };
}

const Card = memo(({ title, icon, description, canvasConfig }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={cardStyle}
    >
      {/* Corner icons - using transform instead of positioning for better performance */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect {...canvasConfig} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
});

Card.displayName = "Card";

const AceternityIcon = memo(({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
      >
        {order}
      </span>
    </button>
  );
});

AceternityIcon.displayName = "AceternityIcon";

export const Icon = memo(({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
});

Icon.displayName = "Icon";

export default Approach;