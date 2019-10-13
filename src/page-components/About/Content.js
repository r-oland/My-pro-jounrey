// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../style/Mixins";
// =========================

const ContentWrapper = styled.div`
   min-height: 90vh;
   @media screen and (min-width: 1000px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin: calc(1rem + 1vw) 0 2rem;
      grid-column-gap: 30px;
      grid-row-gap: 50px;
      align-content: start;
   }

   @media screen and (min-width: 1600px) {
      margin-top: calc(3em + 2vw);
   }

   .headshotImg {
      margin-top: calc(1.5em + 1vw);
      margin-left: 15%;
      margin-right: 15%;

      @media screen and (min-width: 500px) {
         margin-left: calc(22% + 5vw);
         margin-right: calc(22% + 5vw);
      }

      @media screen and (min-width: 1000px) {
         margin: 0;
         width: 100%;
         max-width: 380px;
         grid-column: 2;
         grid-row: 1/3;
         justify-self: end;
         align-self: center;
         transform: translateY(4vh);
      }
   }
`;

const IKIS = styled.p`
   margin: 0.3em 0 1em;
   text-align: center;
   font-weight: 500;
   ${flexUnit(5, 27, 35, "vw", "font-size")}
   grid-column: 1;
   grid-row: 1;

   @media screen and (min-width: 1000px) {
      margin: 0;
      text-align: left;
   }

   span {
      color: ${({ theme }) => theme.red};
      font-size: 50px;
   }
`;

const AboutTekst = styled.p`
   margin: 2em 0 2.5em;
   line-height: 1.6;
   grid-column: 1;

   @media screen and (min-width: 1000px) {
      margin: 0;
   }
`;

const Italic = styled.span`
   font-style: italic;
`;

export default function Content({ headshot }) {
   function calcAge() {
      const today = new Date();
      const birthDay = new Date("20, january, 1999");
      const difference = Math.floor(Math.abs(today - birthDay) / 31536000000);

      return difference;
   }

   const age = calcAge();

   return (
      <ContentWrapper>
         <Img fluid={headshot} alt="Roland Branten" className="headshotImg" />
         <IKIS>
            I'll keep it short <span>.</span>
         </IKIS>
         <AboutTekst>
            My name is Roland Branten, {age} years old and I live in Eindhoven,
            the Netherlands. I currently work as a self-taught freelance
            full-stack designer (that's a mouthful😕). What it means is that I
            handle everything from the design that determines how a site will
            look to the code that makes it functional and able to exist.
            <br />
            <br />
            At the moment my biggest passion is creating things that I couldn't
            create yesterday.{" "}
            <Italic>
               That sentence came to me while writing this and I like it, so I'm
               going to stick with it.
            </Italic>{" "}
            Nowadays, this is mostly through music, programming, art or design.
            <br />
            <br />
            Oh, and don’t bother, I don’t do social media.
         </AboutTekst>
      </ContentWrapper>
   );
}
