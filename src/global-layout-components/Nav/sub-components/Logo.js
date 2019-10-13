// Components==============
import LogoBlackImp from "assets/Logo-text-black.svg";
import LogoWhiteImp from "assets/Logo-text-white.svg";
import BrandImage from "assets/My-pro-journey-logo.svg";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
// =========================

const LogoWrapper = styled(Link)`
   display: flex;
   align-items: center;
`;

const BrandImageSvg = styled.img`
   ${flexUnit(3, 35, 50, "vw", "width")}
   margin-right: 1em;
   z-index: 50;
   position: relative;
`;

const LogoWhiteSvg = styled.img`
   ${flexUnit(10, 140, 225, "vw", "width")}
   display: ${({ pagestyle }) => (pagestyle === "home" ? "block" : "none")};
`;

const LogoBlackSvg = styled.img`
   ${flexUnit(10, 140, 225, "vw", "width")}
   display: ${({ pagestyle }) => (pagestyle === "page" ? "block" : "none")};
`;

export default function Logo({ pageStyle }) {
   return (
      <LogoWrapper to="/">
         <BrandImageSvg src={BrandImage} alt="My pro journey logo" />
         <LogoWhiteSvg
            pagestyle={pageStyle}
            src={LogoWhiteImp}
            alt="My pro journey logo text white"
         />
         <LogoBlackSvg
            pagestyle={pageStyle}
            src={LogoBlackImp}
            alt="My pro journey logo text black"
         />
      </LogoWrapper>
   );
}
