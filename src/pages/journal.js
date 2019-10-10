// Components==============
import React from "react";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import { Container } from "../global-ui-components/Container";
import JournalPosts from "../page-components/Journal/JournalPosts";
// =========================

export default function journal() {
   return (
      <Layout pageStyle="page">
         <Head
            title="Journal"
            description="Page description goes here"
            keywords="content"
         />
         <Container style={{ position: "relative" }}>
            <JournalPosts />
         </Container>
      </Layout>
   );
}
