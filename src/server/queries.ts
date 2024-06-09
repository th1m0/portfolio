import { groq } from "next-sanity"
import { sanityClient } from "~/sanity"

export const fetchExperiences = async () => {
  const experiences = await sanityClient.fetch(groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
  `)

  return experiences
}

export const fetchPageInfo = async () => {
  const pageInfo = await sanityClient.fetch(groq`
    *[_type == "pageInfo"][0]
  `)

  return pageInfo
}

export const fetchProjects = async () => {
  const projects = await sanityClient.fetch(groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
  `)

  return projects
}

export const fetchSkills = async () => {
  const skills = await sanityClient.fetch(groq`
    *[_type == "skill"]
  `)

  return skills
}

export const fetchSocials = async () => {
  const socials = await sanityClient.fetch(groq`
    *[_type == "social"]
  `)

  return socials
}