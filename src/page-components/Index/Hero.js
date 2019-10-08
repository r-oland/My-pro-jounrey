// Components==============
import BoatImp from "assets/Boat.inline.svg";
import CloudImp from "assets/Cloud.inline.svg";
import Wave1 from "assets/HeroWave.svg";
import Wave2 from "assets/HeroWave2.svg";
import ScrollIndicatiorImp from "assets/ScrollIndicator.inline.svg";
import SunImp from "assets/Sun.inline.svg";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../../global-ui-components/Button";
import { HeroContainer } from "../../global-ui-components/Container";
import { flexUnit } from "../../style/Mixins";
// =========================

// keyframes
const float = keyframes`
   0% {
      left: -30vw;
   }
   100% {
      left: 130vw;
   }
`;

const upNdown = keyframes`
   from {
      transform: translateY(0);
   }
   to {
      transform: translateY(3%);
      transform: rotate(2deg);
   }
`;

const wave = keyframes`
   0% {
      background-position: 0px 0px;
   }
   50% {
      background-position: 100px 10px;
   }
   100% {
      background-position: 0px 0px;
   }
`;

const upNdown2 = keyframes`
   from {
      transform: translateY(0);
   }
   to {
      transform: translateY(-30%);
   }
`;

//

const HeroWrapper = styled.div`
   position: relative;
   background-color: ${({ theme }) => theme.green};
`;

const CloudSvg = styled(CloudImp)`
   position: absolute;
   width: calc(4em + 8vw);
   top: 12vh;
   animation: ${float} 140s ease-in-out -30s infinite;
   z-index: 1;

   @media screen and (min-width: 500px) {
      top: 0;
   }
`;

const CloudSvg2 = styled(CloudImp)`
   position: absolute;
   width: calc(4em + 8vw);
   top: 35vh;
   animation: ${float} 140s ease-in-out -60s infinite;
   z-index: 1;
`;

const SunSvg = styled(SunImp)`
   position: absolute;
   width: calc(200px + 20vw);
   bottom: 24vh;
   left: -10vw;

   @media screen and (min-width: 768px) {
      width: 500px;
      bottom: 17vh;
   }

   @media screen and (min-width: 1000px) {
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 0vh;
   }
`;

const BoatSvg = styled(BoatImp)`
   z-index: 4;
   position: absolute;
   bottom: 30vh;
   left: -60px;
   width: calc(14.5rem + 17vw);
   animation-name: ${upNdown};
   animation-duration: 4s;
   animation-iteration-count: infinite;
   animation-direction: alternate;

   @media screen and (min-width: 1000px) {
      bottom: 25vh;
      width: 25vw;
      left: 50%;
      transform: translate(-50%, 0);
      min-width: 340px;
   }

   @media screen and (min-aspect-ratio: 8/7) and (max-width: 1000px) {
      width: calc(13rem + 16vw);
   }
`;

const HeroWave = styled.div`
   background-image: url(${Wave1});
   background-repeat: repeat-x;
   background-size: 100% 100%;
   z-index: 6;
   position: absolute;
   bottom: 0;
   width: 2000px;
   height: 42vh;
   animation-name: ${wave};
   animation-duration: 10s;
   animation-timing-function: ease-in-out;
   animation-iteration-count: infinite;

   @media screen and (min-width: 1000px) {
      height: 37.5vh;
   }
`;

const HeroWave2 = styled.div`
   background-image: url(${Wave2});
   background-repeat: repeat-x;
   background-size: 100% 100%;
   z-index: 3;
   position: absolute;
   bottom: 3%;
   width: 2000px;
   height: 40vh;
   animation-name: ${wave};
   animation-delay: -12s;
   animation-duration: 10s;
   animation-timing-function: ease-in-out;
   animation-iteration-count: infinite;

   @media screen and (min-width: 1000px) {
      height: 35.5vh;
   }
`;

const WelcomText = styled.h3`
   text-align: right;
   padding-top: 0.5rem;
   margin-top: 0;
   font-size: 29px;

   @media screen and (min-width: 500px) {
      margin-left: 25vw;
      ${flexUnit(4, 30, 45, "vw", "font-size")}
      padding-top: 4rem;
   }

   @media screen and (min-width: 700px) {
      margin-left: 30vw;
   }

   @media screen and (min-width: 1000px) {
      text-align: left;
      margin: 0 40vw 0 0;
      position: relative;
      top: 10vh;
   }
`;

const HeroButtons = styled.div`
   display: flex;
   align-items: flex-end;
   flex-direction: column;
`;

const ScrollSection = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   bottom: 8vh;
   left: 50%;
   transform: translate(-50%, 0);

   @media screen and (min-width: 1000px) {
      bottom: 3vh;
   }

   @media screen and (min-aspect-ratio: 17/9) and (max-width: 1000px) {
      display: none;
   }
`;

const WIT = styled.h3`
   ${flexUnit(4, 28, 34, "vw", "font-size")}
   font-weight: 500;
   margin-bottom: 0.7em;

   @media screen and (min-width: 768px) {
      font-weight: 600;
   }
`;

const ScrollIndicatiorSvg = styled(ScrollIndicatiorImp)`
   width: 2.3em;

   #outer {
      position: relative;
   }

   #inner {
      position: absolute;
      animation-name: ${upNdown2};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
   }
`;

export default function Hero() {
   return (
      <HeroWrapper>
         <CloudSvg />
         <CloudSvg2 />
         <SunSvg />
         <BoatSvg />
         <div>
            <HeroWave />
            <HeroWave2 />
         </div>
         <HeroContainer>
            <WelcomText>Ahoi! where would you like to travel to?</WelcomText>
            <HeroButtons>
               <Button type="hero" to="/journal">
                  My journey
               </Button>
               <Button type="hero2" to="/blog">
                  My blog
               </Button>
            </HeroButtons>
            <ScrollSection>
               <WIT>uhmm.. what is this?</WIT>
               <ScrollIndicatiorSvg />
            </ScrollSection>
         </HeroContainer>
      </HeroWrapper>
   );
}
