import React, { useEffect, useState } from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import SocialLinks from "./SocialLinks"

// Components
import * as styles from "../styles/biocard.module.css"

const BioCard = ({ student }) => {
  let match = ""
  if (typeof window !== "undefined") {
    match = window.matchMedia("(min-width: 900px)").matches
  }
  const [largeScreenSize, setLargeScreenSize] = useState(match)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.matchMedia("(min-width: 900px)").addEventListener("change", e => {
        setLargeScreenSize(e.matches)
      })
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h2 className={styles.fullName}>
          {`${student.name} 
        ${student.surname.charAt(0)}.`}
        </h2>
        <p className={styles.studyProgramme}>{student.studyprogramme.title}</p>
        <div className={styles.profileImageContainer}>
          {student.image && (
            <SanityImage
              className={styles.profileImage}
              asset={student.image._rawAsset}
              alt={`${student.name}`}
            />
          )}
        </div>
        {largeScreenSize && (
          <div className={styles.test}>
            <SocialLinks links={student.social} />
          </div>
        )}
      </div>
      <div className={styles.bioContainer}>
        <p>{student.bio[0].children[0].text}</p>
      </div>
      {!largeScreenSize && (
        <div className={styles.test}>
          <SocialLinks links={student.social} />
        </div>
      )}
    </div>
  )
}

export default BioCard
