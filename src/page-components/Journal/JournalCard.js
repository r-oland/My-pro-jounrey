// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const JournalCardWrapper = styled.div``;

export default function JournalCard({ children }) {
   return <JournalCardWrapper>{children}</JournalCardWrapper>;
}
