import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
  return (
    <header>
      <nav>
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
      <StaticImage
        src="../assets/images/logo.svg"
        alt="Avgangsutstilling 2022, logo"
      />
    </header>
  )
}

export default Navbar
