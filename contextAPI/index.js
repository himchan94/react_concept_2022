import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PersonContext from "./contexts/PersonContext";

const person = [
  { id: 0, name: "Mark", age: 39 },
  { id: 1, name: "Ann", age: 9 },
];

ReactDOM.render(
  <React.StrictMode>
    <PersonContext.Provider value={person}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
