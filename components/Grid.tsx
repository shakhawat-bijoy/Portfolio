import React, { useMemo } from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  // Memoize the grid items to prevent unnecessary prop drilling on every render
  const memoizedGridItems = useMemo(() => gridItems, []);
  
  // Memoize the BentoGrid className to prevent string recreation
  const bentoGridClassName = useMemo(() => "w-full md:py-20 py-8", []);

  return (
    <section id="about">
      <BentoGrid className={bentoGridClassName}>
        {memoizedGridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;