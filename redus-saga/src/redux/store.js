import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import history from "../history.js";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./reducers/rootSaga.js";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      promise,
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;

// composeWithDevTools(applyMiddleware(thunk, promise));
