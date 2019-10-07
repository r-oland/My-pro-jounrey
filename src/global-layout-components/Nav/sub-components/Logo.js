// Components==============
import BrandImageImp from "assets/BrandImage.inline.svg";
import LogoBlackImp from "assets/LogoBlack.inline.svg";
import LogoWhiteImp from "assets/LogoWhite.inline.svg";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
// =========================

const LogoWrapper = styled(Link)`
   display: flex;
   align-items: center;
`;

const BrandImageSvg = styled(BrandImageImp)`
   ${flexUnit(3, 35, 50, "vw", "width")}
   margin-right: 1em;
   z-index: 50;
   position: relative;
`;

const LogoWhiteSvg = styled(LogoWhiteImp)`
   ${flexUnit(10, 140, 225, "vw", "width")}
   display: ${({ pagestyle }) => (pagestyle === "home" ? "block" : "none")};
`;

const LogoBlackSvg = styled(LogoBlackImp)`
   ${flexUnit(10, 140, 225, "vw", "width")}
   display: ${({ pagestyle }) => (pagestyle === "page" ? "block" : "none")};
`;

export default function Logo({ pageStyle }) {
   return (
      <LogoWrapper to="/">
         <BrandImageSvg />
         <LogoWhiteSvg pagestyle={pageStyle} />
         <LogoBlackSvg pagestyle={pageStyle} />
      </LogoWrapper>
   );
}
