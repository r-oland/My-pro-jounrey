// Components==============
import ImportWave from "assets/wave.inline.svg";
import React from "react";
import styled from "styled-components";
// =========================

const WaveWrapper = styled.svg`
   position: relative;
   top: 8px;
   width: 100vw;
   height: 6em;
`;

export default function Wave() {
   return (
      <WaveWrapper>
         <ImportWave />
      </WaveWrapper>
   );
}
