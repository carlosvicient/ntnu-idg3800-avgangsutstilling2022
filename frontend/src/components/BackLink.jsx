import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

// Style
import * as style from "../styles/backLink.module.css"
import { MdArrowBackIosNew } from "react-icons/md"
import { BsArrowLeft } from "react-icons/bs"

const BackLink = ({ to }) => {
  const [largeScreenSize, setLargeScreenSize] = useState(
    window.matchMedia("(min-width: 900px)").matches
  )

  useEffect(() => {
    window.matchMedia("(min-width: 900px)").addEventListener("change", e => {
      setLargeScreenSize(e.matches)
    })
  })

  return (
    <Link className={style.backLink} to={to}>
      {!largeScreenSize ? (
        <MdArrowBackIosNew />
      ) : (
        <BsArrowLeft className={style.desktopArrow} />
      )}
      <span>Tilbake</span>
    </Link>
  )
}

export default BackLink
