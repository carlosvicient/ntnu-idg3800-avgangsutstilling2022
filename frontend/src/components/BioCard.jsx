import React, { useEffect, useState } from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import SocialLinks from "./SocialLinks"

// Components
import * as styles from "../styles/biocard.module.css"

const BioCard = ({ student }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h2 className={styles.fullName}>
          {`${student.name} 
        ${student.surname.charAt(0)}.`}
        </h2>
        <p className={styles.studyProgramme}>{student.studyprogramme.title}</p>
        <span>
          {/* Maybe remove profileImageContainerstyle */}
          <div className={styles.profileImageContainer}>
            {student.image && (
              <SanityImage
                className={styles.profileImage}
                asset={student.image._rawAsset}
                alt={`${student.name}`}
              />
            )}
          </div>
          <div className={styles.bioContainer}>
            {student.bio[0].children.map(paragraph => {
              return <p>{paragraph.text}</p>
            })}
          </div>
        </span>
      </div>
      <div>
        <SocialLinks links={student.social} />
      </div>
    </div>
  )
}

export default BioCard
