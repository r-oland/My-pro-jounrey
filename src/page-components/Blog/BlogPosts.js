// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../global-ui-components/Container";
import { flexUnit } from "../../style/Mixins";
import Card from "./Sub-components/Card";
import Filter from "./Sub-components/Filter";
// =========================

const BlogPostsWrapper = styled.div`
   margin: 0.5em 0 4em;

   h1 {
      ${flexUnit(9, 30, 38, "vw", "font-size")};
      text-align: center;

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
   const [sortOrder, setSortOrder] = useState("Newest first");

   const data = useStaticQuery(graphql`
      query blogPostPage {
         allContentfulBlogPost(sort: { order: DESC, fields: publishedDate }) {
            edges {
               node {
                  svg {
                     file {
                        url
                     }
                  }
                  shortDescription
                  title
                  slug
                  publishedDate(formatString: "MM/DD/YYYY HH:mm")
               }
            }
         }
      }
   `).allContentfulBlogPost.edges;

   return (
      <BlogPostsWrapper>
         <Container>
            <TitleWrapper>
               <h1>Blog</h1>
               <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </TitleWrapper>
            <CardSection>
               <Card data={data} sortOrder={sortOrder} />
            </CardSection>
         </Container>
      </BlogPostsWrapper>
   );
}
