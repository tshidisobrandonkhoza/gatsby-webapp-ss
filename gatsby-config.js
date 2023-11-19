/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        name: `services`, 
        path: `${__dirname}/src/services/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        name: `services`, 
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title:  'GOAT SECURITY SERVICES',
    description: 'Best security services your can find in south africa',
    copyright: 'Copyrighted 2023'
  }
}
