// Components==============
import React from "react";
import styled from "styled-components";
import { Container } from "../../global-ui-components/Container";
import { flexUnit } from "../../style/Mixins";
import Card from "./Sub-components/Card";
import Filter from "./Sub-components/Filter";
// =========================

const BlogPostsWrapper = styled.div`
   h2 {
      ${flexUnit(9, 30, 38, "vw", "font-size")};
      text-align: center;
      margin-top: 0.5em;

      @media screen and (min-width: 1000px) {
         text-align: left;
      }
   }
`;

const TitleWrapper = styled.div`
   @media screen and (min-width: 1000px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
   }
`;

const CardSection = styled.div`
   display: grid;
   grid-gap: 3em 2em;
   grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
   align-content: space-between;
`;

export default function BlogPosts() {
   return (
      <BlogPostsWrapper>
         <Container>
            <TitleWrapper>
               <h2>Blog</h2>
               <Filter />
            </TitleWrapper>
            <CardSection>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </CardSection>
         </Container>
      </BlogPostsWrapper>
   );
}
