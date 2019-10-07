require("dotenv").config();
const path = require("path");

module.exports = {
   siteMetadata: {
      title: `My Pro Journey`,
      description: `This is a site where you're able to read the ongoing story of my professional journey.`,
      author: `Roland Branten`,
      siteUrl: `https://www.myprojourney.com/`
   },
   plugins: [
      // `gatsby-plugin-sitemap`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `assets`,
            path: `${__dirname}/src/assets`
         }
      },
      {
         resolve: "gatsby-plugin-root-import",
         options: {
            assets: path.join(__dirname, "src/assets")
         }
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `My pro journey`,
            short_name: `MPJ`,
            start_url: `https://www.myprojourney.com/`,
            background_color: `#fbf4ea`,
            display: `standalone`,
            icon: `icon/icon.png`
         }
      },
      `gatsby-plugin-offline`,
      {
         resolve: "gatsby-plugin-react-svg",
         options: {
            rule: {
               include: /\.inline\.svg$/
            }
         }
      }
      //   {
      //     resolve: `gatsby-source-contentful`,
      //     options: {
      //        spaceId: process.env.CONTENTFUL_SPACE_ID,
      //        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      //     }
      //  },
   ]
};
