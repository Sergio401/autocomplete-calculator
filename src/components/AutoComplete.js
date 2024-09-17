import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import {
  TextField,
  Box,
  ListItemButton,
  Container,
} from "@mui/material";
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
    style: { width: "100%" }, // Estilo adicional para margen
  };

  return (
    <Box sx={{ width: "500px", margin: "0 auto", paddingTop: "20px" }}>
      <Autosuggest
        suggestions={[]}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={(e, props) => onSuggestionSelected(e, props)}
        getSuggestionValue={(suggestion) => suggestion.name}
        focusInputOnSuggestionClick={true}
        renderSuggestion={(suggestion) => (
          <ListItemButton
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {suggestion.name}
          </ListItemButton>
        )}
        inputProps={inputProps}
        renderInputComponent={(inputProps) => (
          <TextField
            {...inputProps}
            variant="outlined"
            fullWidth
            multiline
            size="medium"
          />
        )}
        renderSuggestionsContainer={({ containerProps, children, query }) => (
          <Container
            maxWidth="sm"
            {...containerProps}
            style={{
              marginBottom: "8px",
            }}
          >
            {children}
          </Container>
        )}
      />

      {suggestions.length > 0 && (
        <SuggestionsTreeView
          onSuggestionSelected={onSuggestionSelected}
          suggestions={suggestions}
        />
      )}

      <Grid container spacing={2}>
        <Grid item size={{ xs: 8, md: 8 }}>
          <Grid container spacing={2}>
            <Operators handleOperatorClick={handleCounterOrOperatorClick} />
            <Functions handleFunctionClick={handleFunctionClick}/>
          </Grid>
        </Grid>
        <CountersList handleCounterClick={handleCounterOrOperatorClick} />
      </Grid>
    </Box>
  );
};

export default AutocompleteCalculator;
