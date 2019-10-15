// Components==============
import CardWaveImp from "assets/Blog-card-wave.svg";
import { Link } from "gatsby";
import React, { useState } from "react";
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
      transform: translateY(-5px);
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
   width: 100%;
   position: absolute;
   bottom: 0;
   padding: 6.4em 1.2em 2em;

   @media screen and (min-width: 430px) and (max-width: 647px) {
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

const Nerd = styled.p`
   display: ${({ nerdContent }) => (nerdContent === true ? "flex" : "none")};
   color: ${({ theme }) => theme.red};
   ${flexUnit(2.5, 13, 15, "vw", "font-size")}
   margin: 0.2em 0 0;

   b {
      border: ${({ theme }) => theme.red} 2px solid;
      display: none;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      width: 20px;
      height: 20px;
      margin-left: 8px;
      @media screen and (min-width: 1000px) {
         display: flex;
      }
   }
`;

const PopupMessage = styled.p`
   display: ${({ poppedUp }) => (poppedUp === true ? "block" : "none")};
   position: absolute;
   bottom: 20px;
   background: ${({ theme }) => theme.white};
   border-radius: 20px;
   padding: 0.5em 1em;
   width: 210px;
   ${flexUnit(2.5, 14, 15, "vw", "font-size")}
`;

export default function Card({ data, sortOrder }) {
   const [poppedUp, setPoppedUp] = useState(false);

   const cards = data.map(edge => {
      const slug = edge.node.slug;
      const svg = edge.node.svg.file.url;
      const title = edge.node.title;
      const description = edge.node.shortDescription;
      const nerdContent = edge.node.nerdContent;

      function handlePopUp() {
         poppedUp === false ? setPoppedUp(true) : setPoppedUp(false);
      }

      return (
         <CardWrapper to={`/blog/${slug}`} key={slug}>
            <img src={svg} alt="blog" className="cardImage" />
            <CardWave>
               <BlogTitle>
                  {title}{" "}
                  <Nerd nerdContent={nerdContent}>
                     Nerd Warning{" "}
                     <b
                        onMouseEnter={handlePopUp}
                        onMouseLeave={handlePopUp}
                        onClick={handlePopUp}
                     >
                        ?
                     </b>
                     <PopupMessage poppedUp={poppedUp}>
                        This blog posts contains a lot of programming related
                        subjects.{" "}
                     </PopupMessage>
                  </Nerd>
               </BlogTitle>
               <ShortDescription>{description}</ShortDescription>
            </CardWave>
         </CardWrapper>
      );
   });

   if (sortOrder === "Newest first") {
      return cards;
   } else {
      return cards.reverse();
   }
}
