import React, { useRef, useCallback, useEffect } from "react"
import * as ImageCarouselStyles from "../styles/ImageCarousel.module.css"

// Components
import SanityImage from "gatsby-plugin-sanity-image"
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdClear,
} from "react-icons/md"

const ImageCarousel = ({
  projects,
  currentImage,
  showImageCarousel,
  toggleImageCarouselState,
  setCurrentImage,
}) => {
  const { ImageCarousel, Carousel, icon, ImageContainer, exitIcon } =
    ImageCarouselStyles
  const bgRef = useRef()

  // Close carousel when clicking background (above/below image)
  const closeImageCarousel = e => {
    if (bgRef.current === e.target) {
      toggleImageCarouselState()
    }
  }

  const changeCarouselImage = newIndex => {
    if (newIndex >= projects.length) {
      setCurrentImage(prev => 0)
    } else if (newIndex < 0) {
      setCurrentImage(prev => projects.length - 1)
    } else {
      setCurrentImage(prev => newIndex)
    }
  }

  // Close carousel when ESC is pressed
  const exitOnEscape = useCallback(
    e => {
      if (e.key === "Escape" && showImageCarousel) {
        toggleImageCarouselState()
      }
    },
    [toggleImageCarouselState, showImageCarousel]
  )

  useEffect(() => {
    document.addEventListener("keydown", exitOnEscape)
    return () => document.removeEventListener("keydown", exitOnEscape)
  })

  // Change image when arrow keys are pressed
  const changeImage = useCallback(
    e => {
      if (e.key === "ArrowRight" && showImageCarousel) {
        changeCarouselImage(currentImage + 1)
      } else if (e.key === "ArrowLeft" && showImageCarousel) {
        changeCarouselImage(currentImage - 1)
      }
    },
    [changeCarouselImage, showImageCarousel]
  )

  useEffect(() => {
    document.addEventListener("keydown", changeImage)
    return () => document.removeEventListener("keydown", changeImage)
  })

  return (
    <div className={ImageCarousel} ref={bgRef} onClick={closeImageCarousel}>
      <div className={Carousel}>
        <div
          className={icon}
          aria-label="Previous image"
          onClick={() => changeCarouselImage(currentImage - 1)}
        >
          <MdOutlineArrowBackIos />
        </div>
        <div className={ImageContainer}>
          <div
            className={`${icon} ${exitIcon}`}
            aria-label="Close image carousel"
            onClick={toggleImageCarouselState}
          >
            <MdClear />
          </div>
          <SanityImage
            asset={projects[currentImage].mainImage._rawAsset}
            width={3000}
            alt={projects[currentImage].title}
          />
        </div>
        <div
          className={icon}
          aria-label="Next image"
          onClick={() => changeCarouselImage(currentImage + 1)}
        >
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
