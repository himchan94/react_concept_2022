import { useState, useRef, useEffect } from "react";

const BUTTON_TEXT = {
  NORAMAL: "버튼이 눌리지 않았다.",
  CLICKED: "버튼이 방금 눌렸다.",
};

export default function Button() {
  const [message, setMessage] = useState(BUTTON_TEXT.NORAMAL);
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <>
      <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>
        button
      </button>
      <p>{message}</p>
    </>
  );

  function click() {
    setMessage(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMessage(BUTTON_TEXT.NORAMAL);
    }, 5000);
  }
}
