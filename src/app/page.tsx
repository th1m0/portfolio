import type { Metadata } from "next";
import Link from "next/link";
import About from "~/components/About";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Image from "next/image";
import { fetchPageInfo, fetchSocials } from "~/server/queries";
import { urlFor } from "~/sanity";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Portfolio Thimo Sietsma",
  description:
    "Portfolio of Thimo Sietsma, a software engineer based in the Netherlands.",
  authors: {
    name: "Thimo Sietsma",
  },
};

export default async function HomePage() {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();

  return (
    <div className="scroll-bar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white">
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      {/* <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section> */}

      {/* Skills */}
      {/* <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section> */}

      {/* Projects */}
      {/* <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section> */}

      {/* Contact Me */}
      {/* <section id="contact" className="snap-start">
        <ContactMe />
      </section> */}

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              height={40}
              width={40}
              className="h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0"
              src={urlFor(pageInfo?.heroImage)?.url() ?? ""}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
