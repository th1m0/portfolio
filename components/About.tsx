import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="https://i.thimo.dev/63671231ad1dce5b8252aea0"
        crossOrigin="anonymous"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          repellendus repellat, deserunt eum pariatur cumque nesciunt possimus
          quo asperiores nostrum? Recusandae fugiat dolor omnis assumenda cumque
          fuga mollitia quisquam dolores! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dicta nulla facilis minus eaque aperiam
          perspiciatis, blanditiis consectetur at incidunt omnis animi
          repellendus aspernatur illum dolores ab cupiditate error illo
          deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis dolores eius, cum possimus distinctio odit tempora,
          laudantium id minus reiciendis corrupti dicta aliquam doloremque
          aspernatur veniam deleniti ut rem quas! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus placeat sint maxime dolore
          nemo, qui repellat rerum porro deleniti aliquid eligendi suscipit
          reprehenderit, cupiditate cumque est veniam facilis. Enim, facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sequi
          placeat ipsa minus accusantium nemo provident et, aspernatur
          temporibus nam tempore. Ea debitis, sint porro perspiciatis minus
          doloremque omnis amet.
        </p>
      </div>
    </motion.div>
  );
}
