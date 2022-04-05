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
              <Link to="/bwu/tom-schrier">Tom Schrier</Link>
            </li>
          </ul>

          <h2>Designansvarlige</h2>
          <ul>
            <li>
              <Link to="/bmed/adam-maximilian-stoffel">
                Adam Maximilian Stoffel
              </Link>
            </li>
            <li>
              <Link to="/bmed/amalie-bach">Amalie Bach</Link>
            </li>
            <li>
              <Link to="/bmed/andrea-hauge-sandvik">Andrea Hauge Sandvik</Link>
            </li>
            <li>
              <Link to="/bmed/johanne-lyster-strande">
                Johanne Lyster Strande
              </Link>
            </li>
            <li>
              <Link to="/bmed/martine-egeli">Martine Egeli</Link>
            </li>
          </ul>

          <h2>Fotoansvarlige</h2>
          <ul>
            <li>
              <Link to="/bmed/johanne-lyster-strande">
                Johanne Lyster Strande
              </Link>
            </li>
            <li>
              <Link to="/bmed/marc-daniel-einebakken">
                Marc Daniel Einebakken
              </Link>
            </li>
            <li>
              <Link to="/bmed/nora-strom-myklebust">Nora Strøm Myklebust</Link>
            </li>
          </ul>

          <h2>Informasjonsarkitektur-ansvarlige</h2>
          <ul>
            <li>
              <Link to="/bixd/hanna-hernaes">Hanna Hernæs</Link>
            </li>
            <li>
              <Link to="/bixd/ida-emilie-herfoss">Ida Emilie Herfoss</Link>
            </li>
            <li>
              <Link to="/bixd/linde-helene-stormo">Linde Stormo</Link>
            </li>
            <li>
              <Link to="/bixd/michelle-carina-osnes">
                Michelle Carina Osnes
              </Link>
            </li>
            <li>
              <Link to="/bixd/sine-uberg">Sine Uberg</Link>
            </li>
          </ul>

          <h2>Innholdsansvarlige</h2>
          <ul>
            <li>
              <Link to="/bixd/ann-margit-krog">Ann Margit Krog</Link>
            </li>
            <li>
              <Link to="#">Andrea Kristoffersen</Link>
            </li>
            <li>
              <Link to="/bwu/kristian-teppan">Kristian Teppan</Link>
            </li>
            <li>
              <Link to="/bixd/lisa-sofie-edelman-saether">
                Lisa Sofie Edelman Sæther
              </Link>
            </li>
            <li>
              <Link to="/bwu/sandra-kristiansen-smaaberg">
                Sandra Kristiansen Smaaberg
              </Link>
            </li>
            <li>
              <Link to="/bwu/simen-tokerod-bergo">Simen Tokerød Bergo</Link>
            </li>
            <li>
              <Link to="/bixd/thomas-hoiby">Thomas Høiby</Link>
            </li>
          </ul>

          <h2>Utviklingsansvarlige</h2>
          <ul>
            <li>
              <Link to="/bwu/cornelius-ottar-sandmael">
                Cornelius Ottar Sandmæl
              </Link>
            </li>
            <li>
              <Link to="/bwu/glenn-eirik-hansen">Glenn Eirik Hansen</Link>
            </li>
            <li>
              <Link to="/bwu/jostein-o-tollefsrud">
                Jostein Ødegårdstuen Tollefsrud
              </Link>
            </li>
          </ul>

          <h2>Stilarkansvarlige</h2>
          <ul>
            <li>
              <Link to="/bwu/emil-boen">Emil Bøen</Link>
            </li>
            <li>
              <Link to="/bwu/ida-m-r-gjeitsund">Ida M. R. Gjeitsund</Link>
            </li>
            <li>
              <Link to="/bwu/lena-amdal-larsen">Lena Amdal-Larsen</Link>
            </li>
            <li>
              <Link to="/bwu/leonard-avdullahu">Leonard Avdullahu</Link>
            </li>
            <li>
              <Link to="/bwu/vilde-gunnes-bertelsen">
                Vilde Gunnes Bertelsen
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default About
