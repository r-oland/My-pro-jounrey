// Components==============
import LeftArrowImp from "assets/LeftArrow.inline.svg";
import RightArrowImp from "assets/RightArrow.inline.svg";
import React from "react";
import styled from "styled-components";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import { Container } from "../global-ui-components/Container";
import FullSection from "../page-components/Journal/FullSection";
// =========================

const Arrows = styled.div`
   display: flex;
   justify-content: space-between;
   height: 20vh;
`;

const LeftArrowSvg = styled(LeftArrowImp)`
   width: 15px;
`;

const RightArrowSvg = styled(RightArrowImp)`
   width: 15px;
`;

export default function journal() {
   return (
      <Layout pageStyle="page">
         <Head
            title="Journal"
            description="Page description goes here"
            keywords="content"
         />
         <Container style={{ position: "relative" }}>
            <FullSection />
            <Arrows>
               <LeftArrowSvg />
               <RightArrowSvg />
            </Arrows>
         </Container>
      </Layout>
   );
}
