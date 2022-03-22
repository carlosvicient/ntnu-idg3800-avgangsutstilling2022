import * as React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const studyProgrammes = data.allSanityStudyprogramme.edges;
  //console.log(studyProgrammes);

  return (
    <>
      <Seo title="Home" />
      <h1>Avgangsutstilling</h1>
      {studyProgrammes.map(programme => (
        <div key={programme.node.code}>
          <h2>{programme.node.name}</h2>
          <p>{programme.node.description[0].children[0].text}</p>
          <Link to={`/${programme.node.code}`}>Til utstilling</Link>
        </div>
      ))}
    </>
  );
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
        }
      }
    }
  }
`;

export default IndexPage

