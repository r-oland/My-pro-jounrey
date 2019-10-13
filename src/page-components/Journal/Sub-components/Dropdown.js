// Components==============
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";

// =========================

const TitleWrapper = styled.div`
   margin: 1em auto 1.3em;
   text-align: center;
   position: absolute;
   top: -6em;
   width: 100%;
   left: 50%;
   transform: translateX(-50%);
   z-index: 2;
   margin: 0;

   @media screen and (min-width: 1000px) {
      top: -8em;
   }
`;

const Entry = styled.p`
   ${flexUnit(2.5, 20, 24, "vw", "font-size")}
   font-weight: 300;
   margin: 0;
`;

const Title = styled.h1`
   font-weight: 700;
   ${flexUnit(2.5, 22, 30, "vw", "font-size")}
   margin-bottom: 0.4em;
`;

export default function DropDown({ entry, title }) {
   return (
      <TitleWrapper>
         <Title>{title}</Title>
         <Entry>Entry {entry}</Entry>
      </TitleWrapper>
   );
}
