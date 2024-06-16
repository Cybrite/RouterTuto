import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
const NavBar = () => {
  // const navLinkStyle = ({isActive}) => {
  //     return{
  //         fontWeight : isActive ? 'bold' : 'normal',
  //         textDecoration : isActive ? 'none' : 'underline',
  //         color : isActive ? 'red' : 'blue',

  //     }
  // }

  const auth = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/Users">Users</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Log-in</NavLink>}
    </nav>
  );
};

export default NavBar;
