import React from "react"
import { graphql, Link } from "gatsby"

// Components
import SocialLinks from "../components/SocialLinks"
import ProjectList from "../components/ProjectList"
import StudentList from "../components/StudentList"
import BioCard from "../components/BioCard"
import Footer from "../components/Footer"

// Dette er kun pseudokode for å vise hva som er hva, det må lages komponenter til de forskjellige tingene og legges inn i templaten her

function Student({ data }) {
  const student = data.sanityStudent
  const allStudents = data.allSanityStudent.edges
  console.log(student)
  console.log(allStudents)
  let studentList = []
  allStudents.forEach(element => {
    if (student.slug.current !== element.node.slug.current) {
      studentList.push(element)
    }
  })
  console.log(studentList)

  return (
    <>
      <section>
        {/* Tilbake til course-page */}
        <Link to={`/${student.studyprogramme.slug.current}`}>
          &#8592; Tilbake
        </Link>

        {/* Overskrift og studieretning */}
        <h1>
          {student.name} {student.firstlettersurname}
        </h1>
        <p>{student.studyprogramme.title}</p>

        {/* Profilbilde og bio */}
        <BioCard student={student} />

        {/* Sosiale medier linker */}
        <SocialLinks links={student.social} />

        {/* Prosjekter */}
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
      <Footer />
    </>
  )
}

export const query = graphql`
  query MyQuery($slug: [String] = "", $studyprogramme: [String] = "") {
    sanityStudent(slug: { current: { in: $slug } }) {
      name
      firstlettersurname
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
      }
      social {
        behance
        instagram
        linkedin
        portfolio
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
          firstlettersurname
          image {
            _rawAsset
          }
          slug {
            current
          }
        }
      }
    }
  }
`
export default Student
