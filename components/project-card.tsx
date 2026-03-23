import { ExternalLink, Github } from "lucide-react";

import type { Project } from "@/types/project";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border-border bg-card hover:border-primary/40 overflow-hidden rounded-lg border transition-colors">
      <div
        className="aspect-square w-full"
        style={{ background: project.image }}
      />
      <div className="flex items-start justify-between gap-2 p-3">
        <div>
          <h3 className="font-heading text-foreground text-lg font-semibold">
            {project.title}
          </h3>
          <p className="text-sm">{project.description}</p>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1.5 transition-colors"
            aria-label={`Preview ${project.title}`}
          >
            <ExternalLink className="size-4" />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1.5 transition-colors"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <Github className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
