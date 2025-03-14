import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import Gantt from "./components/Gantt";
const App = () => {
  return <Gantt />;
};

// Render App
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
