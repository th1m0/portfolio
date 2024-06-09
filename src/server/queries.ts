import { groq } from "next-sanity"
import { sanityClient } from "~/sanity"
import type { PageInfo, Project, Skill, Social } from "~/sanity.types"

export const fetchExperiences = async () => {
  const experienceQuery = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
  `
  const experiences = await sanityClient.fetch(experienceQuery)

  return experiences
}

export const fetchPageInfo = async () => {
  const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]
  `
  const pageInfo = await sanityClient.fetch<PageInfo>(pageInfoQuery)

  return pageInfo
}

export const fetchProjects = async () => {
  const projectsQuery = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
  `
  const projects = await sanityClient.fetch<Project[]>(projectsQuery)

  return projects
}

export const fetchSkills = async () => {
  const skillsQuery = groq`
    *[_type == "skill"]
  `
  const skills = await sanityClient.fetch<Skill[]>(skillsQuery)

  return skills
}

export const fetchSocials = async () => {
  const socialsQuery = groq`
    *[_type == "social"]
  `
  const socials = await sanityClient.fetch<Social[]>(socialsQuery)

  return socials
}