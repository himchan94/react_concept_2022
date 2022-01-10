import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  function login() {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return <button onClick={login}>로그인하기</button>;
}
