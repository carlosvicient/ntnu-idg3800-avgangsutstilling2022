import React from "react";
import { StaticImage } from "gatsby-plugin-image"

// Style
import * as style from "../styles/footer.module.css"


const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.gridItem}>
        <StaticImage 
          src="../assets/images/ntnu_logo.png" 
          alt="NTNU Logo" 
          className={style.staticImg}
        />
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

export default Footer;
