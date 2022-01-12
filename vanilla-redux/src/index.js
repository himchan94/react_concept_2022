import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import ReduxContext from "./contexts/ReduxContext";

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("reading"));
// store.dispatch(addTodo("fishing"));

// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

ReactDOM.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
