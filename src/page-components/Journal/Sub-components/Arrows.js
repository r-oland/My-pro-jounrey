// Components==============
import LeftArrowImp from "assets/LeftArrow.inline.svg";
import RightArrowImp from "assets/RightArrow.inline.svg";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";
import styled from "styled-components";
// =========================

const ArrowsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   height: 20vh;
`;

const LeftArrowSvg = styled(LeftArrowImp)`
   width: 15px;
`;

const RightArrowSvg = styled(RightArrowImp)`
   width: 15px;
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
