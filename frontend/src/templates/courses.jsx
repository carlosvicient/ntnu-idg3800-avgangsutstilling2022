import React from "react";
import { graphql, Link } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image"

export default function Courses({data}) {
    const students = data.allSanityStudent.edges;
    const title = data.allSanityStudent.edges[0].node.studyprogramme.title;
    return (
        <main>
            <h1>Studenter - {title}</h1>
            <p>Paragraf av tekst</p>
            {students.map(({node}) => (
                <Link to={`${node.slug.current}`} key={node.id}>
                    <div>
                        <SanityImage asset={node.image._rawAsset} alt=""/>
                        <p>{node.name} {node.surname}</p>
                    </div>
                </Link>
            ))}
        </main>
    );
}

export const query = graphql`
    query ($slug: [String] = "") {
        allSanityStudent(filter: {studyprogramme: {slug: {current: {in: $slug}}}}) {
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
                    }
                    slug{
                      current
                    }
                }
            }
        }
    }
    `
