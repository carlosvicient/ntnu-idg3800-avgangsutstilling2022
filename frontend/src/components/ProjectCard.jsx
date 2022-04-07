import React from "react"

// Components
import SanityImage from "gatsby-plugin-sanity-image"

import * as ProjectCardStyles from "../styles/ProjectCard.module.css"

const ProjectCard = ({ project, startCarousel }) => {
  const { title, description, mainImage } = project
  return (
    <div className={ProjectCardStyles.ProjectCard}>
      <h3>{title}</h3>
      {mainImage && <SanityImage
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
      />}
      <div>
        {description.map((description) => (
          <p>{description.children.map((children) => (
            children.text
          ))}</p>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
