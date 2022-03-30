import React from "react"
import SocialLink from "./SocialLink"
import { IconContext } from "react-icons"
import { GrLinkedinOption } from "react-icons/gr"
import { BsInstagram, BsBehance } from "react-icons/bs"
import * as styles from "../styles/socialLinks.module.css"

/**Hvis vi alltid skal ha behance, insta og linked in, så funker koden som er kommentert ut nedenfor
 *
 * Men! hvis vi vil velge hva vi skal presentere, så brukes det som er under den
 * kommenterte koden, se linje 60
 */

// const SocialLinks = ({ links }) => {
//   return (
//     <IconContext.Provider
//       value={{
//         className: "shared-class",

//         size: "24px",
//       }}
//     >
//       <div className={styles.allIconsContainer}>
//         {links.behance ? (
//           <a href={links.behance} target="_blank" rel="noreferrer">
//             <div className={styles.iconContainer}>
//               <BsBehance className={styles.socialLinkIcon} />
//             </div>
//           </a>
//         ) : null}
//         {links.instagram ? (
//           <a href={links.instagram} target="_blank" rel="noreferrer">
//             <div className={styles.iconContainer}>
//               <BsInstagram className={styles.socialLinkIcon} />
//             </div>
//           </a>
//         ) : null}
//         {links.linkedin ? (
//           <a href={links.linkedin} target="_blank" rel="noreferrer">
//             <div className={styles.iconContainer}>
//               <GrLinkedinOption className={styles.socialLinkIcon} />
//             </div>
//           </a>
//         ) : null}
//         {links.portfolio ? (
//           <a
//             href={links.portfolio}
//             target="_blank"
//             rel="noreferrer"
//             className={styles.portfolioLink}
//           >
//             Se portfolio
//           </a>
//         ) : null}
//       </div>
//     </IconContext.Provider>
//   )
// }

/**Hvis vi vil bestemme hvilke ikoner som vises, så funker dette) */

const SocialLinks = ({ links }) => {
  return (
    <IconContext.Provider
      value={{
        className: "shared-class",
        size: "24px",
      }}
    >
      <div className={styles.allIconsContainer}>
        {Object.entries(links).map(([name, url]) => {
          if (name === "portfolio") {
            return (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styles.portfolioLink}
              >
                Se portfolio
              </a>
            )
          } else {
            return (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                <SocialLink name={name} />
              </a>
            )
          }
        })}
      </div>
    </IconContext.Provider>
  )
}

export default SocialLinks
