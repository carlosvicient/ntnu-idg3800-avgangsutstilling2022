import React from "react"

// Components
import Navbar from "./Navbar"
import Footer from "./Footer"

// Style
import * as styleM from "../styles/main.module.css"

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className={styleM.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
