import React from "react";
import Autosuggest from "react-autosuggest";
import {
  TextField,
  ListItemButton,
  Container,
} from "@mui/material";

const AutosuggestInput = ({
  suggestions,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  onSuggestionSelected,
  inputProps,
}) => {
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion.name}
      focusInputOnSuggestionClick={true}
      renderSuggestion={(suggestion) => (
        <ListItemButton>
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
      renderSuggestionsContainer={({ containerProps, children }) => (
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
  );
};

export default AutosuggestInput;
