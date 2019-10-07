// Components==============
import Arrow from "assets/Arrow.inline.svg";
import Contact from "assets/Contact.inline.svg";
import Shark from "assets/Shark.inline.svg";
import React, { useState } from "react";
import styled from "styled-components";
import { HyperButton } from "../../../global-ui-components/Button";
import { flexUnit } from "../../../style/Mixins";
// =========================

const QuestionSectionWrapper = styled.div`
   @media screen and (min-width: 1200px) {
      display: flex;
      text-align: left;
      align-items: center;
      justify-content: space-between;
   }
`;

const QuestionSubSection = styled.div`
   @media screen and (min-width: 1200px) {
      display: flex;
      flex-direction: column;
   }

   @media screen and (min-width: 1350px) {
      margin-right: calc(2em + 10vw);
   }

   @media screen and (min-width: 1600px) {
      margin-right: calc(8em + 12vw);
   }
`;

const IYH = styled.p`
   ${flexUnit(4, 28, 36, "vw", "font-size")}
   font-weight: 600;
   margin: 0;
`;

const ReasonsToMail = styled.ul`
   ${flexUnit(4, 21, 26, "vw", "font-size")}
   font-weight: 400;
   margin-bottom: 1.6em;

   @media screen and (min-width: 1200px) {
      margin-bottom: 0.5em;
   }

   li {
      margin: 0.5em 0;
   }
`;

const DRO = styled.p`
   ${flexUnit(2, 20, 28, "vw", "font-size")}
   font-weight: 500;
   margin: 0;
`;

const IWB = styled.p`
   margin: 0.1em 0 0;
`;

const ArrowStyle = styled(Arrow)`
   display: none;

   @media screen and (min-width: 1200px) {
      display: block;
      width: 12em;
   }
`;

const ContactSection = styled.div`
   display: flex;
`;

const ContactStyle = styled(Contact)`
   width: 24px;
`;

const SharkStyle = styled(Shark)`
   height: 5em;
   right: 0;
   position: absolute;
   transform: ${({ sharkisout }) =>
      sharkisout === "true" ? `translate(200px)` : `translate(40px) `};
   transition: 1s;
`;

export default function QuestionSection() {
   const [sharkIsOut, setSharkIsOut] = useState(true);

   function handleShark() {
      sharkIsOut === true ? setSharkIsOut(false) : setSharkIsOut(true);
   }

   return (
      <QuestionSectionWrapper>
         <QuestionSubSection>
            <IYH>IF YOU HAVE</IYH>
            <ReasonsToMail>
               <li>QUESTIONS</li>
               <li>ADVICE</li>
               <li>THOUGHTS WORTH SHARING</li>
            </ReasonsToMail>
         </QuestionSubSection>
         <div>
            <DRO>Do reach out!</DRO>
            <IWB>I won't bite, I promise</IWB>
         </div>
         <ArrowStyle />
         <ContactSection>
            <HyperButton
               href="mailto:roland.branten@gmail.com"
               onMouseEnter={handleShark}
               onMouseLeave={handleShark}
            >
               Contact
               <ContactStyle />
            </HyperButton>
            <SharkStyle sharkisout={JSON.stringify(sharkIsOut)} />
         </ContactSection>
      </QuestionSectionWrapper>
   );
}
