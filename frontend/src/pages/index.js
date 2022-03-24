import * as React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const studyProgrammes = data.allSanityStudyprogramme.edges
  //console.log(studyProgrammes);

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Avgangsutstilling</h1>

      {/* Generell informasjon, her må det fylles inn korrekt tekst */}
      <h2>Om</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>

      <h2>Når</h2>
      <p>Dato</p>

      <h2>Hvor</h2>
      <p>Adresse</p>

      {/* Mapper ut hver av kortene som er på siden, linkene er henholdvis /bwu, /bmed og /bixd. Disse kan hardkodes i en navbar */}
      {studyProgrammes.map(programme => (
        <div key={programme.node.code}>
          <h2>{programme.node.name}</h2>
          <p>{programme.node.description[0].children[0].text}</p>
          <Link to={`${programme.node.slug.current}`}>Til utstilling</Link>
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
