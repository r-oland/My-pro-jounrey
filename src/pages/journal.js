// Components==============
import React from "react";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import { Container } from "../global-ui-components/Container";
import Description from "../page-components/Journal/Description";
import Dropdown from "../page-components/Journal/Dropdown";
import JournalCard from "../page-components/Journal/JournalCard";
import Slider from "../page-components/Journal/Slider";
// =========================

export default function Journal({ data }) {
   return (
      <Layout>
         <Head
            title="Journal"
            description="Page description goes here"
            keywords="content"
         />
         <Container style={{ minHeight: "100vh" }}>
            <JournalCard>
               <Dropdown />
               <Description />
            </JournalCard>
            <Slider />
         </Container>
      </Layout>
   );
}
