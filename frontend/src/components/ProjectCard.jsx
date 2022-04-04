import React from "react"

// Components
import SanityImage from "gatsby-plugin-sanity-image"

import * as ProjectCardStyles from "../styles/ProjectCard.module.css"

const ProjectCard = ({ project, startCarousel }) => {
  const { title, description, mainImage } = project
  return (
    <div className={ProjectCardStyles.ProjectCard}>
      <SanityImage
        asset={mainImage._rawAsset}
        width={3000}
        alt={title}
        tabIndex="0"
        onClick={() => {
          startCarousel(project)
        }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            startCarousel(project)
          }
        }}
      />
      <p>{description[0].children[0].text}</p>
    </div>
  )
}

export default ProjectCard
