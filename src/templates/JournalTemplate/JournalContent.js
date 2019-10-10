// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";
// =========================

const JournalContainer = styled.div`
   margin: 2.8em auto 4em;
   padding: 2em 0;

   @media screen and (min-width: 768px) {
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
`;

const Content = styled.div`
   margin: 0 auto;
   max-width: 80%;
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
            <Title>week {week}</Title>
            {documentToReactComponents(content, richTextOptions)}
         </Content>
      </JournalContainer>
   );
}
