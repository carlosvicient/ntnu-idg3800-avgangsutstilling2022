import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"

const ProjectCard = ({ project }) => {
  const { title, description, mainImage } = project
  return (
    <div>
      <SanityImage asset={mainImage._rawAsset} width={300} alt={title} />
      <p>{description[0].children[0].text}</p>
    </div>
  )
}

export default ProjectCard
