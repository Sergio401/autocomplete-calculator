import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { suggestionsList } from "../helpers/data";
import Grid from "@mui/material/Grid2";

export const Functions = (props) => {
  const { handleFunctionClick } = props;
  return (
    <Grid
      item
      size={{ xs: 12, md: 12 }}
      key={"4654654"}
      style={{
        marginTop: "16px",
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Function"
        onChange={(value) => handleFunctionClick(value)}
      >
        {suggestionsList["Functions"].map((func) => (
          <MenuItem value={func.value}>{func.name}</MenuItem>
        ))}
      </Select>
    </Grid>
  );
};
