import React from "react";
import { Link, graphql } from "gatsby";

// Components
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const studyProgrammes = data.allSanityStudyprogramme.edges;

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Avgangsutstilling</h1>

      {/* Generell informasjon, her må det fylles inn korrekt tekst */}
      <h2>Om</h2>
      <p>
        «Antall» studenter fra Bachelor i grafisk design,
        «antall» studenter fra Bachelor interaksjonsdesign og
        «antall» studenter fra Bachelor i webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling.
        Hver student viser utvalgte arbeider fra egenportefølje.
      </p>

      <p>
        Utstillingen inkluderer studentarbeider for papirbaserte og elektroniske medier. 
        Kjerneområder for de ulike studieretningene vil for grafisk design være typografi og informasjonsdesign. 
        Interaksjonsdesign har hatt fokus på tjenestedesign og å utforme løsninger som støtter opp under menneskers 
        kommunikasjon og samhandling. 
        For webutvikling er innovative og brukervennlige webløsninger vektlagt. 
        Fellesnevnere for allestudieretningene er universell utforming samt brukersentrert design og utvikling.
      </p>

      <h2>Når</h2>
      <p>3. – 4. juni</p>

      <h2>Hvor</h2>
      <p>Raufossveien 40, 2821 Gjøvik</p>

      {/* Mapper ut hver av kortene som er på siden */}
      {studyProgrammes.map(programme => (
        <div key={programme.node.code}>
          <h2>{programme.node.name}</h2>
          <a href={programme.node.instagram} target='_blank' rel="noreferrer">@instagram</a>
          <p>{programme.node.description[0].children[0].text}</p>
          <Link to={`${programme.node.slug.current}`}><button>Til utstilling</button></Link>
        </div>
      ))}
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
