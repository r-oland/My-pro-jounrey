export function flexUnit(amount, min, max, unit = "vw", prop = "font-size") {
   const minBreakpoint = (min / amount) * 100;
   const maxBreakpoint = max ? (max / amount) * 100 : false;
   const dimension = unit === "vw" ? "width" : "height";

   return `
     @media (max-${dimension}: ${minBreakpoint}px) {
       ${prop}: ${min}px;
     }
 
     ${
        max
           ? `
       @media (min-${dimension}: ${maxBreakpoint}px) {
         ${prop}: ${max}px;
       }
     `
           : ""
     }
 
     ${prop}: ${amount}${unit}
   `;
}

export const elevation = [
   "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
   "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
   "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)"
];
