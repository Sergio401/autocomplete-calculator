import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";

const EditorFormula = ({ value, onChange, editorRef }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  const referenceInitialization = useCallback((view) => {
    if (editorRef) {
      editorRef.current = view;
    }
  }, [editorRef]);

  return (
    <CodeMirror
      height="500px"
      width="500px"
      placeholder="Type your formula here"
      value={value}
      onChange={handleChange}
      onCreateEditor={referenceInitialization}
    />
  );
};

export default EditorFormula;