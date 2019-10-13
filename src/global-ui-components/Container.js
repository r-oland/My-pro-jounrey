// Components==============
import styled from "styled-components";
// =========================

export const Container = styled.div`
   margin: 0 auto;
   max-width: 90%;

   @media screen and (min-width: 768px) {
      margin: 0 auto;
      max-width: 85%;
   }

   @media screen and (min-width: 1200px) {
      margin: 0 auto;
      max-width: 80%;
   }
`;

export const HeroContainer = styled(Container)`
   z-index: 10;
   position: relative;
   color: ${({ theme }) => theme.white};
   height: 90vh;
   text-align: center;

   @media screen and (min-aspect-ratio: 17/9) and (max-width: 1000px) {
      height: 180vh;
   }
`;

export const NavContainer = styled(Container)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100%;
`;
