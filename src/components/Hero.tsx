"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "~/sanity";
import type { PageInfo } from "~/sanity.types";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero({ pageInfo }: { pageInfo: PageInfo }) {
  const [text] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo?.name}`, "A guy who loves to <Code />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        height={128}
        width={128}
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        src={urlFor(pageInfo?.heroImage)?.url() ?? ""}
        alt=""
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          {pageInfo?.role}
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
