import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [];

export default function todos(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previousState;
}
