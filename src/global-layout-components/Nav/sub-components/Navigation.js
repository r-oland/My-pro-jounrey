// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
// =========================

const NavigationWrapper = styled.ul`
   display: none;

   @media screen and (min-width: 800px) {
      display: ${prop => (prop.pageStyle === "home" ? "none" : "flex")};
   }

   li {
      padding-left: 5em;
   }

   a {
      ${flexUnit(3, 24, 19, "vw", "font-size")}
   }
`;

export default function Navigation({ pageStyle }) {
   return (
      <NavigationWrapper pageStyle={pageStyle}>
         <li>
            <Link to="/">Journal</Link>
         </li>
         <li>
            <Link to="/blog">Blog</Link>
         </li>
         <li>
            <Link to="/about">About</Link>
         </li>
      </NavigationWrapper>
   );
}
