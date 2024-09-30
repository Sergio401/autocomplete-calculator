import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { suggestionsList } from "../helpers/data";
import Grid from "@mui/material/Grid2";

export const Functions = props => {
  const { handleFunctionClick } = props;

  const selectedAnOption = event => {
    handleFunctionClick(event.target.value)
  }

  return (
    <Grid
      item
      size={{ xs: 12, md: 12 }}
      style={{
        marginTop: "16px",
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Function"
        onChange={selectedAnOption}
      >
        {suggestionsList["Functions"].map((functionItem) => (
          <MenuItem key={functionItem.id} value={functionItem.value}>{functionItem.name}</MenuItem>
        ))}
      </Select>
    </Grid>
  );
};
