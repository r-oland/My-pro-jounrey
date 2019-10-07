// const path = require("path");

//GENERATING NEW PAGES BASED ON CONTENTFUL SLUG

// module.exports.createPages = async ({ graphql, actions }) => {
//    const { createPage } = actions;
//    const template = path.resolve("./src/.../....js");
//    const res = await graphql(`
//       {
//          allContentful... {
//             edges {
//                node {
//                   slug
//                }
//             }
//          }
//       }
//    `);

//    res.data.allContentful....edges.forEach(edge => {
//       createPage({
//          component: template,
//          path: `/${edge.node.slug}`,
//          context: {
//             slug: edge.node.slug
//          }
//       });
//    });
// };
