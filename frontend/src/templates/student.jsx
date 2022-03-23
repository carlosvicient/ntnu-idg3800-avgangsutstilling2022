import React from 'react';
import { graphql } from 'gatsby'
import SanityImage from "gatsby-plugin-sanity-image"

function Student({ data }) {
    const student = data.sanityStudent;
    console.log(student);

    return (
        <section>
            <h1>{student.name} {student.surname}</h1>
            <p>{student.studyprogramme.title}</p>
            <SanityImage asset={student.image._rawAsset} alt="Image of the student" />
            <p>{student.bio[0].children[0].text}</p>

            {student.social.behance ? <a href={student.social.behance} target='_blank' rel="noreferrer">Behance</a> : null}
            {student.social.instagram ? <a href={student.social.instagram} target='_blank' rel="noreferrer">Instagram</a> : null}
            {student.social.linkedin ? <a href={student.social.linkedin} target='_blank' rel="noreferrer">LinkedIn</a> : null}
            {student.social.portfolio ? <a href={student.social.portfolio} target='_blank' rel="noreferrer">Portfolio</a> : null}

            <SanityImage asset={student.showcase.firstproject.mainImage._rawAsset} alt={student.showcase.firstproject.title} />
            <p>{student.showcase.firstproject.description[0].children[0].text}</p>

            {/* <SanityImage asset={student.showcase.secondproject.mainImage._rawAsset} alt={student.showcase.firstproject.title} /> Disse er null atm */}
            {/* <p>{student.showcase.secondproject.description[0].children[0].text}</p>                                              Disse er null atm */}

            {/* <SanityImage asset={student.showcase.thirdproject.mainImage._rawAsset} alt={student.showcase.firstproject.title} /> Disse er null atm */}
            {/* <p>{student.showcase.thirdproject.description[0].children[0].text}</p>                                              Disse er null atm */}
        </section>
    );
}

export const query = graphql`
query MyQuery($slug: [String] = "") {
    sanityStudent(slug: {current: {in: $slug}}) {
        name
        surname
        studyprogramme {
          title
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
  }
`
export default Student;
