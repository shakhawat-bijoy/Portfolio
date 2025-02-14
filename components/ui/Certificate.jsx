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

export default function Certificate() {
  const images = [
    {
      id: 1,
      img: "https://ik.imagekit.io/abpj7jifz/certificate.png?updatedAt=1739537899172",
    },
  ];

  return (
    <div className="pt-6 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-sm md:text-base">
            Certificate 📃
          </span>
          <div className="planeIcon -translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🧑‍🎓👨‍🎓
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Frontend {" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
               Web
              </span>{" "}
              Development With{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                React
              </span>{" "}
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
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
                  className="rounded-lg mt-4 p-0.5 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.img} // Correctly reference the image URL
                    alt="certificate"
                    width={700}
                    height={800}
                    className="rounded-lg w-full md:w-[32rem] h-72 md:h-[32rem] object-contain"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-6 flex flex-wrap gap-x-2 gap-y-6 items-start justify-start max-w-full mx-auto">
              <li>
                Front-end{" "}
                <span className="font-bold text-purple">
                  (HTML, CSS, React.js, Tailwind CSS)
                </span>{" "}
                with a strong background in building scalable web applications
              </li>
              <li>
                Demonstrated ability to manage and deliver projects{" "}
                <span className="font-bold text-purple">efficiently</span>, from
                initial planning and design to final deployment and maintenance.
              </li>
              <li>
                Committed to{" "}
                <span className="font-bold text-purple">staying updated</span>{" "}
                with the{" "}
                <span className="font-bold text-purple">
                  latest industry trends and technologies
                </span>
                , continuously enhancing skills to provide innovative solutions
              </li>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
