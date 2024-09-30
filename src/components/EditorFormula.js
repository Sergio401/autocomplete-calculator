import React from "react";
import CodeMirror from "@uiw/react-codemirror";

const EditorFormula = ({ value, onChange, editorRef }) => {
  
  const handleChange = (value, viewUpdate) => {
    onChange(value);
    if (editorRef) {
      editorRef.current = viewUpdate.view;
    }
  };

  return (
    <CodeMirror
      height="500px"
      width="500px"
      placeholder="Type your formula here"
      value={value}
      onChange={handleChange}
    />
  );
};

export default EditorFormula;