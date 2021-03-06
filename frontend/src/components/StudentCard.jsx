import React from "react"
import { Link, navigate } from "gatsby"

// Components
import SanityImage from "gatsby-plugin-sanity-image"

import * as styles from "../styles/studentcard.module.css"

// Student card displaying image and name of a student, linking to the specific student
const StudentCard = ({ node }) => {
  return (
    <Link
      to={`/${node.studyprogramme.slug.current}/${node.slug.current}`}
      className={styles.nodeco}
      tabIndex="-1"
    >
      <div
        role="link"
        className={styles.studentCard}
        tabIndex="0"
        onKeyDown={e => {
          if (e.key === "Enter") {
            navigate(
              `/${node.studyprogramme.slug.current}/${node.slug.current}`
            )
          }
        }}
      >
        {node.image && (
          <SanityImage
            className={styles.studentImage}
            asset={node.image._rawAsset}
            alt={`${node.name}, student i ${node.studyprogramme.name}`}
          />
        )}
        <p className={styles.studentCardName}>
          {node.name} {node.middle ? node.middle.charAt(0) + "." : ""}{" "}
          {node.surname.charAt(0) + "."}
        </p>
      </div>
    </Link>
  )
}

export default StudentCard
