// Components==============
import DarkFishImp from "assets/DarkFish.inline.svg";
import OrangeFishImp from "assets/OrangeFish.inline.svg";
import RedFishImp from "assets/RedFish.inline.svg";
import textWrapper from "assets/TextWrapper.svg";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../../global-ui-components/Button";
// =========================

// keyframes

const swim = keyframes`
   from {
      right: -40vw;
   }

   to {
      right: 120vw;
   }
`;

const InfoWrapper = styled.div`
   background-color: #487c85;
   position: relative;
   bottom: -15vh;
   padding-bottom: 15vh;
`;

const Fishes = styled.div``;

const RedFishSvg = styled(RedFishImp)`
   position: absolute;
   top: -21vh;
   right: 0;
   z-index: 10;
   width: 120px;
   animation: ${swim} 20s ease-in-out -5s infinite;

   @media screen and (min-width: 768px) {
      animation: ${swim} 44s ease-in-out -20s infinite;
   }

   @media screen and (min-width: 1200px) {
      animation: ${swim} 59s ease-in-out -20s infinite;
   }
`;

const OrangeFishSvg = styled(OrangeFishImp)`
   display: none;

   @media screen and (min-width: 1200px) {
      position: absolute;
      top: calc(40vh - 3vh);
      right: 0;
      width: 140px;
      display: inline-block;
      animation: ${swim} 150s ease-in-out -25s infinite reverse;
   }
`;

const DarkFishSvg = styled(DarkFishImp)`
   position: absolute;
   bottom: 16vh;
   right: 0;
   width: 140px;
   animation: ${swim} 22s ease-in-out -12s infinite;

   @media screen and (min-width: 768px) {
      animation: ${swim} 50s ease-in-out -12s infinite;
   }

   @media screen and (min-width: 1200px) {
      animation: ${swim} 77s ease-in-out -12s infinite;
   }
`;

const TextWrapper = styled.div`
   background-color: ${({ theme }) => theme.white};
   opacity: 0.94;
   border-radius: 40px;
   position: relative;
   z-index: 11;
   background-size: 100% 100%;
   bottom: 15vh;
   padding: 1rem 1.3rem;
   margin: 2em 0.8em 0;
   text-align: center;

   h4 {
      color: ${({ theme }) => theme.red};
      margin: 0.5em 0;

      @media screen and (min-width: 768px) {
         margin: 0;
      }
   }

   p {
      font-weight: 300;
      line-height: 1.6;

      @media screen and (min-width: 768px) {
         font-weight: 400;
         line-height: 1.8;
      }
   }

   @media screen and (min-width: 768px) {
      padding: 3.5em calc(2rem + 3vw) 2.5em;
      margin: 2.5em calc(2em + 4vw) 0;
   }

   @media screen and (min-width: 768px) {
      background-image: url(${textWrapper});
      opacity: 1;
      background-color: initial;
   }

   @media screen and (min-width: 1200px) {
      margin: 4em calc(6em + 7vw) 0;
   }
`;

const InfoButtons = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 60px 60px;
   grid-gap: 5px 0;
   justify-items: center;
   align-items: center;
   margin-bottom: 1em;

   .B1 {
      grid-column: 1/3;
      grid-row: 2;
   }
   .B2 {
      grid-column: 2/3;
      grid-row: 1;
      width: 7.5em;
      height: 3em;

      @media screen and (min-width: 500px) {
         height: 3em;
         width: 9em;
      }
   }
   .B3 {
      grid-column: 1/2;
      grid-row: 1;
      width: 7.5em;
      height: 3em;

      @media screen and (min-width: 500px) {
         height: 3em;
         width: 9em;
      }
   }

   @media screen and (min-width: 768px) {
      display: flex;
      height: 70px;
      justify-content: space-around;
   }

   @media screen and (min-width: 1000px) {
      margin: 0 calc(1.2em + 3vw) 1em;
   }
`;

export default function Info() {
   return (
      <InfoWrapper>
         <Fishes>
            <RedFishSvg />
            <OrangeFishSvg />
            <DarkFishSvg />
         </Fishes>
         <TextWrapper>
            <h4>Great question!</h4>
            <p>
               At may 2019 I decided to temporarily (to be decided) drop out of
               college. The reason? I thought I could do better myself. Now hold
               on.. I don’t mean to sound like a cheesy movie intro, see it more
               like an experiment. The hypothesis is that I’m able to educate
               myself in a more enjoyable and eﬀective way with the same or
               better results, while using the internet as my teacher.
               <br />
               <br />
               At the time of writing I’m a couple months into the experiment
               and let’s just say that the results are pretty promising so far.
               I’m currently working as a freelance web developer/designer
               (explains these cool ﬁshes). While prior to the experiment I had
               little to no experience with either web development nor design.
               <br />
               <br />
               So why should you care? Well.. you shouldn’t. This is mainly for
               myself, but if you happened to be in a similar position or been
               thinking about moving yourself in a similar position, you're able
               to reed my approach, results and failures in a weekly journal and
               various blog posts.
            </p>

            <InfoButtons>
               <Button type="info" to="/about" className="B1">
                  More about me
               </Button>
               <Button type="info" to="/journal" className="B2">
                  Journal
               </Button>
               <Button type="info" to="/blog" className="B3">
                  Blog
               </Button>
            </InfoButtons>
         </TextWrapper>
      </InfoWrapper>
   );
}
