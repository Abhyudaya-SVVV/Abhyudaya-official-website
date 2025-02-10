import Carousel from "./Carousal";
import { turretFont } from "@/config/fonts";
import { projects } from "../../public/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center gap-5 my-5 " id="projects">
      <h1
        className={`${turretFont.className} text-3xl md:text-4xl font-extrabold`}
      >
        Projects
      </h1>
      <Carousel>
        {projects?.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Carousel>
    </div>
  );
};

export default ProjectSection;