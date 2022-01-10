import { Link } from "react-router-dom";
import Links from "../components/Links";
import NavLinks from "../components/NavLinks";
export default function Home() {
  return (
    <>
      <Links />
      <NavLinks />
      <Link to='/about'>About</Link>
      <h1>Home 입니다.</h1>
    </>
  );
}
