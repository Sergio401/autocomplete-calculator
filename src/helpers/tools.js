import { keywords } from "./data";

export const updateEditorState = (item, editorRef) => {
    const insertText = item + '';
    console.log(item)
    const editor = editorRef;
    const { from, to } = editor.state.selection.main;
    editor.dispatch({
        changes: { from, to, insert: insertText },
        selection: { anchor: from + insertText.length }
    });
    editor.focus();
}

export const getSuggestions = keywords => context => {
    let word = context.matchBefore(/\w*/);
    if (!word || word.from === word.to) return null;
  
    return {
      from: word.from,
      to: word.to,
      options: keywords.map(word => ({
        label: word,
        type: "keyword"
      })),
      validFor: /^\w*$/,
    };
  };