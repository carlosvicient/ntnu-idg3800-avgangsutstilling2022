const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const coursesTemplate = path.resolve('src/templates/student.jsx');

  return graphql(`
  {
    allSanityStudyprogramme {
      edges {
        node {
          code
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    };

    console.log(result);

    result.data.allSanityStudyprogramme.edges.forEach(edge => {
      createPage({
        path: `${edge.node.code}`,
        component: coursesTemplate,
        context: {
          studyProgramme: edge.node.code
        },
      })
    })
  })
}
