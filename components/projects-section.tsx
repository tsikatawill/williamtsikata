"use client";

import { Hammer, LayoutGrid, List } from "lucide-react";
import { useEffect, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { ProjectListItem } from "@/components/project-list-item";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const isMobile = useIsMobile();
  const [view, setView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    setView(isMobile ? "list" : "grid");
  }, [isMobile]);

  if (projects.length === 0) {
    return (
      <section className="py-6">
        <div className="border-border bg-muted/30 flex flex-col items-center justify-center rounded-lg border py-16 text-center">
          <Hammer className="text-muted-foreground mb-3 size-8" />
          <p className="font-heading text-foreground text-lg font-semibold">
            Cooking up some new projects
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            I&apos;m working on something exciting. <br />
            Check back later!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="mb-4 flex items-center justify-end">
        <div className="bg-muted flex items-center gap-0.5 rounded-md p-1">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setView("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            className={cn(
              "cursor-pointer",
              view === "grid"
                ? "bg-primary/10 hover:bg-primary/10 text-primary hover:text-primary"
                : "text-muted-foreground hover:bg-primary/5",
            )}
          >
            <LayoutGrid className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setView("list")}
            aria-label="List view"
            aria-pressed={view === "list"}
            className={cn(
              "cursor-pointer",
              view === "list"
                ? "bg-primary/10 hover:bg-primary/10 text-primary hover:text-primary"
                : "text-muted-foreground hover:bg-primary/5",
            )}
          >
            <List className="size-4" />
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
