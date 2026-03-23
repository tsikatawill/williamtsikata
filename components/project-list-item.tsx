import { ExternalLink, Github } from "lucide-react";

import type { Project } from "@/types/project";
import Link from "next/link";

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <div className="border-border hover:bg-muted/50 flex items-center gap-4 border-b px-2 py-3 transition-colors">
      <div className="flex-1 gap-1 sm:gap-4">
        <h3 className="font-heading text-foreground font-semibold">
          {project.title}
        </h3>
        <p className="text-muted-foreground min-w-0 text-sm">
          {project.description}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1">
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
  );
}
