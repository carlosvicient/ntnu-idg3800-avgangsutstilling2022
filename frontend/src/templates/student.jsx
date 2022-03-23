import React from 'react';
import {graphql} from 'gatsby'
function Student({ data }) {
    console.log(data);

    return (
        <section>
            <h1>StudentPage</h1>
        </section>
    );
}

export const query = graphql`
  query MyQuery($slug: [String] = "") {
    sanityStudent(slug: { current: { in: $slug } }) {
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
`
export default Student;
