import { Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import * as React from "react"

// Student card displaying image and name of a student, linking to the spesific student
const StudentCard = ({ node }) => {
  return (
    <Link to={`${node.slug.current}`}>
      <div>
        <SanityImage asset={node.image._rawAsset} alt="" />
        <p>
          {node.name} {node.surname}
        </p>
      </div>
    </Link>
  )
}

export default StudentCard
