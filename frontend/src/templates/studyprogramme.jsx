import React from "react";
import { graphql } from "gatsby";

// Components
import StudentList from "../components/StudentList";
import BackLink from "../components/BackLink";
import Layout from "../components/Layout";

export default function Studyprogramme({ data }) {
  const students = data.allSanityStudent.edges
  const name = data.allSanityStudent.edges[0].node.studyprogramme.name;
  const description = data.allSanityStudent.edges[0].node.studyprogramme.description[0].children[0].text;

  return (
    <Layout>
      <section>
        {/* Tilbake til forsiden */}
        <BackLink to="/" />

        {/* Overskrift og description */}
        <h1>{name}</h1>
        <p>{description}</p>

        {/* Mapper ut hver student i arrayen med bilde og navn under, denne fungerer som en link */}
        <StudentList students={students} withSorting={true} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: [String] = "") {
    allSanityStudent(
      filter: { studyprogramme: { slug: { current: { in: $slug } } } }
    ) {
      edges {
        node {
          id
          name
          surname
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
            slug {
              current
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
