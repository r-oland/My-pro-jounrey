const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions;
   const templateBlog = path.resolve(
      "./src/templates/BlogTemplate/BlogTemplate.js"
   );
   const templateJournal = path.resolve(
      "./src/templates/JournalTemplate/JournalTemplate.js"
   );

   const resBlog = await graphql(`
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

   const resJournal = await graphql(`
      {
         allContentfulJournalPost {
            edges {
               node {
                  slug
               }
            }
         }
      }
   `);

   resBlog.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
         component: templateBlog,
         path: `/blog/${edge.node.slug}`,
         context: {
            slug: edge.node.slug
         }
      });
   });

   resJournal.data.allContentfulJournalPost.edges.forEach(edge => {
      createPage({
         component: templateJournal,
         path: `/journal/${edge.node.slug}`,
         context: {
            slug: edge.node.slug
         }
      });
   });
};
