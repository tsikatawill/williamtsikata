import React from "react";
import SectionLayout from "./SectionLayout";
import Container from "./Container";

const Projects = () => {
  return (
    <SectionLayout name="projects" title="Projects I've built">
      <Container className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-secondary">
            <div className=" h-48 sm:h-36 bg-slate-200 w-full">s</div>
            <div className="h-20">a</div>
          </div>
        ))}
      </Container>
    </SectionLayout>
  );
};

export default Projects;
