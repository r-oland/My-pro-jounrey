// Components==============
import React from "react";
import styled from "styled-components";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import Hero from "../page-components/Index/Hero";
import Info from "../page-components/Index/Info";
// =========================

const BackgroundFix = styled.div`
   background-color: #487c85;
`;

export default function index() {
   return (
      <Layout pageStyle="home">
         <Head
            title="Home"
            description="Page description goes here"
            keywords="content"
            pageStyle="home"
         />
         <BackgroundFix>
            <Hero />
            <Info />
         </BackgroundFix>
      </Layout>
   );
}
