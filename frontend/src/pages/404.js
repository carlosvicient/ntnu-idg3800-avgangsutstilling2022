import React from "react"
import { navigate } from "gatsby"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BackLink from "../components/BackLink"

import * as styles from "../styles/404.module.css"

const NotFoundPage = () => {
  const goBack = e => {
    navigate(-1)
  }

  return (
    <Layout>
      <span
        role="link"
        tabIndex="0"
        onClick={goBack}
        onKeyDown={e => {
          if (e.key === "Enter") {
            goBack()
          }
        }}
        className={styles.back}
      >
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
