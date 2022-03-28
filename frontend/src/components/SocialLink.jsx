import React from "react"
import Icon from "./Icon"
import * as styles from "../styles/socialLink.module.css"

/** En enkel "social link" */

function SocialLink({ name }) {
  return (
    <div className={styles.iconContainer}>
      {name && <Icon className={styles.socialLinkIcon} type={name} />}
    </div>
  )
}

export default SocialLink