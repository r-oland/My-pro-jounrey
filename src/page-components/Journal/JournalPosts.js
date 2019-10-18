// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Carousel from "./Sub-components/Carousel";
import MainSection from "./Sub-components/MainSection";
// =========================

const QUERY = graphql`
   query JournalAllQuery2 {
      allContentfulJournalPost {
         edges {
            node {
               slug
            }
         }
      }
   }
`;

export default function JournalPosts() {
   const data = useStaticQuery(QUERY);

   const amountOfPages = data.allContentfulJournalPost.edges.length;

   return (
      <Carousel amountOfPages={amountOfPages}>
         <MainSection />
      </Carousel>
   );
}
