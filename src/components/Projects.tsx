"use client";

import React from "react";
import { motion } from "framer-motion";
import type { ProjectsQueryResult } from "~/sanity.types";
import { urlFor } from "~/sanity";
import Image from "next/image";

export default function Projects({
  projects,
}: {
  projects: ProjectsQueryResult;
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
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative z-20 flex w-full snap-x snap-mandatory overflow-scroll overflow-y-hidden">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src={urlFor(project.image ?? null)?.url() ?? ""}
              alt=""
            />

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]">
                  Case Study {i + 1} of {projects?.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center justify-center space-x-2">
                {project?.technologies?.map((technology) => (
                  <Image
                    width={50}
                    height={50}
                    // className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image)?.url() ?? ""}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-center text-lg md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </motion.div>
  );
}
