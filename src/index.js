import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// i know there are librarys like redux & react states but im to lazy to use it
window.state = { code: "" };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
