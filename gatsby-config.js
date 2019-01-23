const packages = require(`./src/packages.json`)

module.exports = {
  siteMetadata: {
    title: `npm.cardiv.de`,
    description: `Personal NPM favorites library.`,
    author: `@cardiv`,
    packages: packages,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `@cardiv/gatsby-source-apiserver`,
      options: {
        typePrefix: `npm__`,
        url: `https://api.npms.io/v2/package/mget`,
        method: `post`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        data: Object.keys(packages),
        name: `Packages`,
        entityLevel: ``,
        verboseOutput: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `npm.cardiv.de`,
        short_name: `npm`,
        start_url: `/`,
        background_color: `#2196F3`,
        theme_color: `#2196F3`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
