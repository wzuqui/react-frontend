import { initializeIcons } from "@uifabric/icons";
import "devextreme/dist/css/dx.common.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/ravex-embedded.css";

initializeIcons(undefined, {
  disableWarnings: true
});

ReactDOM.render(<App />,
  document.getElementById("root")
);
