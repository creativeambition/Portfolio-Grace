import { useState } from "react";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";

const Projects = () => {
  const [tags] = useState(["Tag", "Tag", "Tag", "Tag", "Tag"]);

  return (
    <div className="projects-wrapper">
      <div></div>

      <ProjectTemplate
        projectName="Project 1"
        projectDesc="Project Description"
        tags={tags}
      />

      <ProjectTemplate
        projectName="Project 2"
        projectDesc="Project Description"
        tags={tags}
      />

      <ProjectTemplate
        projectName="Project 3"
        projectDesc="Project Description"
        tags={tags}
      />

      <ProjectTemplate
        projectName="Project 4"
        projectDesc="Project Description"
        tags={tags}
      />

      <ProjectTemplate
        projectName="Project 5"
        projectDesc="Project Description"
        tags={tags}
      />

      <div></div>
    </div>
  );
};

export default Projects;
