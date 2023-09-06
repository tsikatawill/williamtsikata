import React from "react";
import SectionLayout from "./SectionLayout";
import Container from "./Container";
import { getProjects } from "@/sanity/queries";
import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const projects = await getProjects();

  return (
    <SectionLayout name="projects" title="Projects I've built">
      <Container className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] justify-center gap-5">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        {!projects.length && (
          <p className="text-center text-grayy max-w-sm mx-auto col-[1/-1]">
            Working on adding some projects
          </p>
        )}
      </Container>
    </SectionLayout>
  );
};

export default Projects;
