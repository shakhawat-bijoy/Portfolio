"use client";
import React, { memo } from "react";
import { HeroParallax } from "./ui/hero-parallax";

// Memoized component to prevent unnecessary re-renders
export const HeroParallaxDemo = memo(() => {
  return <HeroParallax products={products} />;
});

HeroParallaxDemo.displayName = "HeroParallaxDemo";

// Optimized products array - removed duplicates and kept only unique items
export const products = [
  {
    id: 1,
    title: "Birds | My first NextJs App",
    des: "Bird | Design & Development Studio. Grow your business with Bird, a design and Development Studio.",
    img: "https://i.ibb.co.com/N1X9qVg/Bird.png",
    link: "https://bird-agency.vercel.app/",
    github: "https://github.com/shakhawat-bijoy/bird-agency",
  },
  {
    id: 2,
    title: "Orebi E-Commerce",
    des: "Orebi - Minimal eCommerce Figma Template - It is easy to use this design, you can adapt it for any kind of products.",
    img: "https://i.ibb.co.com/7gNbhS7/Orebi.webp",
    link: "https://orebi-one.vercel.app/",
    github: "https://github.com/shakhawat-bijoy/Orebi",
  },
  {
    id: 3,
    title: "Community",
    des: "Community apps serve as digital hubs where individuals converge to connect, collaborate, and share knowledge.",
    img: "https://i.ibb.co.com/zHs4TVM/Community.webp",
    link: "https://community-chain.vercel.app/",
    github: "https://github.com/shakhawat-bijoy/Community",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "https://i.ibb.co.com/2d7zjFj/Apple.webp",
    link: "https://blue-apple-ten.vercel.app/",
    github: "https://github.com/shakhawat-bijoy/apple",
  },
  {
    id: 5,
    title: "Garicht Restaurants",
    des: "Gericht - Minimal Restaurants Figma Template - It is easy to use this design, you can adapt it for any kind of products.",
    img: "https://i.ibb.co.com/k8GQjZV/gericht.webp",
    link: "https://gericht-one.vercel.app/",
    github: "https://github.com/shakhawat-bijoy/Gericht",
  },
  {
    id: 6,
    title: "Hekto E-Commerce",
    des: "Hekto - Functional eCommerce Figma Template - It is easy to use this design, you can adapt it for any kind of products.",
    img: "https://i.ibb.co.com/MBW0L3R/Hekto.webp",
    link: "https://hekto-blue.vercel.app/",
    github: "https://github.com/shakhawat-bijoy/Hektot",
  },
];

// If you need more items for the parallax effect, you can duplicate the array
export const extendedProducts = [...products, ...products, ...products];