module.exports = {
  siteMetadata: {
    title: `Fabrice Geib`,
    siteUrl: `https://fabricegeib.com`,
    description: `Frontend developer & Integrator from Paris 🇫🇷`,
    author: `Fabrice Geib`,
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/fabricegeib",
      },
      {
        name: "github",
        url: "https://github.com/fabricegeib",
      },
    ],
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
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "MadamNazar",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "madamnazar",
    //     // Url to query from
    //     url: "https://madam-nazar-location-api-2.herokuapp.com/location/current",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}