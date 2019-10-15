// Components==============
import React from "react";
import styled from "styled-components";
import { Button } from "../../../global-ui-components/Button";
import { flexUnit } from "../../../style/Mixins";
// =========================

const DescriptionWrapper = styled.div`
   height: 100%;
   text-align: center;
`;

const JournalCardSmall = styled.div`
   width: 90%;
   margin: 0 auto;

   @media screen and (min-width: 768px) {
      width: 80%;
   }

   @media screen and (min-width: 1000px) {
      width: 60%;
   }
`;

const SubjectTitle = styled.strong`
   font-weight: 400;
   ${flexUnit(6, 15, 20, "vw", "font-size")}
   display: none;

   @media screen and (min-width: 1000px) {
      display: block;
   }
`;

const Bar = styled.div`
   border-bottom: 1px solid ${({ theme }) => theme.dark};
   margin: 1.6em auto;
   width: 40px;
`;

const Subjects = styled.h2`
   ${flexUnit(6, 14, 17, "vw", "font-size")}
   margin: 0.3em 0 1em;
   font-weight: 300;
   display: none;

   @media screen and (min-width: 1000px) {
      display: block;
   }
`;

const ShortDescription = styled.p`
   line-height: 1.4;
   ${flexUnit(4, 16, 19, "vw", "font-size")}

   @media screen and (min-width: 1000px) {
      line-height: 1.7;
   }
`;

const Entry = styled.p`
   ${flexUnit(2.5, 22, 26, "vw", "font-size")}
   font-weight: 600;
   margin: 0 0 0.75em;
   display: none;

   @media screen and (min-width: 300px) {
      display: block;
   }
`;

const JournalButton = styled(Button)`
   margin: 0 auto;

   @media screen and (min-width: 1000px) {
      position: initial;
      transform: translateX(0);
   }

   &:hover {
      background-color: ${({ theme }) => theme.dark};
      transition: 0.5s;
   }
`;

const NerdWarning = styled.div`
   display: ${({ nerdContent }) => (nerdContent === true ? "block" : "none")};
   border: ${({ theme }) => theme.red} 3px solid;
   border-radius: 25px;
   padding: 0.4em 0.5em 0;
   max-width: 500px;
   margin: 0 auto 1em;

   b {
      color: ${({ theme }) => theme.red};
      margin: 1em;
   }

   p {
      ${flexUnit(2.5, 14, 15, "vw", "font-size")}
      margin: 0.5em 0 0.4em;
   }
`;

export default function Description({
   subjects,
   shortDescription,
   slug,
   entry,
   nerdContent
}) {
   return (
      <DescriptionWrapper>
         <JournalCardSmall>
            <Entry>Entry {entry}</Entry>
            <SubjectTitle>Subjects</SubjectTitle>

            <Subjects>{subjects}</Subjects>
            <Bar />
         </JournalCardSmall>
         <ShortDescription>{shortDescription}</ShortDescription>
         <NerdWarning nerdContent={nerdContent}>
            {" "}
            <b>Nerd warning</b>{" "}
            <p>
               This post may contain a high amount of coding related subjects.
            </p>{" "}
         </NerdWarning>
         <JournalButton to={`/journal/${slug}`}>Journal entry</JournalButton>
      </DescriptionWrapper>
   );
}
