import React, { useState, useEffect } from "react";

export default function Example2() {
  const [count, setCount] = useState(0);

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
