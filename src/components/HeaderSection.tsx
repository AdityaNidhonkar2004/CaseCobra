"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeaderSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-[31.4px] px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-28"
      >
        Every Case, a Canvas of<br/>
        <Highlight className="text-black dark:text-white text-[24px] md:text-4xl ">
        Dreams, Adventures,Journeys
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}

// Every Case, a Canvas of Dreams and Journeys