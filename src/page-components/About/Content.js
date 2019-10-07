// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { flexUnit } from "../../style/Mixins";
// =========================

const ContentWrapper = styled.div`
   @media screen and (min-width: 1000px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin: 1rem 0 2rem;
      grid-column-gap: 30px;
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
      }
   }
`;

const IKIS = styled.h3`
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
      margin: 1.5em 0 0;
   }
`;

export default function Content({ headshot }) {
   console.log(headshot);

   return (
      <ContentWrapper>
         <Img fluid={headshot} alt="headshot" className="headshotImg" />
         <IKIS>
            I'll keep it short <span>.</span>
         </IKIS>
         <AboutTekst>
            My name is Roland Branten, 20 years old and I live in Eindhoven, the
            Netherlands. At the moment my big passions are coding, design and
            music. I’v been playing guitar ever since I can properly remember
            and I’m a singer ever since I dared to be. Coding and design are
            farley new to the list, but since I now spend the vast majority of
            my days on these 2 crafts, it seemed ﬁtting to add them to it.
            <br />
            <br />
            I have a ‘semi-healthy’ addiction in trying to optimize and improve
            my life in every way that seems useful to me. I probably spend to
            much time thinking about things that aren't that important in the
            end and apparently I tend to give out pretty personal information to
            strange people on the web.
            <br />
            <br />
            All jokes aside, although it wasn’t really a joke, I’m just a
            regular guy who’s trying to make the most of is his life and likes
            to share his experiences with you.
            <br />
            <br />
            Oh and don’t bother, I don’t do social media.
         </AboutTekst>
      </ContentWrapper>
   );
}
