import { useNavigate } from "react-router-dom";

import LoginButton from "../components/LoginButton";

const Login = () => {
  const navigate = useNavigate();
  console.log(navigate);
  function login() {
    setTimeout(() => {
      // 페이지를 이동
      navigate("/");
    }, 1000);
  }

  return (
    <div>
      <h2>Login 페이지 입니다.</h2>
      {/* <button onClick={login}>로그인하기</button> */}
      <LoginButton />
    </div>
  );
};

export default Login;
