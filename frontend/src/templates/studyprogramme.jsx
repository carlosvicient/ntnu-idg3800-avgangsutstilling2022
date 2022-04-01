import React from "react"
import * as styles from "../styles/studyprogramme.module.css"
import { graphql } from "gatsby"

// Components
import StudentList from "../components/StudentList"
import BackLink from "../components/BackLink"
import Layout from "../components/Layout"

export default function Studyprogramme({ data }) {
  const students = data.allSanityStudent.edges
  const name = data.allSanityStudent.edges[0].node.studyprogramme.name
  const description = data.allSanityStudent.edges[0].node.studyprogramme.description;

  return (
    <Layout>
      <section>
        {/* Tilbake til forsiden */}
        <BackLink to="/" />

        {/* Overskrift og description */}
        <header className={styles.header}>
          <h2>{name}</h2>
          {description.map((p) => (
                  <p>{p.children[0].text}</p>
          ))}
        </header>

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
      sort: {fields: name, order: ASC}
    ) {
      edges {
        node {
          id
          name
          surname
          middle
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
