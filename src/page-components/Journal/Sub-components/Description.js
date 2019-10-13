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
   font-weight: 500;
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
   line-height: 1.4;
   ${flexUnit(4, 16, 19, "vw", "font-size")}

   @media screen and (min-width: 1000px) {
      line-height: 2;
   }
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

export default function Description({ keywords, shortDescription, slug }) {
   return (
      <DescriptionWrapper>
         <JournalCardSmall>
            <SubjectTitle>Subjects</SubjectTitle>

            <Subjects>{keywords}</Subjects>
            <Bar />
         </JournalCardSmall>
         <ShortDescription>{shortDescription}</ShortDescription>
         <JournalButton to={`/journal/${slug}`}>Journal entry</JournalButton>
      </DescriptionWrapper>
   );
}
