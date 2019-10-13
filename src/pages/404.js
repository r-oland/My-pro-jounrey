// Components==============
import React from "react";
import styled from "styled-components";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import { Container } from "../global-ui-components/Container";
import { flexUnit } from "../style/Mixins";
// =========================

const F0F = styled.h1`
   ${flexUnit(2.4, 30, 40, "vw", "font-size")}
   text-align: center;
`;

const Smiley = styled.span`
   ${flexUnit(2.4, 40, 50, "vw", "font-size")}
   margin: 0;
`;

const LayoutStyle = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   height: "40vh"
};

export default function notFound() {
   return (
      <Layout pageStyle="page">
         <Head
            title="404 NOT FOUND"
            description="Could not found the page you where looking for"
            keywords="404, unavailable, not found"
         />
         <Container style={LayoutStyle}>
            <F0F>I could not find what you where looking for.</F0F>
            {/* eslint-disable-next-line */}
            <Smiley>😟</Smiley>
         </Container>
      </Layout>
   );
}
