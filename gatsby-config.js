module.exports = {
  siteMetadata: {
    title: `Fabrice Geib`,
    siteUrl: `https://fabricegeib.com`,
    description: `Frontend developer & Integrator from Paris 🇫🇷`,
    author: `Fabrice Geib`,
    twitter: `@fabricegeib`,
    instagram: `@fabricegeib`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fabricegeib.com`,
        short_name: `fabrice geib`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: `src/images/fabrice-geib-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}