// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../style/Mixins";
// =========================

const BlogContainer = styled.div`
   margin: 1em auto 4em;

   @media screen and (min-width: 768px) {
      max-width: 80%;
      border-radius: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   }

   @media screen and (min-width: 1200px) {
      max-width: 60%;
   }

   position: relative;
   overflow: hidden;

   .backgroundSvg {
      height: 40vh;
      object-fit: cover;
      width: 100%;
   }
`;

const TitleText = styled.div`
   opacity: 1;
   text-align: center;
   padding: 1em 0;
`;

const Title = styled.h3`
   padding: 0 1em;
   margin: 0;
`;

const PublishedDate = styled.p`
   margin: 0.5em 0 0;
   ${flexUnit(6, 14, 15, "vw", "font-size")}
`;

const Content = styled.div`
   margin: 0 auto;
   max-width: 80%;
`;

export default function BlogContent({
   title,
   publishedDate,
   blogImage,
   content
}) {
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
      <BlogContainer>
         <img src={blogImage} alt="backgroundSvg" className="backgroundSvg" />
         <TitleText>
            <Title>{title}</Title>
            <PublishedDate>{publishedDate}</PublishedDate>
         </TitleText>
         <Content>
            {documentToReactComponents(content, richTextOptions)}
         </Content>
      </BlogContainer>
   );
}
