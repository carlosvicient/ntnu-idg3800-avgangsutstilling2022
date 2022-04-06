import React, { useEffect, useState } from "react"

// Components
import ImageCarousel from "./ImageCarousel"
import ProjectCard from "./ProjectCard"

import * as ProjectListStyles from "../styles/ProjectList.module.css"

const ProjectList = ({ showcase }) => {
  let match = ""
  if (typeof window !== "undefined") {
    match = window.matchMedia("(min-width: 900px)").matches
  }
  const [largeScreenSize, setLargeScreenSize] = useState(match)
  const [showImageCarousel, setShowImageCarousel] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const projects = Object.values(showcase).filter(project => project)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.matchMedia("(min-width: 900px)").addEventListener("change", e => {
        setShowImageCarousel(prev => false)
        setLargeScreenSize(e.matches)
      })
    }
  })

  const toggleImageCarouselState = () => {
    setShowImageCarousel(prev => !prev)
  }

  const startCarousel = image => {
    const idx = projects.findIndex(element => element === image)
    setShowImageCarousel(prev => true)
    setCurrentImage(idx)
  }

  return (
    <div className={ProjectListStyles.ProjectList}>
      {showImageCarousel & largeScreenSize ? (
        <ImageCarousel
          projects={projects}
          currentImage={currentImage}
          showImageCarousel={showImageCarousel}
          toggleImageCarouselState={toggleImageCarouselState}
          setCurrentImage={setCurrentImage}
        />
      ) : null}
      <h2>Some of my projects</h2>
      {projects.map(project => {
        return <ProjectCard project={project} startCarousel={startCarousel} />
      })}
    </div>
  )
}

export default ProjectList
