import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BackLink from "../components/BackLink"

import * as header from "../styles/studyprogramme.module.css"
import * as styles from "../styles/about.module.css"

function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <Seo
          title="Om"
          description="De som er ansvarlige for at siden er oppe og går."
        />
        <BackLink to="/" />
        <header className={header.header}>
          <h1>Om</h1>
        </header>

        <section>
          <h2>Bærekraftansvarlig</h2>
          <ul>
            <li>
              <Link to="#">Tom Schrier</Link>
            </li>
          </ul>

          <h2>Designansvarlige</h2>
          <ul>
            <li>
              <Link to="#">Adam Maximilian Stoffel</Link>
            </li>
            <li>
              <Link to="#">Amalie Bach</Link>
            </li>
            <li>
              <Link to="#">Andrea Hauge Sandvik</Link>
            </li>
            <li>
              <Link to="#">Johanne Lyster Strande</Link>
            </li>
            <li>
              <Link to="#">Martine Egeli</Link>
            </li>
          </ul>

          <h2>Fotoansvarlige</h2>
          <ul>
            <li>
              <Link to="#">Johanne Lyster Strande</Link>
            </li>
            <li>
              <Link to="#">Marc Daniel Einebakken</Link>
            </li>
            <li>
              <Link to="#">Nora Strøm Myklebust</Link>
            </li>
          </ul>

          <h2>Informasjonsarkitektur-ansvarlige</h2>
          <ul>
            <li>
              <Link to="#">Hanna Hernæs</Link>
            </li>
            <li>
              <Link to="#">Ida Emilie Herfoss</Link>
            </li>
            <li>
              <Link to="#">Linde Stormo</Link>
            </li>
            <li>
              <Link to="#">Michelle Carina Osnes</Link>
            </li>
            <li>
              <Link to="#">Sine Uberg</Link>
            </li>
          </ul>

          <h2>Innholdsansvarlige</h2>
          <ul>
            <li>
              <Link to="#">Ann Margit Krog</Link>
            </li>
            <li>
              <Link to="#">Andrea Kristoffersen</Link>
            </li>
            <li>
              <Link to="#">Lisa Sofie Edelman Sæther</Link>
            </li>
          </ul>

          <h2>Utviklingsansvarlige</h2>
          <ul>
            <li>
              <Link to="#">Cornelius Ottar Sandmæl</Link>
            </li>
            <li>
              <Link to="#">Glenn Eirik Hansen</Link>
            </li>
            <li>
              <Link to="#">Jostein Ødegårdstuen Tollefsrud</Link>
            </li>
          </ul>

          <h2>Stilarkansvarlige</h2>
          <ul>
            <li>
              <Link to="#">Emil Bøen</Link>
            </li>
            <li>
              <Link to="#">Ida M. R. Gjeitsund</Link>
            </li>
            <li>
              <Link to="#">Lena Amdal-Larsen</Link>
            </li>
            <li>
              <Link to="#">Leonard Avdullahu</Link>
            </li>
            <li>
              <Link to="#">Vilde Gunnes Bertelsen</Link>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default About
