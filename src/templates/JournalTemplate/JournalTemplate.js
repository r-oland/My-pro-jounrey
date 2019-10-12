// Components==============
import LeftArrowImp from "assets/LeftArrow.inline.svg";
import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Head from "../../global-layout-components/Layout/Head";
import Layout from "../../global-layout-components/Layout/Layout";
import { Container } from "../../global-ui-components/Container";
import { flexUnit } from "../../style/Mixins";
import JournalContent from "./JournalContent";

// =========================

const LeftArrowSvg = styled(LeftArrowImp)`
   height: ${flexUnit(7, 35, 38, "vh", "height")};
   margin: 1em 1em 1em 0;
`;

const FlexWrapper = styled(Link)`
   display: flex;
   align-items: center;
`;

const FlexWrapper2 = styled.div`
   display: none;
   @media screen and (min-width: 768px) {
      display: flex;
   }
`;

export default function JournalTemplate({ data }) {
   const contentfulData = data.contentfulJournalPost;
   const week = contentfulData.week;
   const shortDescription = contentfulData.shortDescription;
   const keywords = contentfulData.keywords;
   const content = contentfulData.content.json;

   return (
      <Layout pageStyle="page">
         <Head
            title={`Entry ${week}`}
            description={shortDescription}
            keywords={keywords}
         />
         <Container>
            <FlexWrapper2>
               <FlexWrapper to="/journal">
                  <LeftArrowSvg />
                  <p>Back</p>
               </FlexWrapper>
            </FlexWrapper2>
         </Container>
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
