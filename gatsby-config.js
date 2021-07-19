module.exports = {
  /* Your site config here */
  plugins: [
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
