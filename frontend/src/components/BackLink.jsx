import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { MdArrowBackIosNew } from "react-icons/md"
import { BsArrowLeft } from "react-icons/bs"
// Style
import * as style from "../styles/backLink.module.css"

const BackLink = ({ to }) => {
  const [largeScreenSize, setLargeScreenSize] = useState('')

  useEffect(() => {
    if (typeof window !== "undefined") {
      let match = window.matchMedia("(min-width: 900px)").matches
      setLargeScreenSize(match);
    }

    if (typeof window !== "undefined") {
      window.matchMedia("(min-width: 900px)").addEventListener("change", e => {
        setLargeScreenSize(e.matches)
      })
    }
  }, [])

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
