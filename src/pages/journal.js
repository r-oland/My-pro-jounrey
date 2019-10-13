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
            description="Here, you will find my journey as a freelance web designer/developer. You're able to reed my approach, results, and failures in this online public journal."
            keywords="journal, public journal, freelance, progression"
         />
         <Container style={{ position: "relative" }}>
            <JournalPosts />
         </Container>
      </Layout>
   );
}
