import React, { useEffect, useState } from "react"
import * as styles from "../styles/biocard.module.css"
import SocialLinks from "./SocialLinks"

// Components
import SanityImage from "gatsby-plugin-sanity-image"

const BioCard = ({ student }) => {
  const [largeScreenSize, setLargeScreenSize] = useState(
    window.matchMedia("(min-width: 900px)").matches
  )

  useEffect(() => {
    window.matchMedia("(min-width: 900px)").addEventListener("change", e => {
      setLargeScreenSize(e.matches)
    })
  })

  console.log(student)
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h2 className={styles.fullName}>
          {`${student.name} 
        ${student.surname.charAt(0)}.`}
        </h2>
        <p className={styles.studyProgramme}>Grafisk designer</p>
        <div className={styles.profileImageContainer}>
          {student.image && (
            <SanityImage
              className={styles.profileImage}
              asset={student.image._rawAsset}
              alt={`${student.name}`}
            />
          )}
        </div>
        { largeScreenSize && <div className={styles.test}>
          <SocialLinks links={student.social} />
        </div>}
      </div>
      <div className={styles.bioContainer}>
        <p className={styles.bio}>{student.bio[0].children[0].text}</p>
      </div>
      { !largeScreenSize && <div className={styles.test}>
          <SocialLinks links={student.social} />
        </div>}
    </div>
  )
}

export default BioCard
