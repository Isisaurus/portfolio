const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  // query slugs
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  // create pages using actions
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug },
    });
  });
};
