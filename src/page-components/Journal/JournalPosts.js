// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Carousel from "./Sub-components/Carousel";
import MainSection from "./Sub-components/MainSection";
// =========================

export default function JournalPosts() {
   const data = useStaticQuery(graphql`
      query JournalAllQuery2 {
         allContentfulJournalPost {
            edges {
               node {
                  slug
               }
            }
         }
      }
   `);

   const amountOfPages = data.allContentfulJournalPost.edges.length;

   return (
      <Carousel amountOfPages={amountOfPages}>
         <MainSection />
      </Carousel>
   );
}
