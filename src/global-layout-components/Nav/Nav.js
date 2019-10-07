// Components==============
import React from "react";
import styled from "styled-components";
import { NavContainer } from "../../global-ui-components/Container";
import Logo from "./sub-components/Logo";
import Hamburger from "./sub-components/Menu";
import Navigation from "./sub-components/Navigation";
// =========================

const NavWrapper = styled.nav`
   height: 10vh;
   padding-top: 1em;

   @media screen and (min-aspect-ratio: 17/9) and (max-width: 1000px) {
      height: 20vh;
   }
`;

export default function Nav({ pageStyle }) {
   return (
      <NavWrapper>
         <NavContainer>
            <Logo pageStyle={pageStyle} />
            <Navigation pageStyle={pageStyle} />
            <Hamburger pageStyle={pageStyle} />
         </NavContainer>
      </NavWrapper>
   );
}
