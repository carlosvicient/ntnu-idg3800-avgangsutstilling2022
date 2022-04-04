import React, { useState, useEffect } from "react";

import logoDark from "../assets/images/ntnu-black.svg";
import logo from "../assets/images/ntnu.svg";

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
          <img
            src={logoDark}
            alt="NTNU Logo"
            className={style.staticImg}
          />
        ) : (
          <img
            src={logo}
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
