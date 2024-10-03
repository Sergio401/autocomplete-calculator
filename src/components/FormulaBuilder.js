import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Operators } from "./Operators";
import { keywords } from "../helpers/data";
import { CountersList } from "./CountersList";
import { Functions } from "./Functions"
import EditorFormula from "./EditorFormula";
import { updateEditorState, getSuggestions } from "../helpers/tools";
import { wrongWordsDecorator } from "../helpers/decoratorPlugin";
import { autocompletion } from "@codemirror/autocomplete";
import { EditorView } from "@codemirror/view";

const FormulaBuilder = () => {
  const [inputValue, setInputValue] = useState("");
  const [extensions, setExtensions] = useState([]);
  const editorRef = useRef(null);

  const isValidWord = word => keywords.includes(word);

  const isCorrectFormula = inputValue => {
    const formula = inputValue.split(" ");
    const allValidWords = formula.every(word => isValidWord(word));
    return allValidWords;
  }

  const selectedAClickableItem = item => {
    updateEditorState(item, editorRef.current);
  };
  
  useEffect(() => {
    const theme = EditorView.theme({
      '.error-word': {
        textDecoration: 'wavy underline red',
      }
    });

    setExtensions(
      [
        wrongWordsDecorator(isValidWord),
        autocompletion({
          override: [getSuggestions(keywords)]
        }),
        theme
      ]);
  }, []);


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
            extensions={extensions}
          />
          {isCorrectFormula(inputValue) 
            ? <p style={{color: "green"}}>The formula is correct</p> 
            : <p style={{color: "red"}}>The formula is incorrect</p>}
          </Grid>
          <Grid item xs={12}>
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

export default FormulaBuilder;
