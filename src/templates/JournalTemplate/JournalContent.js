// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import LeftArrowImp from "assets/LeftArrow.inline.svg";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const JournalContainer = styled.div`
   margin: calc(2.2em + -6vw) auto 4em;

   @media screen and (min-width: 768px) {
      margin-top: 0;
      padding: 2em 0;
      max-width: 80%;
      border-radius: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   }

   @media screen and (min-width: 1200px) {
      max-width: 60%;
   }
`;

const Title = styled.h4`
   margin: 0;
   text-align: center;
   grid-column: 1/3;
   grid-row: 1;
`;

const Content = styled.div`
   margin: 0 auto;
   max-width: 90%;
`;

const TitleWrapper = styled.div`
   display: grid;
   grid-template-columns: 50px 1fr;
`;

const LeftArrowSvg = styled(LeftArrowImp)`
   height: 30px;
`;

const LeftArrowWrapper = styled(Link)`
   grid-row: 1;
   grid-column: 1;
   z-index: 2;

   @media screen and (min-width: 768px) {
      display: none;
   }
`;

export default function JournalContent({ week, content }) {
   const richTextOptions = {
      renderNode: {
         [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
               <img
                  src={node.data.target.fields.file["en-US"].url}
                  alt={node.data.target.fields.title["en-US"]}
               />
            );
         }
      }
   };

   return (
      <JournalContainer>
         <Content>
            <TitleWrapper>
               <LeftArrowWrapper to="/journal">
                  <LeftArrowSvg />
               </LeftArrowWrapper>
               <Title>Entry {week}</Title>
            </TitleWrapper>
            {documentToReactComponents(content, richTextOptions)}
         </Content>
      </JournalContainer>
   );
}
