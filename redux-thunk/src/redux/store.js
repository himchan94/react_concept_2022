import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// middleware

// const middleware1 = (store) => {
//   console.log("middleware1", 0);
//   return (next) => {
//     console.log("middleware1", 1, next);
//     return (action) => {
//       console.log("middleware1", 2, action);
//       const returnValue = next(action);
//       console.log("middleware1", 3);
//       return returnValue;
//     };
//   };
// };

// const middleware2 = (store) => {
//   console.log("middleware2", 0);
//   return (next) => {
//     console.log("middleware2", 1, next);
//     return (action) => {
//       console.log("middleware2", 2, action);
//       const returnValue = next(action);
//       console.log("middleware2", 3);
//       return returnValue;
//     };
//   };
// };

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// 액션생성자가 함수를 반환할 때만 동작함
// 일반 객체가 반환되면 thunk가 반응하지 않음
export default store;
