import { useParams } from "react-router-dom";

export default function Profile(props) {
  let params = useParams();

  return (
    <>
      {params.id && <h1>{params.id} 입니다.</h1>}
      <h1>Profile 입니다.</h1>
    </>
  );
}
