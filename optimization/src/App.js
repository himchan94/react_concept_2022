import React, { useState, useRef } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";
// const Person = React.memo(({ name, age }) => {
//   console.log("Person render");

//   return (
//     <div>
//       {name} / {age}
//     </div>
//   );
// });

// function App() {
//   const [state, setState] = React.useState({
//     text: 0,
//     persons: [
//       { id: 1, name: "Mark", age: 39 },
//       { id: 2, name: "Hanna", age: 29 },
//     ],
//   });

//   const _change = (e) => {
//     setState({
//       ...state,
//       text: e.target.value,
//     });
//   };

//   // const toPersonClick = React.useCallback(() => {}, []);

//   const { text, persons } = state;
//   return (
//     <div>
//       <input type='text' value={text} onChange={_change} />
//       <ul>
//         {persons.map((person) => {
//           return <Person {...person} key={person.id} onClick={setState} />;
//         })}
//       </ul>
//     </div>
//   );
// }

// createProtal

// function App() {
//   const [visible, setVisible] = useState(false);

//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0, 0, 0, 0.5)",
//             }}
//             onClick={close}>
//             {" "}
//             Hello
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };
  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;
