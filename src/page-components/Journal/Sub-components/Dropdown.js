// Components==============
import TriangleImp from "assets/Triangle.inline.svg";
import React, { useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";

// =========================

const DropDownWrapper = styled.div`
   margin: 1em auto 2em;
   width: 70%;
   text-align: center;
   position: relative;
   z-index: 2;
`;

const OrderBar = styled.div`
   display: grid;
   grid-template-columns: 2fr 0fr;
   align-items: center;
   justify-items: center;
   padding-bottom: 0.75em;
   cursor: pointer;
   border-bottom: ${({ theme }) => theme.dark} solid 1.5px;
`;

const Order = styled.p`
   margin: 0;
   grid-row: 1;
   grid-column: 1/3;
   ${flexUnit(5, 18, 20, "vw", "font-size")}
   font-weight: 300;
`;

const TriangleSvg = styled(TriangleImp)`
   grid-row: 1;
   grid-column: 2/3;
`;

const OrderList = styled.ul`
   opacity: ${({ isExpended }) => (isExpended === false ? "0" : "1")};
   position: absolute;
   margin: 0;
   transition: 0.3s;
   width: 100%;

   li {
      border: ${({ theme }) => theme.dark} 1px solid;
      background-color: ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.white};
      border-radius: 20px;
      padding: 0.4em;
      margin: 0.3em 0;
      cursor: ${({ isExpended }) =>
         isExpended === false ? "default" : "pointer"};
   }
`;

export default function DropDown({ week }) {
   const [isExpended, setIsExpended] = useState(false);

   function expandMenu() {
      isExpended === false ? setIsExpended(true) : setIsExpended(false);
   }

   return (
      <DropDownWrapper>
         <OrderBar onClick={expandMenu}>
            <Order>week {week}</Order>
            <TriangleSvg />
         </OrderBar>
         <OrderList isExpended={isExpended}>
            <li>week 40</li>
            <li> week 41</li>
         </OrderList>
      </DropDownWrapper>
   );
}
