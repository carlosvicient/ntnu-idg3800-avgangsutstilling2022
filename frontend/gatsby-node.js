exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
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
  }`)
  data.allSanityStudyprogramme.edges.forEach(edge => {
    const slug = edge.node.slug.current;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/courses.jsx`),
      context: { slug: slug },
    })
  })
}
