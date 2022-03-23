import React from "react"
import { Link } from "gatsby"

const BackLink = ({ to }) => {
  return <Link to={to}>&#8592; Tilbake</Link>
}

export default BackLink
