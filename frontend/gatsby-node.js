exports.createPages = async function ({ actions, graphql }) {
  const {
    data: { allSanityStudyprogramme, allSanityStudent },
  } = await graphql(`
    {
      allSanityStudyprogramme {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityStudent {
        edges {
          node {
            id
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
  `)
  allSanityStudyprogramme.edges.forEach(edge => {
    const slug = edge.node.slug.current
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/studyprogramme.jsx"),
      context: { slug },
    })
  })

  allSanityStudent.edges.forEach(edge => {
    const slug = edge.node.slug.current
    const studyprogramme = edge.node.studyprogramme.slug.current
    actions.createPage({
      path: `${studyprogramme}/${slug}`,
      component: require.resolve("./src/templates/student.jsx"),
      context: { slug, studyprogramme },
    })
  })
}
