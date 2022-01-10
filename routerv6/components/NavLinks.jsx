import { NavLink } from "react-router-dom";
import { useLocation, useMatch } from "react-router-dom";

const activeStyle = {
  color: "green",
};

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink
          to='/'
          style={({ isActive }) => {
            console.log(isActive);
            return isActive ? activeStyle : undefined;
          }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li>
        <NavLink to='/profile/123'>profile123</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink
          to='/about/?name=himchan'
          style={({ isActive }) => {
            console.log(isActive);
            return isActive ? activeStyle : undefined;
          }}>
          About himchan
        </NavLink>
      </li>
    </ul>
  );
}
