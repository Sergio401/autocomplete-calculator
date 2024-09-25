import React from "react";
import { Button } from "@mui/material";


const operatorsListFirstRow = ["+", "-", "*", "/"];
const operatorsListSecondRow = ["(", ")", "=", "^"];

export const Operators = (props) => {

  const { handleOperatorClick } = props;

  return (
    <>  
     <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
         {operatorsListFirstRow.map((operator) => (
           <Button
             key={operator}
             variant="contained"
             onClick={() => handleOperatorClick(operator)}
             style={{
               backgroundColor: "#1976d2",
               color: "white",
               fontWeight: "bold",
               margin: "5px"
             }}
           >
             {operator}
           </Button>
         ))}
       </div>
       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
         {operatorsListSecondRow.map((operator) => (
           <Button
             key={operator}
             variant="contained"
             onClick={() => handleOperatorClick(operator)}
             style={{
               backgroundColor: "#1976d2",
               color: "white",
               fontWeight: "bold",
               margin: "5px"
             }}
           >
             {operator}
           </Button>
         ))}
       </div>
     </div>
    </>
  );
};
