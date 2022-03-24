import React from "react";
import Logo from "../images/ntnu_uten_slagord_svart.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt="NTNU Logo" />
        <p>Fakultet for arkitektur og design</p>
        <p>Institutt for design</p>
      </div>
      <div>
        <p>Bachelor i Grafisk Design</p>
        <p>Bachelor i Interaksjonsdesign</p>
        <p>Bachelor i Webutvikling</p>
      </div>
    </footer>
  )
}

export default Footer;
