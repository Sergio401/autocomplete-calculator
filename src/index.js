import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FormulaBuilder from "./components/FormulaBuilder";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FormulaBuilder />
  </StrictMode>
);
