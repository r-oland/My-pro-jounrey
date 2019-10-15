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
   margin: 6em auto 0;
   padding: 1em 1em 2em;
   background-color: #fff8ee;
   border-radius: 20px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   position: relative;

   @media screen and (min-width: 1000px) {
      margin: 0 auto;
      top: 45%;
      transform: translateY(-35%);
      height: initial;
      width: 75%;
      padding: 1em 2em;
   }

   @media screen and (min-width: 1100px) {
      top: 40%;
   }
`;

export default function MainSection() {
   const data = useStaticQuery(graphql`
      query JournalAllQuery {
         allContentfulJournalPost(sort: { fields: publishDate, order: DESC }) {
            edges {
               node {
                  title
                  publishDate(formatString: "MMMM DD YYYY")
                  slug
                  entry
                  keywords
                  subjects
                  shortDescription
                  nerdContent
               }
            }
         }
      }
   `).allContentfulJournalPost.edges;

   const MainSectionContent = data.map(content => {
      const title = content.node.title;
      const publishDate = content.node.publishDate;
      const slug = content.node.slug;
      const entry = content.node.entry;
      const subjects = content.node.subjects;
      const shortDescription = content.node.shortDescription;
      const nerdContent = content.node.nerdContent;

      return (
         <Slide index={entry} key={entry} style={{ height: "90vh" }}>
            <MainSectionWrapper key={slug}>
               <DropDown title={title} publishDate={publishDate} />
               <Description
                  entry={entry}
                  slug={slug}
                  subjects={subjects}
                  shortDescription={shortDescription}
                  nerdContent={nerdContent}
               />
            </MainSectionWrapper>
         </Slide>
      );
   });

   return MainSectionContent;
}
