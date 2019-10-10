// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../../global-layout-components/Layout/Head";
import Layout from "../../global-layout-components/Layout/Layout";
import JournalContent from "./JournalContent";
// =========================

export default function JournalTemplate({ data }) {
   const contentfulData = data.contentfulJournalPost;
   const week = contentfulData.week;
   const shortDescription = contentfulData.shortDescription;
   const keywords = contentfulData.keywords;
   const content = contentfulData.content.json;

   return (
      <Layout pageStyle="page">
         <Head
            title={`week ${week}`}
            description={shortDescription}
            keywords={keywords}
         />
         <JournalContent week={week} content={content} />
      </Layout>
   );
}

export const query = graphql`
   query JournalContent($slug: String!) {
      contentfulJournalPost(slug: { eq: $slug }) {
         week
         keywords
         shortDescription
         content {
            json
         }
      }
   }
`;
