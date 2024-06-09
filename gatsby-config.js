module.exports = {
  siteMetadata: {
    title: `Bettencourt Creative Solutions`,
    description: `Helping churches communicate the gospel through modern tech.`,
    author: `@johnbettencourt`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`, // Correct path to images
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bettencourt-creative-solutions`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/new-icon.png`, // Update to the path of your new icon
      },
    },
  ],
}
