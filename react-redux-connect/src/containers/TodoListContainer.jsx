import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
// 커넥터 함수를 실행한 결과가 함수고, 그 함수를 다시 실행해주면 컨테이너가 나옴
export default TodoListContainer;
