import React, { useState, useEffect } from "react";

export default function Example5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);

  useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      // 이전 count 값으로 실행
      console.log("cleanup by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Click Me
      </button>
    </div>
  );
}
