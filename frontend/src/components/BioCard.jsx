import React from "react";

// Components
import SanityImage from "gatsby-plugin-sanity-image";

const BioCard = ({ student }) => {
  return (
    <div>
      {student.image && <SanityImage
        asset={student.image._rawAsset}
        alt={`${student.name}`}
      />}
      <p>{student.bio[0].children[0].text}</p>
    </div>
  )
}

export default BioCard;
