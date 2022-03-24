import React from "react";

// Components
import ProjectCard from "./ProjectCard";

const ProjectList = ({ showcase }) => {
  return (
    <div>
      {showcase.firstproject ? <ProjectCard project={showcase.firstproject} /> : null}
      {showcase.secondproject ? <ProjectCard project={showcase.secondproject} /> : null}
      {showcase.thirdproject ? <ProjectCard project={showcase.thirdproject} /> : null}
    </div>
  )
}

export default ProjectList;
