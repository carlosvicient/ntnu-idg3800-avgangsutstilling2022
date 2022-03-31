import React from "react"
import { GrLinkedinOption } from "react-icons/gr"
import { BsInstagram, BsBehance } from "react-icons/bs"

/** Denne filen brukes kun for å velge hvilket ikon som skal brukes og vises.
 * Her er det bare å importere og legge til flere hvis det trengs. */

const Icon = ({ type, ...rest }) => {
  let icon
  switch (type) {
    case "linkedin":
      icon = <GrLinkedinOption />
      break
    case "instagram":
      icon = <BsInstagram />
      break
    case "behance":
      icon = <BsBehance />
      break
    default:
      icon = null
      break
  }
  return <span {...rest}>{icon}</span>
}

export default Icon
