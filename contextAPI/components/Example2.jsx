import React from "react";
import PersonContext from "../contexts/PersonContext";

export default class Example2 extends React.Component {
  // 컨텍스트 데이터를 여러개 받을 수 없는 단점이 있음
  // static contextType = PersonContext;
  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

// static method는 아래과 같이도 쓸 수 있음
// function compoent에서도 사용 가능
Example2.contextType = PersonContext;
