"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import type { SkillsQueryResult } from "~/sanity.types";

export default function Skills({ skills }: { skills: SkillsQueryResult }) {
  return (
    <motion.div className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10">
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>

      <h3 className="absolute top-24 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills
          ?.slice(0, skills.length / 2)
          ?.map((skill) => <Skill key={skill._id} skill={skill} />)}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
