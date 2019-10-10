// Components==============
import React from "react";
import styled from "styled-components";
import { Button } from "../../global-ui-components/Button";
// =========================

const DescriptionWrapper = styled.div`
   text-align: center;
`;

const JournalCardSmall = styled.div`
   width: 90%;
   margin: 0 auto;

   @media screen and (min-width: 768px) {
      width: 80%;
   }

   @media screen and (min-width: 1000px) {
      border-radius: 20px;
      position: relative;
      margin-top: 1em;
      padding: 1em 2em;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);

      width: 50%;
   }
`;

const SubjectTitle = styled.strong``;

const Subjects = styled.p``;

const ShortDescription = styled.p``;

const JournalButton = styled(Button)`
   margin: 0 auto;
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
