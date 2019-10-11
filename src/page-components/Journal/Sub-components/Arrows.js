// Components==============
import LeftArrowImp from "assets/LeftArrow.inline.svg";
import RightArrowImp from "assets/RightArrow.inline.svg";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";
import styled from "styled-components";
// =========================

const ArrowsWrapper = styled.div``;

const LeftArrowSvg = styled(LeftArrowImp)`
   position: absolute;
   bottom: 10vh;
   width: 15px;
   left: 0;
   @media screen and (min-width: 1000px) {
      bottom: 50vh;
   }
`;

const RightArrowSvg = styled(RightArrowImp)`
   width: 15px;
   position: absolute;
   bottom: 10vh;
   right: 0;
   @media screen and (min-width: 1000px) {
      bottom: 50vh;
   }
`;

export default function Arrows() {
   const removeButtonStyle = {
      backgroundColor: "inherit",
      border: "none"
   };

   return (
      <ArrowsWrapper>
         <ButtonBack style={removeButtonStyle}>
            <LeftArrowSvg />
         </ButtonBack>
         <ButtonNext style={removeButtonStyle}>
            <RightArrowSvg />
         </ButtonNext>
      </ArrowsWrapper>
   );
}
