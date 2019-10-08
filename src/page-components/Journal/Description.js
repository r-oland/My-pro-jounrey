// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const DescriptionWrapper = styled.div`
   text-align: center;
`;

const Subjects = styled.p``;

export default function Description() {
   return (
      <DescriptionWrapper>
         <Subjects>This weeks subjects</Subjects>
      </DescriptionWrapper>
   );
}
