const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions;
   const template = path.resolve(
      "./src/templates/BlogTemplate/BlogTemplate.js"
   );
   const res = await graphql(`
      {
         allContentfulBlogPost {
            edges {
               node {
                  slug
               }
            }
         }
      }
   `);

   res.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
         component: template,
         path: `/blog/${edge.node.slug}`,
         context: {
            slug: edge.node.slug
         }
      });
   });
};
