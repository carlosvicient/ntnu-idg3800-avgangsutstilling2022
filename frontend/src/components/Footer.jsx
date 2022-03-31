import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

// Style
import * as style from "../styles/footer.module.css"

const Footer = () => {
  let colorScheme = ""
  if (typeof window !== "undefined") {
    colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  }
  const [darkMode, setDarkMode] = useState(colorScheme)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", e => {
          setDarkMode(e.matches)
        })
    }
  })

  return (
    <footer className={style.footer}>
      <div className={style.gridItem}>
        {darkMode ? (
          <StaticImage
            src="../assets/images/ntnu-black.svg"
            alt="NTNU Logo"
            className={style.staticImg}
          />
        ) : (
          <StaticImage
            src="../assets/images/ntnu.svg"
            alt="NTNU Logo"
            className={style.staticImg}
          />
        )}

        <p>Fakultet for arkitektur og design</p>
        <p>Institutt for design</p>
      </div>
      <div className={style.gridItem}>
        <p>Bachelor i Grafisk Design</p>
        <p>Bachelor i Interaksjonsdesign</p>
        <p>Bachelor i Webutvikling</p>
      </div>
    </footer>
  )
}

export default Footer
