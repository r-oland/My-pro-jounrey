// Components==============
import TriangleImp from "assets/Triangle.inline.svg";
import React, { useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";

// =========================

const FilterWrapper = styled.div`
   margin: 2em auto 5em;
   width: 200px;
   text-align: center;

   @media screen and (min-width: 1000px) {
      margin: 2em 0 5em;
   }
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

   li {
      border: ${({ theme }) => theme.dark} 1px solid;
      background-color: ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.white};
      border-radius: 20px;
      padding: 0.4em;
      margin: 0.3em 0;
      width: 200px;
      cursor: ${({ isExpended }) =>
         isExpended === false ? "default" : "pointer"};
   }
`;

export default function Filter({ sortOrder, setSortOrder }) {
   const [isExpended, setIsExpended] = useState(false);

   function setNewestFirst() {
      if (isExpended === true) {
         setSortOrder("Newest first");
         setIsExpended(false);
      }
   }

   function setOldestFirst() {
      if (isExpended === true) {
         setSortOrder("Oldest first");
         setIsExpended(false);
      }
   }

   function expandMenu() {
      isExpended === false ? setIsExpended(true) : setIsExpended(false);
   }

   return (
      <FilterWrapper>
         <OrderBar onClick={expandMenu}>
            <Order>{sortOrder}</Order>
            <TriangleSvg />
         </OrderBar>
         <OrderList isExpended={isExpended}>
            <li onClick={setNewestFirst}>Newest first</li>
            <li onClick={setOldestFirst}> Oldest first</li>
         </OrderList>
      </FilterWrapper>
   );
}
