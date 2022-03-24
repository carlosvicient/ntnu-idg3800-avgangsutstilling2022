import React from "react"
import ProjectCard from "./ProjectCard"

const ProjectList = ({ showcase }) => {
  return (
    <div>
      <ProjectCard project={showcase.firstproject} />
      {/* <ProjectCard project={showcase.secondproject} /> Disse er null atm */}
      {/* <ProjectCard project={showcase.thirdproject} />  Disse er null atm */}
    </div>
  )
}

export default ProjectList
