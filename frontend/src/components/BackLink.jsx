import React from "react";
import { Link } from "gatsby";

// Style
import * as style from "../styles/backLink.module.css"
import { MdArrowBackIosNew } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';


const BackLink = ({ to }) => {
  return <Link className={style.backLink} to={to}>
    <MdArrowBackIosNew className={style.mobileArrow} />
    <BsArrowLeft className={style.desktopArrow} />
    <span>Tilbake</span>
  </Link>;
}

export default BackLink;
