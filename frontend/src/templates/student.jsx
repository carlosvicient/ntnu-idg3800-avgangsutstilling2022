import React from 'react';
import {graphql} from 'gatsby'
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
                _key
                _type
                style
                list
                _rawChildren
                }
                mainImage {
                    _key
                    _type
                    _rawAsset
                    _rawHotspot
                    _rawCrop
                }
                title
            }
            secondproject {
                description {
                    _key
                    _type
                    style
                    list
                    _rawChildren
                }
                mainImage {
                    _key
                    _type
                    _rawAsset
                    _rawHotspot
                    _rawCrop
                }
            title
            }
            thirdproject {
                description {
                    _key
                    _type
                    style
                    list
                    _rawChildren
                }
                mainImage {
                    _key
                    _type
                    _rawAsset
                    _rawHotspot
                    _rawCrop
                }
            title
            }
        }
      }
    }
  }
`
export default Student;
