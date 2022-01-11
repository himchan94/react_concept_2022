import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function Example1() {
  const persons = useContext(PersonContext);

  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}
