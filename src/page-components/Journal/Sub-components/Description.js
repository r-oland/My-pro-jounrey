// Components==============
import React from "react";
import styled from "styled-components";
import { Button } from "../../../global-ui-components/Button";
// =========================

const DescriptionWrapper = styled.div`
   height: 85%;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`;

const JournalCardSmall = styled.div`
   width: 90%;
   margin: 0 auto;

   @media screen and (min-width: 768px) {
      width: 80%;
   }

   @media screen and (min-width: 1000px) {
      border-radius: 10px;
      position: relative;
      margin-top: 1em;
      width: 60%;
   }
`;

const SubjectTitle = styled.strong``;

const Subjects = styled.p``;

const ShortDescription = styled.p``;

const JournalButton = styled(Button)`
   margin: 0 auto;

   &:hover {
      background-color: ${({ theme }) => theme.dark};
      transition: 0.5s;
   }
`;

export default function Description({ keywords, shortDescription, slug }) {
   return (
      <DescriptionWrapper>
         <JournalCardSmall>
            <SubjectTitle>This weeks subjects</SubjectTitle>
            <Subjects>{keywords}</Subjects>
         </JournalCardSmall>
         <ShortDescription>{shortDescription}</ShortDescription>
         <JournalButton to={`/journal/${slug}`}>Visit entry</JournalButton>
      </DescriptionWrapper>
   );
}
