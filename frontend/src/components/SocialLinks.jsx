import React from "react"
import { IconContext } from "react-icons"
import { GrLinkedinOption, GrMailOption } from "react-icons/gr"
import { BsInstagram, BsBehance } from "react-icons/bs"
import * as styles from "../styles/socialLinks.module.css"

const SocialLinks = ({ links }) => {
  return (
    <IconContext.Provider
      value={{
        className: "shared-class",
        size: "24px",
      }}
    >
      {links &&
        <div className={styles.allIconsContainer}>
          {links.behance &&
            <a href={links.behance} target="_blank" rel="noreferrer">
              <div className={styles.iconContainer}>
                <BsBehance className={styles.socialLinkIcon} />
              </div>
            </a>
          }
          {links.instagram &&
            <a href={links.instagram} target="_blank" rel="noreferrer">
              <div className={styles.iconContainer}>
                <BsInstagram className={styles.socialLinkIcon} />
              </div>
            </a>
          }
          {links.linkedin &&
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <div className={styles.iconContainer}>
                <GrLinkedinOption className={styles.socialLinkIcon} />
              </div>
            </a>
          }
          {links.mail &&
            <a href={`mailto:${links.mail}`} target="_blank" rel="noreferrer">
              <div className={styles.iconContainer}>
                <GrMailOption className={styles.socialLinkIcon} />
              </div>
            </a>
          }
            <a href={`mailto:test@test.no`} target="_blank" rel="noreferrer">
              <div className={styles.iconContainer}>
                <GrMailOption className={styles.socialLinkIcon} />
              </div>
            </a>
          
          {links.portfolio &&
            <a
              href={links.portfolio}
              target="_blank"
              rel="noreferrer"
              className={styles.portfolioLink}
            >
              Se portfolio
            </a>
          }
        </div>
      }
    </IconContext.Provider>
  )
}

export default SocialLinks
