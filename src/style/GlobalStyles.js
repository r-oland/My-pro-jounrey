// Components==============
import { createGlobalStyle } from "styled-components";
import { flexUnit } from "./Mixins";
// =========================

const GlobalStyles = createGlobalStyle`

   /* =========================================*/
   /* Global style ============================*/
   /* =========================================*/
   body {
      color: ${({ theme }) => theme.dark};
   }

   /* =========================================*/
   /* Font ====================================*/
   /* =========================================*/

   html {
      font-family: raleway;
   }

   h1 {
      ${flexUnit(3, 32, 40, "vw", "font-size")}
   }

   h2 {
      ${flexUnit(3, 22, 27.5, "vw", "font-size")}
   }

   h3 {
      ${flexUnit(3, 22, 26, "vw", "font-size")}
   }

   h4 {
      ${flexUnit(3, 22, 24, "vw", "font-size")}
   }

   h5 {
      ${flexUnit(3, 20, 22, "vw", "font-size")}
   }

   h6 {
      ${flexUnit(3, 18, 20, "vw", "font-size")}
   }

   p,
   a,
   strong,
   span {
      ${flexUnit(4, 16, 20, "vw", "font-size")}
   }

   /* =========================================*/
   /* Reset ===================================*/
   /* =========================================*/

   *,
   ::before,
   ::after {
      box-sizing: border-box;
   }

   body {
      margin: 0;
   }

   p,
   ul,
   ol,
   dl,
   address {
      line-height: 1.2;
      padding: 0;
   }

   pre {
      white-space: pre-wrap;
   }

   hr {
      border: 0.5px solid;
   }

   ul {
      list-style: none;
   }

   ol {
      padding-left: 1em;
   }

   a {
      color: black;
      text-decoration: none;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      display: block;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      vertical-align: middle;
   }

   img,
   video {
      max-width: 100%;
      height: auto;
   }

   img {
      border-style: none;
   }
   `;

export default GlobalStyles;
