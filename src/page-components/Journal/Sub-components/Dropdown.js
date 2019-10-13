// Components==============
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";

// =========================

const TitleWrapper = styled.div`
   margin: 1em auto 1.3em;
   width: 200px;
   text-align: center;
   position: absolute;
   top: -3.5em;
   font-weight: 700;
   left: 50%;
   transform: translateX(-50%);
   z-index: 2;
   ${flexUnit(5, 22, 26, "vw", "font-size")}
   margin: 0;

   @media screen and (min-width: 1000px) {
      top: -3em;
   }
`;

export default function DropDown({ week }) {
   return <TitleWrapper>Entry {week}</TitleWrapper>;
}
