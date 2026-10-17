import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => (
  <section id="work" className="c-space section-spacing">
    <h2 className="text-heading">Projects</h2>
    <div className="mt-8">
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
