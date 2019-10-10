// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Carousel from "./Carousel";
import MainSection from "./MainSection";
// =========================

export default function FullSection() {
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
