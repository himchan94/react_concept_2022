import React, { useState, useEffect } from "react";

// useState => count
// useState = {count : 0}
export default function Example3() {
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button
        onClick={() => {
          setState((state) => {
            return {
              count: state.count + 1,
            };
          });
        }}>
        Click Me
      </button>
    </div>
  );
}
