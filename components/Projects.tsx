import React from "react";
import SectionLayout from "./SectionLayout";
import Container from "./Container";
import Image from "next/image";
import { HeadingStyles } from "@/lib/styles";
import Link from "next/link";
import { BsFire, BsGithub } from "react-icons/bs";
import { getProjects } from "@/sanity/queries";
import { urlForImage } from "@/sanity/lib/image";

const Projects = async () => {
  const projects = await getProjects();

  return (
    <SectionLayout name="projects" title="Projects I've built">
      <Container className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] justify-center gap-5">
        {projects.length > 0 &&
          projects.map(
            ({ name, image, description, live_link, code_link }, index) => (
              <div
                key={index}
                className="bg-secondary shadow shadow-slate-900 border-secondary hover:border-gray-800  transition-all duration-200  border rounded-md overflow-hidden"
              >
                <div className="h-48 sm:h-36 overflow-hidden bg-slate-200 w-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={urlForImage(image).url()}
                    placeholder="blur"
                    blurDataURL="images/project.png"
                    width={300}
                    height={200}
                    alt={name}
                  />
                </div>
                <div className="h- p-3">
                  <div className="flex justify-between">
                    <h3 className={HeadingStyles.size.small}>{name}</h3>

                    <div className="w-fit flex gap-2 items-center">
                      <Link href={live_link}>
                        <BsFire size={20} />
                      </Link>

                      {code_link && (
                        <Link href={code_link}>
                          <BsGithub size={19} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="line-clamp-3 text-grayy">{description}</p>
                </div>
              </div>
            )
          )}
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
