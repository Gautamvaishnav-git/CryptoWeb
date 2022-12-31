import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import ColorModeSwitcher from "./Components/ColorModeSwitcher";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = "https://api.coingecko.com/api/v3";
