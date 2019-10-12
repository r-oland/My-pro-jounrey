// Components==============
import MenuImp from "assets/Menu.inline.svg";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";
// =========================

const HamburgerWrapper = styled.div`
   display: ${prop => prop.pageStyle === "home" && "none"};

   @media screen and (min-width: 800px) {
      display: none;
   }

   .currentPage {
      color: ${({ theme }) => theme.red};
   }
`;

const MenuSvg = styled(MenuImp)`
   ${flexUnit(6, 30, 33, "vw", "width")}
   cursor: pointer;
   z-index: 50;
   position: fixed;
   top: 10px;
   right: 5vw;
   transform: ${({ menustate }) =>
      menustate === "open" ? "rotate(0)" : "rotate(180deg)"};
   transition: 0.5s;
`;

const Menu = styled.div`
   background-color: ${({ theme }) => theme.white};
   z-index: 30;
   position: fixed;
   left: 0;
   top: ${({ menuState }) => (menuState === "closed" ? "-100vh" : "0vh")};
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   transition: 0.8s;

   li {
      padding: 2em 0;
   }

   a {
      ${flexUnit(6, 25, 32, "vw", "font-size")}
      &:hover {
         color: ${({ theme }) => theme.red};
         transition: 0.5s;
      }
   }
`;

export default function Hamburger({ pageStyle }) {
   const [menuState, setMenuState] = useState("closed");

   useEffect(() => {
      window.addEventListener("hashchange", setMenuState("closed"));
   }, []);

   function changeMenu() {
      menuState === "closed" ? setMenuState("open") : setMenuState("closed");
   }

   return (
      <HamburgerWrapper pageStyle={pageStyle}>
         <div onClick={changeMenu}>
            <MenuSvg menustate={menuState} />
         </div>
         <Menu menuState={menuState}>
            <ul>
               <li>
                  <Link to="/journal" activeClassName="currentPage">
                     Journal
                  </Link>
               </li>
               <li>
                  <Link to="/blog" activeClassName="currentPage">
                     Blog
                  </Link>
               </li>
               <li>
                  <Link to="/about" activeClassName="currentPage">
                     About
                  </Link>
               </li>
            </ul>
         </Menu>
      </HamburgerWrapper>
   );
}
