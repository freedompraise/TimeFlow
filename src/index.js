import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

library.add(faTrash);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
