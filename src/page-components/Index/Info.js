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
   bottom: -20vh;
   padding-bottom: 20vh;
`;

const Fishes = styled.div``;

const RedFishSvg = styled(RedFishImp)`
   position: absolute;
   top: -26vh;
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
   bottom: 25vh;
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
   background-image: url(${textWrapper});
   position: relative;
   z-index: 11;
   background-size: 100% 100%;
   bottom: 20vh;
   padding: 1rem 1.8rem;
   margin: 2em 1.3em 0;

   h4 {
      color: ${({ theme }) => theme.red};
   }

   p {
      font-weight: 300;
      line-height: 1.6;

      @media screen and (min-width: 768px) {
         font-weight: 400;
      }
   }

   @media screen and (min-width: 500px) {
      padding: 1rem calc(2rem + 3vw);
      margin: 2.5em calc(2em + 4vw) 0;
   }

   @media screen and (min-width: 1200px) {
      padding: 1rem calc(2rem + 7vw);
      margin: 4em calc(6em + 7vw) 0;
   }
`;

const InfoButtons = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   height: 200px;
   margin-bottom: 3em;

   @media screen and (min-width: 768px) {
      flex-direction: inherit;
      height: 70px;
   }

   @media screen and (min-width: 1000px) {
      margin: 0 calc(1.2em + 3vw) 3em;
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
               <Button type="info" to="/about">
                  More about me
               </Button>
               <Button type="info" to="/">
                  Journal
               </Button>
               <Button type="info" to="/blog">
                  Blog
               </Button>
            </InfoButtons>
         </TextWrapper>
      </InfoWrapper>
   );
}
