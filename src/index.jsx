import { createRoot } from "react-dom/client";
import Calculadora from './Calculadora'
import { StrictMode } from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculadora />
  </StrictMode>
);