import { Project, SocialLink, Stack } from "@/types";
import { client } from "./lib/client";
import { cache } from "react";

export const getStack: () => Promise<Stack[]> = cache(async () => {
  const stack = await client.fetch(`*[_type=='stack']`);
  return stack;
});

export const getProjects: () => Promise<Project[]> = cache(async () => {
  const projects = await client.fetch(`*[_type=='project']{..., stack[]->}`);
  return projects;
});

export const getSocialLinks: () => Promise<SocialLink[]> = cache(async () => {
  const socialLinks = await client.fetch(`*[_type=='social_link']`);
  return socialLinks;
});
