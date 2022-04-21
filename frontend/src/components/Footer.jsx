import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import logoDark from "../assets/images/ntnu-black.svg"
import logo from "../assets/images/ntnu.svg"

// Style
import * as style from "../styles/footer.module.css"

const Footer = () => {
  const [darkMode, setDarkMode] = useState("")

  useEffect(() => {
    let colorScheme = ""
    if (typeof window !== "undefined") {
      colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(colorScheme)
    }
    if (typeof window !== "undefined") {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", e => {
          setDarkMode(e.matches)
        })
    }
  }, [])

  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.gridItem}>
          {darkMode ? (
            <img
              placeholder="tracedSVG"
              loading="eager"
              src={logoDark}
              alt="NTNU Logo"
              className={style.staticImg}
            />
          ) : (
            <img
              placeholder="tracedSVG"
              loading="eager"
              src={logo}
              alt="NTNU Logo"
              className={style.staticImg}
            />
          )}

          <p>Fakultet for arkitektur og design</p>
          <p>Institutt for design</p>
        </div>
        <div className={style.gridItem}>
          <span>
            <p>
              <a
                href="https://www.ntnu.no/studier/bmed"
                target="_blank"
                rel="noreferrer"
              >
                Bachelor i Grafisk Design
              </a>
            </p>
            <p>
              <a
                href="https://www.ntnu.no/studier/bixd"
                target="_blank"
                rel="noreferrer"
              >
                Bachelor i Interaksjonsdesign
              </a>
            </p>
            <p>
              <a
                href="https://www.ntnu.no/studier/bwu"
                target="_blank"
                rel="noreferrer"
              >
                Bachelor i Webutvikling
              </a>
            </p>
          </span>
          <p className={style.aboutLink}>
            <Link to="/about">Om siden</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
