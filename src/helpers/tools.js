
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