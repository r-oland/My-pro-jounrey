// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../../global-layout-components/Layout/Head";
import Layout from "../../global-layout-components/Layout/Layout";
import BlogContent from "./BlogContent";
// =========================

export default function BlogTemplate({ data }) {
   const contentfulData = data.contentfulBlogPost;
   const title = contentfulData.title;
   const shortDescription = contentfulData.shortDescription;
   const publishedDate = contentfulData.publishedDate;
   const keywords = contentfulData.keywords;
   const blogImage = contentfulData.blogImage.file.url;
   const content = contentfulData.content.json;

   return (
      <Layout pageStyle="page">
         <Head
            title={title}
            description={shortDescription}
            keywords={keywords}
         />
         <BlogContent
            title={title}
            publishedDate={publishedDate}
            blogImage={blogImage}
            content={content}
         />
      </Layout>
   );
}

export const query = graphql`
   query BlogContent($slug: String!) {
      contentfulBlogPost(slug: { eq: $slug }) {
         title
         shortDescription
         publishedDate(formatString: "DD/MM/YYYY")
         keywords
         blogImage {
            file {
               url
            }
         }
         content {
            json
         }
      }
   }
`;
