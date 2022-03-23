import React from 'react';
import {graphql} from 'graphql'
function Student({ data }) {
    console.log(data);

    return (
        <section>
            <h1>StudentPage</h1>
        </section>
    );
}

export const query = graphql`
query ($slug: [String] = "") {
        allSanityStudent(filter: {slug: {current: {in: $slug}}}) {
            edges {
            node {
                slug {
                    current
                    }
                }
            }
        }
    }
`
export default Student;
