import React from 'react';

function Student({ data }) {
    console.log(data);

    return (
        <section>
            <h1>StudentPage</h1>
        </section>
    );
}

export const query = graphql`
    {
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