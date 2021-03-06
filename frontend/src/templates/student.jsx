import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ProjectList from "../components/ProjectList";
import StudentList from "../components/StudentList";
import BioCard from "../components/BioCard";
import BackLink from "../components/BackLink";

function Student({ data }) {
  const student = data.sanityStudent
  const allStudents = data.allSanityStudent.edges

  let studentList = []
  allStudents.forEach(element => {
    if (student.slug.current !== element.node.slug.current) {
      studentList.push(element)
    }
  })
  studentList.sort((a, b) => (a.node.name.toLowerCase() > b.node.name.toLowerCase()) ? 1 : -1);
  
  return (
    <Layout>
      <Seo title={`${student.name} ${student.middle ? student.middle : ""} ${student.surname}`} description={student.bio ? student.bio[0].children[0].text : null} image={student.image.asset.url} />
      <section>
        {/* Tilbake til course-page */}
        <BackLink to={`/${student.studyprogramme.slug.current}`} />

        {/* Profilbilde og bio */}
        <BioCard student={student} />

        {/* Prosjekter */}
        {/* <h2>Prosjektene mine</h2> */}
        <ProjectList showcase={student.showcase} />

        {/* Liste over de andre studentene innen studieretningen */}
        {studentList.length === 0 ? null : (
          <StudentList
            students={studentList}
            studyprogramme={student.studyprogramme.name}
            withSorting={false}
          />
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: [String] = "", $studyprogramme: [String] = "") {
    sanityStudent(slug: { current: { in: $slug } }) {
      name
      middle
      surname
      studyprogramme {
        name
        title
        slug {
          current
        }
      }
      bio {
        children {
          text
        }
      }
      image {
        _rawAsset
        asset {
          url
        }
      }
      social {
        behance
        instagram
        linkedin
        portfolio
        mail
      }
      slug {
        current
      }
      showcase {
        firstproject {
          description {
            children {
              text
            }
          }
          title
          mainImage {
            _rawAsset
          }
        }
        secondproject {
          description {
            children {
              text
            }
          }
          mainImage {
            _rawAsset
          }
          title
        }
        thirdproject {
          description {
            children {
              text
            }
          }
          mainImage {
            _rawAsset
          }
          title
        }
      }
    }
    allSanityStudent(
      filter: { studyprogramme: { slug: { current: { in: $studyprogramme } } } }
    ) {
      edges {
        node {
          id
          name
          surname
          image {
            _rawAsset
          }
          slug {
            current
          }
          studyprogramme {
            slug {
              current
            }
          }
        }
      }
    }
  }
`
export default Student
