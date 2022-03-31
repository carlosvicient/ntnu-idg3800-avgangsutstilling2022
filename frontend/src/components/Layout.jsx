import React from "react"

// Components
import Footer from "./Footer"
import Navbar from "./Navbar"

// Style
import * as styleM from "../styles/main.module.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styleM.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
