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
      { id: 64424509457, name: "GW_outgoing_downlink_user_traffic_in_KB_APNS", value: "GW_outgoing_downlink_user_traffic_in_KB_APNS " },
      { id: 64424509470, name: "Iu_mode_packet_paging_request_time", value: "Iu_mode_packet_paging_request_time " },
      { id: 64424509476, name: "test Iu_mode_packet_paging_request_time", value: "Iu_mode_packet_paging_request_time " },
      { id: 64424509477, name: "Iu_mode_packet_paging_none_response_times", value: "Iu_mode_packet_paging_none_response_times" },
      { id: 64424509478, name: "Number_of_CCA_message_with_2001_Result_Code", value: "Number_of_CCA_message_with_2001_Result_Code" },
      { id: 64424509479, name: "CCR_Initial_request", value: "CCR_Initial_request" },
      { id: 64424509480, name: "CCR_Termination_request", value: "CCR_Termination_request" },
      { id: 64424509481, name: "CCR_Update_request", value: "CCR_Update_request" },
      { id: 64424509482, name: "NHLRMSST1", value: "NHLRMSST1" }
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