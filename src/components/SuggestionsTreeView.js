import React, { useState } from "react";
import { TreeItem } from "@mui/x-tree-view";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";

export const SuggestionsTreeView = (props) => {
  const { onSuggestionSelected, suggestions } = props;
  return (
    <SimpleTreeView
      aria-label="icon expansion"
      expansionTrigger="iconContainer"
      defaultExpandedItems={["0", "1", "2", "3"]}
      onItemClick={(e, item) => onSuggestionSelected(item)}
      style={{
        marginBottom: "8px",
      }}
    >
      {suggestions.map((suggestion, index) => (
        <TreeItem key={index} itemId={`${index}`} label={suggestion.category}>
          {suggestion.items.map((item, idx) => (
            <TreeItem key={idx} itemId={`${item.id}`} label={item.name} />
          ))}
        </TreeItem>
      ))}
    </SimpleTreeView>
  );
};
