// Components==============
import LeftArrowImp from "assets/LeftArrow.inline.svg";
import RightArrowImp from "assets/RightArrow.inline.svg";
import React from "react";
import styled from "styled-components";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import { Container } from "../global-ui-components/Container";
import Description from "../page-components/Journal/Description";
import Dropdown from "../page-components/Journal/Dropdown";
import JournalCard from "../page-components/Journal/JournalCard";
import Slider from "../page-components/Journal/Slider";

// =========================

const MainSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const LeftArrowSvg = styled(LeftArrowImp)`
   width: 20px;
`;

const RightArrowSvg = styled(RightArrowImp)`
   width: 20px;
`;

export default function journal({ data }) {
   return (
      <Layout pageStyle="page">
         <Head
            title="Journal"
            description="Page description goes here"
            keywords="content"
         />
         <Container style={{ minHeight: "100vh" }}>
            <MainSection>
               <LeftArrowSvg />
               <JournalCard>
                  <Dropdown />
                  <Description />
               </JournalCard>
               <RightArrowSvg />
            </MainSection>
            <Slider />
         </Container>
      </Layout>
   );
}
