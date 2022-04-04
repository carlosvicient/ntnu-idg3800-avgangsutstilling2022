import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import logoDark from "../assets/images/logo-dark.svg";
import logo from "../assets/images/logo.svg";

// Style
import * as style from "../styles/header.module.css"

function Navbar() {
  let path = ""
  if (typeof window !== "undefined") {
    path = window.location.pathname
  }

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
    <header className={style.header}>
      <nav>
        {/* Burger for mobile */}
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul>
          <li>
            <Link to="/bmed">Grafisk design</Link>
          </li>
          <li>
            <Link to="/bixd">Interaksjonsdesign</Link>
          </li>
          <li>
            <Link to="/bwu">Webutvikling</Link>
          </li>
        </ul>
      </nav>
      <Link to="/">
        {darkMode ? (
          <img
            placeholder="tracedSVG"
            loading="eager"
            src={logoDark}
            alt="Avgangsutstilling 2022, logo"
            className={
              path === "/"
                ? `${style.bigStaticImg} ${style.staticImg}`
                : style.staticImg
            }
          />
        ) : (
          <img
            placeholder="tracedSVG"
            loading="eager"
            src={logo}
            alt="Avgangsutstilling 2022, logo"
            className={
              path === "/"
                ? `${style.bigStaticImg} ${style.staticImg}`
                : style.staticImg
            }
          />
        )}
      </Link>
    </header>
  )
}

export default Navbar
