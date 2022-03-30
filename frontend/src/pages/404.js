import React from "react"
import { navigate } from "gatsby"
import * as styles from "../styles/404.module.css"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BackLink from "../components/BackLink"

const NotFoundPage = () => {
  const goBack = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <Layout>
      <span onClick={goBack} className={styles.back}>
        <BackLink />
      </span>
      <div className={styles.container}>
        <Seo title="404: Not found" />
        <h1>404: Siden finnes ikke</h1>
        <span>
          <p>Nei, nå er du ute på bærtur.</p>
          <p>Trykk på tilbakepilen for å komme tilbake dit du var.</p>
        </span>
      </div>
    </Layout>
  )
}

export default NotFoundPage
