import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import history from "../history.js";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ history }), promise)
  )
);
// 액션생성자가 함수를 반환할 때만 동작함
// 일반 객체가 반환되면 thunk가 반응하지 않음
export default store;

// composeWithDevTools(applyMiddleware(thunk, promise));
