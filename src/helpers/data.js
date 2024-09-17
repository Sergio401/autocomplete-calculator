// Lista de sugerencias
export const suggestionsList = {
    Functions: [
      { id: 31, name: "if", value: "if ( " },
      { id: 21, name: "else", value: "else { " },
      { id: 33, name: "min", value: "min ( " },
      { id: 4, name: "max", value: "max ( " },
      { id: 5, name: "sqrt", value: "sqrt( " },
    ],
    Constants: [
      { id: 6, name: "pi", value: "pi( " },
      { id: 7, name: "e", value: "e( " },
    ],
    Counters: [
      { id: 8, name: "counteri", value: "counteri " },
      { id: 9, name: "nuevoCounter", value: "nuevoCounter " },
      { id: 10, name: "test counter", value: "testcounter " },
      { id: 11, name: "property Counter", value: "propertyCounter " },
    ],
  };
  
  export const getItem = (index) => {
    let item = null;
    Object.keys(suggestionsList).forEach((category) => {
      const matchedItem = suggestionsList[category].find(
        (item) => item.id == index
      );
      if (matchedItem) {
        item = matchedItem;
      }
    });
  
    return item;
  };

  export const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputArray = inputValue.split(" ");
    const lastWord = inputArray[inputArray.length - 1];
    const suggestions = [];
  
    // Recorrer cada categoría y añadir coincidencias
    Object.keys(suggestionsList).forEach((category) => {
      const matchedItems = suggestionsList[category].filter((item) =>
        item.name.toLowerCase().includes(lastWord)
      );
      if (matchedItems.length > 0) {
        suggestions.push({ category, items: matchedItems });
      }
    });
  
    return suggestions;
  };