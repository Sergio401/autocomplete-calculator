import React from "react";
import {
    Button
  } from "@mui/material";
import Grid from "@mui/material/Grid2";

const operatorsList = ["+", "-", "*", "/", "(", ")", "=", "^"];

export const Operators = (props) => {

  const { handleOperatorClick } = props;

  return (
    <>
      {operatorsList.map((operator) => (
        <Grid
          item
          size={{ xs: 1, md: 8 }}
          key={operator}
          style={{
            marginTop: "16px",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleOperatorClick(operator)}
            style={{
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {operator}
          </Button>
        </Grid>
      ))}
    </>
  );
};
