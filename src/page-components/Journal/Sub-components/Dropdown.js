// Components==============
import TriangleImp from "assets/Triangle.inline.svg";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../../style/Mixins";

// =========================

const DropDownWrapper = styled.div`
   margin: 1em auto 1.3em;
   width: 200px;
   text-align: center;
   position: absolute;
   top: -5em;
   left: 50%;
   transform: translateX(-50%);
   z-index: 2;

   @media screen and (min-width: 1000px) {
      top: -7.5em;
   }
`;

const OrderBar = styled.div`
   display: grid;
   grid-template-columns: 2fr 0fr;
   align-items: center;
   justify-items: center;
   padding-bottom: 0.75em;
   cursor: pointer;
   border-bottom: ${({ theme }) => theme.dark} solid 2px;
`;

const Order = styled.p`
   margin: 0;
   grid-row: 1;
   grid-column: 1/3;
   ${flexUnit(5, 20, 26, "vw", "font-size")}
   font-weight: 600;
`;

const TriangleSvg = styled(TriangleImp)`
   grid-row: 1;
   grid-column: 2/3;
   /* transform: ${({ isExpended }) =>
      isExpended === false ? "rotate(180deg)" : "rotate(0)"}; */
   transition: 2s;
`;

const OrderList = styled.ul`
   opacity: ${({ isExpended }) => (isExpended === false ? "0" : "1")};
   border-radius: 0px 0px 6px 6px;
   background-color: #545353;
   position: absolute;
   overflow: hidden;
   transition: 0.3s;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   justify-content: center;
   align-items: center;

   li {
      text-align: left;
      padding: 0.6em;
      margin: 0em;
      cursor: ${({ isExpended }) =>
         isExpended === false ? "default" : "pointer"};

      &:hover {
         background: ${({ theme }) => theme.red};
         transition: 0.5s;
      }

      a {
         font-size: 18px;
         color: ${({ theme }) => theme.white};
      }
   }
`;

export default function DropDown({ week }) {
   const [isExpended, setIsExpended] = useState(false);

   function expandMenu() {
      isExpended === false ? setIsExpended(true) : setIsExpended(false);
   }

   const data = useStaticQuery(graphql`
      query JournalAllQuery3 {
         allContentfulJournalPost(sort: { fields: publishDate, order: DESC }) {
            edges {
               node {
                  week
               }
            }
         }
      }
   `).allContentfulJournalPost.edges;

   const weekNumbers = data.map(week => {
      const number = week.node.week;

      return (
         <li>
            <Link to={`/journal/week${number}`}>{number}</Link>
         </li>
      );
   });

   return (
      <DropDownWrapper>
         <OrderBar onClick={expandMenu}>
            <Order>Entry {week}</Order>
            <TriangleSvg />
         </OrderBar>
         <OrderList isExpended={isExpended}>{weekNumbers}</OrderList>
      </DropDownWrapper>
   );
}
