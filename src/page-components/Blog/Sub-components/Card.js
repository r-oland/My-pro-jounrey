// Components==============
import CardWaveImp from "assets/CardWave.svg";
import test from "assets/test.jpg";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
// =========================

const CardWrapper = styled(Link)`
   font-size: 16px;
   height: 380px;
   border-radius: 20px;
   overflow: hidden;
   position: relative;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

   &:hover {
      transform: translateY(5px);
      transition: 0.5s;
   }

   .cardImage {
      height: 310px;
      width: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
   }
`;

const CardWave = styled.div`
   background-image: url(${CardWaveImp});
   background-size: cover;
   height: 260px;
   position: absolute;
   bottom: 0;
   padding: 6.4em 1.2em 2em;

   @media screen and (min-width: 430px) and (max-width: 626px) {
      padding-top: 8.4em;
   }
`;

const BlogTitle = styled.h5`
   color: ${({ theme }) => theme.white};
   ${flexUnit(8, 16, 17, "vw", "font-size")}
   margin: 0;
`;

const ShortDescription = styled.p`
   color: ${({ theme }) => theme.white};
   ${flexUnit(8, 13, 14, "vw", "font-size")}
`;

export default function Card() {
   return (
      <CardWrapper to="/">
         <img src={test} alt="" className="cardImage" />
         <CardWave>
            <BlogTitle>A reasonable blog title test</BlogTitle>
            <ShortDescription>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Consequuntur, ex nobis velit eum unde sint officiis error vero
               dolorem ducimus in deserunt incidunt beatae ea architecto sunt
               quasi.
            </ShortDescription>
         </CardWave>
      </CardWrapper>
   );
}
