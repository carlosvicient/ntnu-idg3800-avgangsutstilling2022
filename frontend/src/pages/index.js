import React from "react"
import { Link, graphql } from "gatsby"

// Components
import Seo from "../components/Seo"
import Layout from "../components/Layout"

//style
import * as style from "../styles/index.module.css"

const IndexPage = ({ data }) => {
  const studyProgrammes = data.allSanityStudyprogramme.edges

  return (
    <Layout>
      <div className={style.container}>
        <Seo title="Home" />
        <h1>Avgangsutstilling</h1>
        <div className={style.containerText}>
          {/* Generell informasjon, her må det fylles inn korrekt tekst */}
          <h2 className={style.greenLine}>Om</h2>
          <p>
            «Antall» studenter fra Bachelor i grafisk design, «antall» studenter
            fra Bachelor interaksjonsdesign og «antall» studenter fra Bachelor i
            webutvikling ved NTNU i Gjøvik avslutter tre års studier med en
            utstilling. Hver student viser utvalgte arbeider fra egenportefølje.
          </p>

          <p>
            Utstillingen inkluderer studentarbeider for papirbaserte og
            elektroniske medier. Kjerneområder for de ulike studieretningene vil
            for grafisk design være typografi og informasjonsdesign.
            Interaksjonsdesign har hatt fokus på tjenestedesign og å utforme
            løsninger som støtter opp under menneskers kommunikasjon og
            samhandling. For webutvikling er innovative og brukervennlige
            webløsninger vektlagt. Fellesnevnere for allestudieretningene er
            universell utforming samt brukersentrert design og utvikling.
          </p>

          <h2>Når</h2>
          <p>3. – 4. juni</p>

          <h2>Hvor</h2>
          <p>Raufossveien 40, 2821 Gjøvik</p>
        </div>
        {/* Mapper ut hver av kortene som er på siden */}
        <div className={style.gridContainer}>
          {studyProgrammes.map(programme => (
            <div className={style.boxes} key={programme.node.code}>
              <div>
                <h2>{programme.node.name}</h2>
                <a
                  className={style.social}
                  href={programme.node.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  @instagram
                </a>
                <p>{programme.node.description[0].children[0].text}</p>
              </div>
              <Link to={`${programme.node.slug.current}`}>
                <button>Til studenter</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityStudyprogramme {
      edges {
        node {
          code
          name
          instagram
          description {
            children {
              text
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`

export default IndexPage
