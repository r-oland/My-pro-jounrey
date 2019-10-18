// Components==============

import { graphql } from "gatsby";
import React from "react";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import { Container } from "../global-ui-components/Container";
import Content from "../page-components/About/Content";

// =========================

export default function about({ data }) {
   return (
      <Layout pageStyle="page">
         <Head
            title="About"
            description="This page contains the information about the author of this website, Roland Branten"
            keywords="about, Roland Branten, my pro journey"
         />
         <Container>
            <Content headshot={data.Headshot.childImageSharp.fluid} />
         </Container>
      </Layout>
   );
}

export const query = graphql`
   query images {
      Headshot: file(relativePath: { eq: "Roland-Branten.png" }) {
         childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid
            }
         }
      }
   }
`;
