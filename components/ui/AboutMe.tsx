"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal"; // Ensure animated-modal is correctly implemented
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  const images = [
    {
      id: 1,
      img: "https://ik.imagekit.io/abpj7jifz/1731832259415.jpg?updatedAt=1739535598408",
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/abpj7jifz/web%20developer%201.jpg?updatedAt=1739536562201",
    },
    {
      id: 3,
      img: "https://ik.imagekit.io/abpj7jifz/IMG_5364.JPG?updatedAt=1751082369775",
    },
    {
      id: 4,
      img: "https://ik.imagekit.io/abpj7jifz/IMG_5172.JPG?updatedAt=1752087957203",
    },
    {
      id: 5,
      img: "https://ik.imagekit.io/abpj7jifz/1750155377729.jpg?updatedAt=1751082160346",
    },
  ];

  return (
    <div className="pt-6 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-sm md:text-base">
            Hi!🙋Click Here
          </span>
          <div className="planeIcon -translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              A bit{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                about
              </span>{" "}
              me! ✈️
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-lg -mr-4 mt-4 p-0.5 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.img} // Correctly reference the image URL
                    alt="images"
                    width={800}
                    height={800}
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-full mx-auto">
              <p className="">
                I&apos;m a web developer dedicated to crafting beautiful and
                joyful digital experiences. My passion for design drives me to
                create engaging interfaces that delight users.{" "}
              </p>
              <p className="text-purple">
                Beyond my work, I enjoy traveling, which inspires my creativity
                and broadens my perspective. Exploring new places and cultures
                fuels my passion for design and keeps my ideas fresh. In
                addition to traveling, I have a love for gaming and music.
              </p>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
