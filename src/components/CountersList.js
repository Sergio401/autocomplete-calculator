import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Ensure you're importing from the correct Grid component
import Stack from "@mui/material/Stack";
import { suggestionsList } from "../helpers/data";

export const CountersList = (props) => {
  const { handleCounterClick } = props;
  return (
    <Grid item>
      <Stack>
        {suggestionsList["Counters"].map((counter) => (
          <Grid
            item
            key={counter.id}
            style={{
              marginTop: "16px",
            }}
          >
            <Button
              style={{
                justifyContent: "left",
              }}
              variant="outlined"
              fullWidth
              onClick={() => handleCounterClick(counter.value)}
            >
              {counter.name}
            </Button>
          </Grid>
        ))}
      </Stack>
    </Grid>
  );
};
