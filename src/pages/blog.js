// Components==============
import React from "react";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import BlogPosts from "../page-components/Blog/BlogPosts";
// =========================

export default function blog({ data }) {
   return (
      <Layout pageStyle="page">
         <Head
            title="Blog"
            description="Page description goes here"
            keywords="content"
         />
         <BlogPosts />
      </Layout>
   );
}
