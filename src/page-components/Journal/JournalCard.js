// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const JournalCardWrapper = styled.div`
   width: 90%;
   @media screen and (min-width: 1000px) {
      border-radius: 20px;
      position: relative;
      margin-top: 3em;
      padding: 1em 2em;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   }
`;

export default function JournalCard({ children }) {
   return <JournalCardWrapper>{children}</JournalCardWrapper>;
}
