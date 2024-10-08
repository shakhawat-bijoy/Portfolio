"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="md:py-20 py-16" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-5">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            {/* Use the new 3D Card structure */}
            <CardContainer containerClassName="card-3d-container">
              <CardBody className="relative px-3 md:px-0">
                {/* Background image */}
                <CardItem translateZ={-50}>
                  <div
                    className="relative w-full h-72 overflow-hidden lg:rounded-3xl px-3 md:px-0"
                    
                  >
                    <img src={item.img} alt="bgimg" />
                  </div>
                </CardItem>

                {/* Project title */}
                <CardItem translateZ={100}>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 md:mt-5 mt-2 px-3 md:px-0">
                    {item.title}
                  </h1>
                </CardItem>

                {/* Project description */}
                <CardItem translateZ={80}>
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-1 md:mt-2 px-3 md:px-0"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>
                </CardItem>

                {/* Tech icons and live site link */}
                <CardItem translateZ={70}>
                  <div className="flex items-center justify-between mt-7 mb-3 gap-10 px-3 md:px-0">
                    {/* Source Code */}
                    {item.github && (
                      <div className="flex justify-center items-center cursor-pointer px-3 md:px-0">
                        <Link
                          href={item.github}
                          target="_blank"
                          className="flex lg:text-xl md:text-xs text-sm text-purple"
                        >
                          GitHub
                          <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </Link>
                      </div>
                    )}

                    {/* Live site link */}
                    {item.link && (
                      <div className="flex justify-center items-center cursor-pointer">
                        <Link
                          href={item.link}
                          target="_blank"
                          className="flex lg:text-xl md:text-xs text-sm text-purple "
                        >
                          Live Site
                        </Link>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    )}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
