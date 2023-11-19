const path = require('path');
exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
   query servicesDetails {
   allMarkdownRemark {
    nodes {
      frontmatter {
        slug
      }
    } 
  }
}
`)

    data.allMarkdownRemark.nodes.forEach(element => {
        actions.createPage({
            path: '/services/' + element.frontmatter.slug,
            component: path.resolve('./src/templates/services-details.js'),
            context: {
                slug: element.frontmatter.slug 
            }
        })
    });
}