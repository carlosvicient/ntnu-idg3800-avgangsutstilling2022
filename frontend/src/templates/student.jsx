import React from "react"
import { graphql, Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"

// Components
import SocialLinks from "../components/SocialLinks"

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
      <SanityImage
        asset={student.image._rawAsset}
        alt={`Portrett av ${student.name}`}
      />
      <p>{student.bio[0].children[0].text}</p>

      {/* Sosiale medier linker */}
      <SocialLinks links={student.social} />

      {/* Prosjekter */}
      <SanityImage
        asset={student.showcase.firstproject.mainImage._rawAsset}
        width={300}
        alt={student.showcase.firstproject.title}
      />
      <p>{student.showcase.firstproject.description[0].children[0].text}</p>

      {/* <SanityImage asset={student.showcase.secondproject.mainImage._rawAsset} alt={student.showcase.firstproject.title} /> Disse er null atm */}
      {/* <p>{student.showcase.secondproject.description[0].children[0].text}</p>                                              Disse er null atm */}

      {/* <SanityImage asset={student.showcase.thirdproject.mainImage._rawAsset} alt={student.showcase.firstproject.title} /> Disse er null atm */}
      {/* <p>{student.showcase.thirdproject.description[0].children[0].text}</p>                                              Disse er null atm */}

      {/* Liste over de andre studentene innen studieretningen */}
      {studentList.length === 0 ? null : (
        <>
          <h2>Studenter - {student.studyprogramme.name}</h2>
          {studentList.map(({ node }) => (
            <Link to={`${node.slug.current}`} key={node.id}>
              <div>
                <SanityImage asset={node.image._rawAsset} alt="" />
                <p>
                  {node.name} {node.firstlettersurname}.
                </p>
              </div>
            </Link>
          ))}
        </>
      )}
    </section>
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
