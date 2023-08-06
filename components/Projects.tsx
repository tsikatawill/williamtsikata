import React from "react";
import SectionLayout from "./SectionLayout";
import Container from "./Container";
import Image from "next/image";
import { HeadingStyles } from "@/lib/styles";
import Link from "next/link";
import { BsFire, BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <SectionLayout name="projects" title="Projects I've built">
      <Container className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-secondary border-secondary border rounded-md overflow-hidden"
          >
            <div className="h-48 sm:h-36 overflow-hidden bg-slate-200 w-full">
              <Image
                className="w-full h-full object-cover"
                src="/images/project.png"
                width={300}
                height={200}
                alt="..."
              />
            </div>
            <div className="h- p-3">
              <div className="flex justify-between">
                <h3 className={HeadingStyles.size.small}>Willfolio Project</h3>

                <div className="w-fit flex gap-2 items-center">
                  <Link href="/">
                    <BsFire size={20} />
                  </Link>

                  <Link href="/">
                    <BsGithub size={19} />
                  </Link>
                </div>
              </div>

              <p className="line-clamp-3 text-grayy">
                hic optio deserunt commodi impedit quidem minima unde ullam.
                Quod dignissimos ea velit fugiat libero voluptatum eius corporis
                tempora nihil saepe!
              </p>
            </div>
          </div>
        ))}
      </Container>
    </SectionLayout>
  );
};

export default Projects;
