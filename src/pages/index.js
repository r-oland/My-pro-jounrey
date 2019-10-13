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
            description="On this site I'm documenting my professional journey of becoming a freelance developer/designer so that you might also benefit from the things I'm learning."
            keywords="my pro journey, public journal, web development journal, freelance journal "
            pageStyle="home"
         />
         <BackgroundFix>
            <Hero />
            <Info />
         </BackgroundFix>
      </Layout>
   );
}
