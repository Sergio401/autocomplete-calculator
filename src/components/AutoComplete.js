import React, { useState, useRef, useEffect } from "react";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Operators } from "./Operators";
import { getItem, getSuggestions } from "../helpers/data";
import { CountersList } from "./CountersList";
import {Functions} from "./Functions"
import { SuggestionsTreeView } from "./SuggestionsTreeView";
import EditorFormula from "./EditorFormula";
import { updateEditorState } from "../helpers/tools";


const AutocompleteCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const editorRef = useRef(null);

  const selectedAClickableItem = item => {
    updateEditorState(item, editorRef.current);
  };
  
  const onSuggestionSelected = (index) => {
    console.log("TO DO")
  };

  return (
    <Box sx={{ margin: "0 auto", paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <CountersList handleCounterClick={selectedAClickableItem} />
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
            <div style={{display: "flex", marginTop: "50px", gap: "50px"}}>
              <Operators handleOperatorClick={selectedAClickableItem} />
              <Functions handleFunctionClick={selectedAClickableItem}/>
            </div>
              
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutocompleteCalculator;
