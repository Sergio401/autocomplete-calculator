import { RangeSetBuilder } from '@codemirror/state';
import { Decoration, ViewPlugin } from '@codemirror/view';


export const wrongWordsDecorator = isValidWord => {
    return ViewPlugin.fromClass(
        class {
            constructor(view) {
                this.decorations = this.createDecorations(view);
            }
    
            createDecorations(view) {
                const builder = new RangeSetBuilder();
                const regex = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g;
            
                for (let { from, to } of view.visibleRanges) {
                    let text = view.state.doc.sliceString(from, to);
                    let match;
                    
                    while ((match = regex.exec(text)) !== null) {
                        const word = match[0];
                        const start = from + match.index;
                        const end = start + word.length;
            
                        if (!isValidWord(word)) {
                            builder.add(start, end, Decoration.mark({
                                class: 'error-word'
                            }));
                        }
                    }
                }
                return builder.finish();
            }
    
            update(update) {
                if (update.docChanged || update.viewportChanged) {
                    this.decorations = this.createDecorations(update.view);
                }
            }
        }, {
        decorations: v => v.decorations
    })
};