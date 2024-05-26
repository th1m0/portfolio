"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Experience } from "~/typings";
import { urlFor } from "~/sanity";
import Image from "next/image";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    // TODO: w-screen for less than 4 experiences.

    <article className="overlfow-hidden flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
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
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src={urlFor(experience?.companyImage)?.url() ?? ""}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{experience.company}</p>
        <div className="my-2 flex space-x-2">
          {experience?.technologies?.map((technology) => (
            <Image
              height={50}
              width={50}
              key={technology._id}
              className="rounded-full"
              src={urlFor(technology?.image)?.url() ?? ""}
              alt=""
            />
          ))}
        </div>
        <p className="py-5 uppercase text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          {experience?.points?.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
}
