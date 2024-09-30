import React, { useState } from "react";
import AutosuggestInput from "./AutosuggestInput";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Operators } from "./Operators";
import { getItem, getSuggestions } from "../helpers/data";
import { CountersList } from "./CountersList";
import {Functions} from "./Functions"
import { SuggestionsTreeView } from "./SuggestionsTreeView";

const AutocompleteCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    return;
  };

  const onSuggestionSelected = (index) => {
    const item = getItem(index);
    setInputValue((value) => {
      const indexSpace = inputValue.lastIndexOf(" ");
      return item
        ? inputValue.substring(0, indexSpace + 1) + item.value
        : inputValue;
    });
    setSuggestions([]);
  };

  const handleInputChange = (event, { newValue }) => {
    setInputValue(newValue);
  };

  const handleCounterOrOperatorClick = (operator) => {
    setInputValue(inputValue + operator);
  };

  const handleFunctionClick = (event) => {
    setInputValue(inputValue + event.target.value);
  };

  const inputProps = {
    placeholder: "Type something...",
    value: inputValue,
    onChange: handleInputChange,
    style: { width: "100%" }
  };

  return (
    <Box sx={{ margin: "0 auto", paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <CountersList handleCounterClick={handleCounterOrOperatorClick} />
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
          <AutosuggestInput
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={(e, props) => onSuggestionSelected(e, props)}
            inputProps={inputProps}
          />
          </Grid>
          <Grid item xs={12}>
            {suggestions.length > 0 && (
                <SuggestionsTreeView
                  onSuggestionSelected={onSuggestionSelected}
                  suggestions={suggestions}
                />
            )}  
            <div style={{display: "flex", marginTop: "50px"}}>
              <Operators handleOperatorClick={handleCounterOrOperatorClick} />
            </div>
              <Functions handleFunctionClick={handleFunctionClick}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutocompleteCalculator;
