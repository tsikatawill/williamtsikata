import { client } from "@/sanity/lib/client";

export const fetchProjects = async () => {
  const projects: P = await client.fetch(`*[_type=='project']`);
};
