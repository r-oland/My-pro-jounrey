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
`;

const ShortDescription = styled.p`
   line-height: 1.5;
   ${flexUnit(4, 16, 19, "vw", "font-size")}

   @media screen and (min-width: 1000px) {
      line-height: 1.7;
   }
`;

const Entry = styled.p`
   ${flexUnit(2.5, 22, 26, "vw", "font-size")}
   font-weight: 600;
   margin: 0 0 1.5em;
`;

const JournalButton = styled(Button)`
   margin: 0 auto;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   bottom: 30px;

   @media screen and (min-width: 1000px) {
      position: initial;
      transform: translateX(0);
   }

   &:hover {
      background-color: ${({ theme }) => theme.dark};
      transition: 0.5s;
   }
`;

export default function Description({
   subjects,
   shortDescription,
   slug,
   entry
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
         <JournalButton to={`/journal/${slug}`}>Journal entry</JournalButton>
      </DescriptionWrapper>
   );
}
