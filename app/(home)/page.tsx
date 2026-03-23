import { HomeNav } from "@/components/home-nav";
import { ProjectsSection } from "@/components/projects-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | William Tsikata",
  description:
    "A collection of projects I've built — from full-stack apps to developer tools and experiments.",
  openGraph: {
    title: "Projects | William Tsikata",
    description:
      "A collection of projects I've built — from full-stack apps to developer tools and experiments.",
  },
};

export default function Home() {
  return (
    <>
      <div className="container">
        <HomeNav />
      </div>
      <ProjectsSection />
    </>
  );
}
