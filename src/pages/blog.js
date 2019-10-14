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
            description="This blog is about all kinds of fun stuff that have made my life just a little better. I talk about everything, from big topics to small tricks that have helped me on a daily base."
            keywords="my pro journey, productivity, improvement, tips and tricks"
         />
         <BlogPosts />
      </Layout>
   );
}
