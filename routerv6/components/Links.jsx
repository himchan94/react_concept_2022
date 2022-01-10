import { Link } from "react-router-dom";

export default function Links() {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/profile/123'>profile123</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/about/?name=himchan'>About himchan</Link>
      </li>
    </ul>
  );
}
