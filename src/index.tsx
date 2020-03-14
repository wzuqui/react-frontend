import React from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from "@uifabric/icons";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import "./dx.generic.custom-scheme.css";
import "./css/ravex-embedded.css";
import "./global.css";

import App from "./App";

initializeIcons(undefined, {
  disableWarnings: true
});
ReactDOM.render(<App />, document.getElementById("root"));
