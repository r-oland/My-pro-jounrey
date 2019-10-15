// Components==============
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";

// =========================

const TitleWrapper = styled.div`
   margin: 1em auto 1.3em;
   text-align: center;
   position: absolute;
   top: -5.1em;
   width: 100%;
   left: 50%;
   transform: translateX(-50%);
   z-index: 2;
   margin: 0;

   @media screen and (min-width: 1000px) {
      top: -6em;
   }
`;

const Title = styled.h1`
   font-weight: 700;
   ${flexUnit(2.5, 24, 30, "vw", "font-size")}
   margin: 0.4em 0 0.3em;
`;

const Date = styled.p`
   ${flexUnit(2.5, 14, 15, "vw", "font-size")}
   margin: 0;
`;

export default function DropDown({ entry, title, publishDate }) {
   return (
      <TitleWrapper>
         <Title>{title}</Title>
         <Date>{publishDate}</Date>
      </TitleWrapper>
   );
}
