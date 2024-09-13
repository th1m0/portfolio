import { groq } from "next-sanity";
import { sanityClient } from "~/sanity";
import type {
  ExperienceQueryResult,
  PageInfoQueryResult,
  ProjectsQueryResult,
  SkillsQueryResult,
  SocialsQueryResult,
} from "~/sanity.types";

export const fetchExperiences = async () => {
  const experienceQuery = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
  `;
  const experiences =
    await sanityClient.fetch<ExperienceQueryResult>(experienceQuery);

  if (experiences == null) throw new Error("No experiences found");

  return experiences;
};

export const fetchPageInfo = async () => {
  const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]
  `;
  const pageInfo = await sanityClient.fetch<PageInfoQueryResult>(pageInfoQuery);

  if (pageInfo == null) throw new Error("No page info found");

  return pageInfo;
};

export const fetchProjects = async () => {
  const projectsQuery = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
  `;
  const projects = await sanityClient.fetch<ProjectsQueryResult>(projectsQuery);

  return projects;
};

export const fetchSkills = async () => {
  const skillsQuery = groq`
    *[_type == "skill"]
  `;
  const skills = await sanityClient.fetch<SkillsQueryResult>(skillsQuery);

  return skills;
};

export const fetchSocials = async () => {
  const socialsQuery = groq`
    *[_type == "social"]
  `;
  const socials = await sanityClient.fetch<SocialsQueryResult>(socialsQuery);

  return socials;
};
