// Components==============
import Wave from "assets/Wave.inline.svg";
import React from "react";
import styled from "styled-components";
import { Container } from "../../global-ui-components/Container";
import { flexUnit } from "../../style/Mixins";
import PageNavigation from "./sub-components/PageNavigation";
import QuestionSection from "./sub-components/QuestionSection";
// =========================

const WaveStyle = styled(Wave)`
   position: relative;
   top: 8px;
   width: 100vw;
   height: 6em;

   @media screen and (min-width: 1200px) {
      height: calc(2em + 8vh);
   }
`;

const FooterBackground = styled.div`
   background-color: ${({ theme }) => theme.dark};
   position: relative;
   color: ${({ theme }) => theme.white};
   text-align: center;
`;

const Rights = styled.p`
   ${flexUnit(4, 14, 16, "vw", "font-size")}
   margin: 0;
   padding: 1em 0 2.5em;
`;

export default function Footer() {
   return (
      <footer>
         <WaveStyle />
         <FooterBackground>
            <Container>
               <QuestionSection />
               <PageNavigation />
               <Rights>
                  © My Pro Journey | All rights reserved | Roland Branten
               </Rights>
            </Container>
         </FooterBackground>
      </footer>
   );
}
