import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Usercontext";
import "./Nav.css";

function Navigation({ logout }) {
  const { currUser } = useContext(UserContext);

  console.debug("Nav", "CurrUser:", currUser);

  function loggedInNav() {
    return (
      <ul className="navbar-list">
        <li>
          <NavLink className="navlink" to="/drives">
            Drives
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/cars">
            My Garage
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <Link className="navlink" to="/" onClick={logout}>
            Logout {currUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-list">
        <li>
          <NavLink className="navlink" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navbar">
      <Link className="logo-link" to="/"><h2>Two Lanes</h2></Link>
      {currUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;
