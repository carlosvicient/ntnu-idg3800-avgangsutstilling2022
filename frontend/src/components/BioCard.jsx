import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import SocialLinks from "./SocialLinks"

// Components
import * as styles from "../styles/biocard.module.css"

const BioCard = ({ student }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {student.name && student.surname &&<h2 className={styles.fullName}>
          {`${student.name} 
        ${student.surname.charAt(0)}.`}
        </h2>
        {student.studyprogramme.title && <p className={styles.studyProgramme}>{student.studyprogramme.title}</p>}
        <span>
          <div>
            {student.image && (
              <SanityImage
                className={styles.profileImage}
                asset={student.image._rawAsset}
                alt={`${student.name}`}
              />
            )}
          </div>
          <div className={styles.bioContainer}>
            <p className={styles.bio}>{student.bio.map((bio) => (bio.children[0].text))}</p>
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
