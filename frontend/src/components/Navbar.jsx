import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Style
import * as style from "../styles/header.module.css"

function Navbar() {
  let path = ""
  if (typeof window !== "undefined") {
    path = window.location.pathname
  }

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
        <StaticImage
          src="../assets/images/logo.svg"
          alt="Avgangsutstilling 2022, logo"
          className={
            path === "/"
              ? `${style.bigStaticImg} ${style.staticImg}`
              : style.staticImg
          }
        />
      </Link>
    </header>
  )
}

export default Navbar
