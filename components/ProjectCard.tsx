"use client";

import { HeadingStyles } from "@/lib/styles";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ project }: { project: Project }) => {
  const { push: goTo } = useRouter();

  const { live_link, name, image, code_link, description } = project;

  return (
    <div
      onClick={() => goTo(live_link)}
      className="bg-secondary cursor-pointer shadow shadow-slate-900 border-secondary hover:border-gray-500  transition-all duration-150 ease-out  border rounded-md overflow-hidden"
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
            {code_link && (
              <Link
                href={code_link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <BsGithub size={19} />
              </Link>
            )}
          </div>
        </div>

        <p className="line-clamp-3 text-grayy">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
