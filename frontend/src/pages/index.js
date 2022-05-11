import React from "react"

import { Link, graphql } from "gatsby"

import * as style from "../styles/index.module.css"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"

//style

const IndexPage = ({ data }) => {
  const studyProgrammes = data.allSanityStudyprogramme.edges;
  studyProgrammes.sort((a, b) => (a.node.name.toLowerCase() > b.node.name.toLowerCase()) ? 1 : -1);

  return (
    <Layout>
      <div className={style.container}>
        <Seo title="" description="31 studenter fra Bachelor i grafisk design, 29 studenter
            fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i
            webutvikling ved NTNU i Gjøvik avslutter tre års studier med en
            utstilling. Hver student viser utvalgte arbeider fra egenportefølje." />
        <h1>Avgangsutstilling</h1>
        <div className={style.containerText}>
          {/* Generell informasjon, her må det fylles inn korrekt tekst */}
          <h2 className={style.greenLine}>Om</h2>
          <p>
            27 studenter fra Bachelor i grafisk design, 29 studenter
            fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i
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
            webløsninger vektlagt. Fellesnevnere for alle studieretningene er
            universell utforming samt brukersentrert design og utvikling.
          </p>

          <h2>Når</h2>
          <p><a href='https://fb.me/e/1lLCQ5LbM' target='_blank' rel='noreferrer'>Fredag 3. juni kl. 11.00 – 19.00</a></p>
          <p>– Formell åpning kl. 12.00</p>
          <p><a href='https://fb.me/e/2ontIweOi' target='_blank' rel='noreferrer'>Lørdag 4. juni kl. 10.00 – 15.00</a></p>

          <h2>Hvor</h2>
          <p>
            Raufossveien 40, 2821 Gjøvik
            <a href='https://goo.gl/maps/gLarsLji1EkyLTK19' target="_blank" rel="noreferrer">Google Maps &#x2197;</a>
            <a href='https://link.mazemap.com/mJVSazs2' target='_blank' rel='noreferrer'>MazeMap &#x2197;</a>
          </p>
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
                {programme.node.description.map((p) => (
                  <p>{p.children[0].text}</p>
                ))}
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
