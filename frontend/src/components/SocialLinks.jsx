import React from "react"

const SocialLinks = ({ links }) => {
  return (
    <div>
      {links.behance ? (
        <a href={links.behance} target="_blank" rel="noreferrer">
          Behance
        </a>
      ) : null}
      {links.instagram ? (
        <a href={links.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      ) : null}
      {links.linkedin ? (
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ) : null}
      {links.portfolio ? (
        <a href={links.portfolio} target="_blank" rel="noreferrer">
          Se portfolio
        </a>
      ) : null}
    </div>
  )
}

export default SocialLinks
