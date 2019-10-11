import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { flexUnit } from "../style/Mixins";

export const Button = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 9em;
   height: 3em;
   border-radius: 100px;
   padding: 0.8em 1em;
   cursor: pointer;
   font-weight: bold;
   ${flexUnit(2, 16, 18, "vw", "font-size")}
   background-color: ${({ theme }) => theme.red};
   color: ${({ theme }) => theme.white};

   /* variations */
   ${({ type }) =>
      type === "hero2" &&
      css`
         background-color: ${({ theme }) => theme.white};
         color: ${({ theme }) => theme.dark};

         margin-bottom: 1em;
         width: 9em;
         height: 3em;

         &:hover {
            background-color: ${({ theme }) => theme.dark};
            color: ${({ theme }) => theme.white};
            transition: 0.5s;
         }
      `}

   ${({ type }) =>
      type === "hero" &&
      css`
         margin-bottom: 1em;
         width: 9em;
         height: 3em;

         &:hover {
            background-color: ${({ theme }) => theme.dark};
            color: ${({ theme }) => theme.white};
            transition: 0.5s;
         }
      `}

      ${({ type }) =>
         type === "info" &&
         css`
            background-color: inherit;
            border: ${({ theme }) => theme.dark} solid 1.6px;
            color: ${({ theme }) => theme.dark};
            text-align: center;
            padding: 0;
            font-size: 1rem;

            &:hover {
               background-color: ${({ theme }) => theme.dark};
               color: ${({ theme }) => theme.white};
               border: none;
               transition: 0.5s;
            }
         `}
`;

export const HyperButton = styled.a`
   display: flex;
   align-items: center;
   width: 9em;
   height: 3em;
   border-radius: 100px;
   padding: 0.8em 1em;
   cursor: pointer;
   font-weight: bold;
   ${flexUnit(2, 16, 18, "vw", "font-size")}
   background-color: ${({ theme }) => theme.red};
   color: ${({ theme }) => theme.white};
   margin: 1.5em auto;
   justify-content: space-between;
`;
