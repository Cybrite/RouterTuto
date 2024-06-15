import { NavLink } from "react-router-dom";
const NavBar = () => {
  // const navLinkStyle = ({isActive}) => {
  //     return{
  //         fontWeight : isActive ? 'bold' : 'normal',
  //         textDecoration : isActive ? 'none' : 'underline',
  //         color : isActive ? 'red' : 'blue',

  //     }
  // }

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default NavBar;
