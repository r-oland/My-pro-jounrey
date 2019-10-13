// Components==============
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";

// =========================

const TitleWrapper = styled.div`
   margin: 1em auto 1.3em;
   text-align: center;
   position: absolute;
   top: -5em;
   width: 100%;
   left: 50%;
   transform: translateX(-50%);
   z-index: 2;
   margin: 0;

   @media screen and (min-width: 1000px) {
      top: -6em;
   }
`;

const Entry = styled.p`
   ${flexUnit(5, 22, 26, "vw", "font-size")}
   font-weight: 700;
   margin: 0;
`;

const Title = styled.h1`
   font-weight: 500;
   ${flexUnit(2.5, 17, 19, "vw", "font-size")}
   margin-top: 0.5em;
`;

export default function DropDown({ week, title }) {
   return (
      <TitleWrapper>
         <Entry>Entry {week}</Entry>
         <Title>{title}</Title>
      </TitleWrapper>
   );
}
