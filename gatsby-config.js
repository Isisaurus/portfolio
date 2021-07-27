module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DianaVitanyiPortfolio`,
        short_name: `DianaVitanyiPortfolio`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#6B6AB8`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-theme-material-ui`,
  ],
  siteMetadata: {
    title: 'Diana Vitanyi',
    description: 'web development portfolio',
    copyright: 'This website is copyright 2021 Diana Vitanyi',
    contact: 'dianavitanyi@gmail.com',
  },
};
