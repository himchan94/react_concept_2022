import PersonContext from "../contexts/PersonContext";

export default function Example1() {
  return (
    <PersonContext.Consumer>
      {(persons) => {
        console.log(persons);
        return (
          <ul>
            {persons.map((person) => (
              <li>{person.name}</li>
            ))}
          </ul>
        );
      }}
    </PersonContext.Consumer>
  );
}
