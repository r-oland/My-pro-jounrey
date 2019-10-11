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
      ${flexUnit(4, 36, 65, "vw", "font-size")}
   }

   h2 {
      ${flexUnit(4, 32, 55, "vw", "font-size")}
   }

   h3 {
      ${flexUnit(4, 30, 45, "vw", "font-size")}
   }

   h4 {
      ${flexUnit(4, 27.5, 40, "vw", "font-size")}
   }

   h5 {
      ${flexUnit(4, 24, 35, "vw", "font-size")}
   }

   h6 {
      ${flexUnit(4, 22, 30, "vw", "font-size")}
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
