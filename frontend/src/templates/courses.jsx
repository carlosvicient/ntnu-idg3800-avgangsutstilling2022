import React from "react";
import { graphql, Link } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";

// Dette er kun pseudokode for å vise hva som er hva, det må lages komponenter til de forskjellige tingene og legges inn i templaten her

export default function Courses({data}) {
    const students = data.allSanityStudent.edges;
    const name = data.allSanityStudent.edges[0].node.studyprogramme.name;
    console.log(data)
    const description = data.allSanityStudent.edges[0].node.studyprogramme.description[0].children[0].text;

    return (
      <main>
        {/* Tilbake til forsiden */}
        <Link to="/">&#8592; Tilbake</Link>

        {/* Overskrift og description */}
        <h1>{name}</h1>
        <p>{description}</p>

        {/* Mapper ut hver student i arrayen med bilde og navn under, denne fungerer som en link */}
        <h2>Studenter</h2>
        {students.map(({ node }) => (
          <Link to={`${node.slug.current}`} key={node.id}>
            <div>
              <SanityImage asset={node.image._rawAsset} width={300} alt="" />
              <p>
                {node.name} {node.firstlettersurname}.
              </p>
            </div>
          </Link>
        ))}
      </main>
    )
}

export const query = graphql`
    query ($slug: [String] = "") {
        allSanityStudent(filter: {studyprogramme: {slug: {current: {in: $slug}}}}) {
            edges {
                node {
                    id
                    name
                    firstlettersurname
                    image {
                        _rawAsset
                    }
                    studyprogramme {
                        title
                        name
                        description {
                            children {
                                text
                            }
                        }
                    }
                    slug{
                        current
                    }
                }
            }
        }
    }
    `
