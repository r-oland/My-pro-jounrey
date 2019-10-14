// Components==============
import LeftArrowImp from "assets/LeftArrow.inline.svg";
import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Head from "../../global-layout-components/Layout/Head";
import Layout from "../../global-layout-components/Layout/Layout";
import { Container } from "../../global-ui-components/Container";
import { flexUnit } from "../../style/Mixins";
import BlogContent from "./BlogContent";
// =========================

const LeftArrowSvg = styled(LeftArrowImp)`
   height: ${flexUnit(7, 35, 38, "vh", "height")};
   margin: 0 1em 1em 0;

   @media screen and (min-width: 768px) {
      margin-top: 1em;
   }
`;
const FlexWrapper = styled(Link)`
   display: flex;
   align-items: center;
`;

const FlexWrapper2 = styled.div`
   @media screen and (min-width: 768px) {
      display: flex;
   }
`;

const Back = styled.p`
   display: none;
   @media screen and (min-width: 768px) {
      display: block;
   }
`;

export default function BlogTemplate({ data }) {
   const contentfulData = data.contentfulBlogPost;
   const title = contentfulData.title;
   const shortDescription = contentfulData.shortDescription;
   const publishedDate = contentfulData.publishedDate;
   const keywords = contentfulData.keywords;
   const svg = contentfulData.svg.file.url;
   const content = contentfulData.content.json;

   return (
      <Layout pageStyle="page">
         <Head
            title={title}
            description={shortDescription}
            keywords={keywords}
         />
         <Container>
            <FlexWrapper2>
               <FlexWrapper to="/blog">
                  <LeftArrowSvg />
                  <Back>Back</Back>
               </FlexWrapper>
            </FlexWrapper2>
         </Container>
         <BlogContent
            title={title}
            publishedDate={publishedDate}
            svg={svg}
            content={content}
         />
      </Layout>
   );
}

export const query = graphql`
   query BlogContent($slug: String!) {
      contentfulBlogPost(slug: { eq: $slug }) {
         title
         shortDescription
         publishedDate(formatString: "MMMM DD YYYY")
         keywords
         svg {
            file {
               url
            }
         }
         content {
            json
         }
      }
   }
`;
