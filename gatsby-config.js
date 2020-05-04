/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Gatsby Learning",
    description: "This is normal description",
    author: "@lovejits",
    data: ["Item 1", "item 2"],
    person: { name: "Lovejit", from: "punjab" },
  },

  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-drupal7`,
      options: {
        baseUrl: `https://dev-gatsby-lj-d7.pantheonsite.io/`,
        apiBase: `restws_resource.json`, // optional, defaults to `restws_resource.json`
        basicAuth: {
          username: process.env.DRUPAL_ADMIN,
          password: process.env.DRUPAL_PASSWORD,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
