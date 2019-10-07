// Components==============
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../style/GlobalStyles";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
// =========================

const OverFlowFix = styled.div`
   overflow: hidden;
   position: relative;
   background-color: ${({ pageStyle }) =>
      pageStyle === "home" ? "#74b3a3" : "#fbf4ea"};
`;

export default function Layout({ children, pageStyle }) {
   return (
      <ThemeProvider theme={Variables}>
         <OverFlowFix pageStyle={pageStyle}>
            <Nav pageStyle={pageStyle} />
            {children}
            <Footer />
         </OverFlowFix>
         <GlobalStyles />
      </ThemeProvider>
   );
}
