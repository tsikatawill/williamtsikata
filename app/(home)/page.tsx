import { HomeNav } from "@/components/home-nav";
import { ProjectsSection } from "@/components/projects-section";

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
