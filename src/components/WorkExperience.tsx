"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { ExperienceQueryResult } from "~/sanity.types";

export default function WorkExperience({
  experiences,
}: {
  experiences: ExperienceQueryResult;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>

      <div className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 flex w-full snap-x snap-mandatory space-x-5 overflow-y-hidden p-10">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
