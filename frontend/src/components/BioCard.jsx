import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"

const BioCard = ({ student }) => {
  return (
    <div>
      <SanityImage
        asset={student.image._rawAsset}
        alt={`Portrett av ${student.name}`} // forslag og kutte ut "Portrett av" da skjermleser først sier "bilde av"
      />
      <p>{student.bio[0].children[0].text}</p>
    </div>
  )
}

export default BioCard
