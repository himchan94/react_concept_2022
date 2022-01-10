import { useSearchParams } from "react-router-dom";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <>
      {name && <p>이름은? {name}</p>}
      <h1>About 입니다.</h1>
    </>
  );
}
