// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
// =========================

export default function PageNavigation() {
   const PageNavigationUi = styled.ul`
      display: flex;
      justify-content: space-evenly;
      text-decoration: underline;

      @media screen and (min-width: 768px) {
         padding: 0 10vw;
      }

      @media screen and (min-width: 1200px) {
         padding: 0 18vw;
      }

      a {
         color: ${({ theme }) => theme.white};
         ${flexUnit(2, 15.5, 17.5, "vw", "font-size")}
      }
   `;

   return (
      <PageNavigationUi>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/">Journal</Link>
         </li>
         <li>
            <Link to="/blog">Blog</Link>
         </li>
         <li>
            <Link to="/about">About</Link>
         </li>
      </PageNavigationUi>
   );
}
