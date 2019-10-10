// Components==============
import { graphql, useStaticQuery } from "gatsby";
import { Slide } from "pure-react-carousel";
import React from "react";
import styled from "styled-components";
import Description from "./Description";
import DropDown from "./Dropdown";
// =========================

const MainSectionWrapper = styled.div`
   width: 90%;
   margin: 0 auto;
   @media screen and (min-width: 1000px) {
      width: 75%;
      border-radius: 20px;
      position: relative;
      margin-top: 3em;
      padding: 1em 2em;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   }
`;

export default function MainSection() {
   const data = useStaticQuery(graphql`
      query JournalAllQuery {
         allContentfulJournalPost(sort: { fields: publishDate, order: DESC }) {
            edges {
               node {
                  slug
                  week
                  keywords
                  shortDescription
               }
            }
         }
      }
   `).allContentfulJournalPost.edges;

   const MainSectionContent = data.map(content => {
      const slug = content.node.slug;
      const week = content.node.week;
      const keywords = content.node.keywords;
      const shortDescription = content.node.shortDescription;

      return (
         <Slide index={week} key={week} style={{ height: "70vh" }}>
            <MainSectionWrapper key={slug}>
               <DropDown week={week} />
               <Description
                  slug={slug}
                  keywords={keywords}
                  shortDescription={shortDescription}
               />
            </MainSectionWrapper>
         </Slide>
      );
   });

   return MainSectionContent;
}
