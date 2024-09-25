import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { suggestionsList } from "../helpers/data";

export const CountersList = (props) => {
  const { handleCounterClick } = props;
  return (
    <Grid item>
      <Stack container >
        {suggestionsList["Counters"].map((counter) => (
          <Grid
            key={counter.id}
            style={{
              marginTop: "16px",
            }}
          >
            <Button
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
