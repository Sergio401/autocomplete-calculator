import React, { useState, useRef } from "react";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Operators } from "./Operators";
import { getItem, getSuggestions } from "../helpers/data";
import { CountersList } from "./CountersList";
import {Functions} from "./Functions"
import { SuggestionsTreeView } from "./SuggestionsTreeView";
import EditorFormula from "./EditorFormula";


const AutocompleteCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const editorRef = useRef(null);

  const onSuggestionSelected = (index) => {
    console.log("TO DO")
  };

  const handleCounterOrOperatorClick = (counterOrOperator) => {
    if (editorRef.current) {
      const editor = editorRef.current;
      const { from, to } = editor.state.selection.main;
      const insertText = counterOrOperator + '';
      editor.dispatch({
        changes: { from, to, insert: insertText },
        selection: { anchor: from + insertText.length }
      });
      editor.focus();
    }
  };

  const handleFunctionClick = (event) => {
    setInputValue(inputValue + event.target.value);
  };

  return (
    <Box sx={{ margin: "0 auto", paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <CountersList handleCounterClick={handleCounterOrOperatorClick} />
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
          <EditorFormula 
            value = {inputValue}
            onChange={setInputValue}
            editorRef={editorRef}
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
