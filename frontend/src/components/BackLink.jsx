import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

// Style
import * as style from "../styles/backLink.module.css"
import { MdArrowBackIosNew } from "react-icons/md"
import { BsArrowLeft } from "react-icons/bs"

const BackLink = ({ to }) => {
  let match = ""
  if (typeof window !== "undefined") {
    match = window.matchMedia("(min-width: 900px)").matches
  }
  const [largeScreenSize, setLargeScreenSize] = useState(match)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.matchMedia("(min-width: 900px)").addEventListener("change", e => {
        setLargeScreenSize(e.matches)
      })
    }
  })

  return (
    <div className={style.backLink}>
      <Link to={to}>
        {!largeScreenSize ? (
          <MdArrowBackIosNew />
        ) : (
          <BsArrowLeft className={style.desktopArrow} />
        )}
        <span>Tilbake</span>
      </Link>
    </div>
  )
}

export default BackLink
