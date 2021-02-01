import { Link } from "react-router-dom";
import AuthContext from "../components/layouts/auth/AuthContext";

import React, { Fragment, useContext } from "react";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;
  const Exit=()=>{
    logout();
  }
  const authLink = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <b>Home</b>
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/">
     <b>{user && user.name}</b>
        </Link></li>
        <li className="nav-item">
        <Link className="nav-link" to="/service">
          <b>Service</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <b>About</b>
        </Link>
      </li>
      
      <li className="nav-item">
        <a onClock={Exit} className="nav-link" href="/">
          <b>Logout</b>
        </a>
      </li>
    </Fragment>
  );
  const unauthLink = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <b>Home</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <b>About</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/service">
          <b>Service</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <b>Login</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          <b>Register</b>
        </Link>
      </li>
    </Fragment>
  );
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-primary bg-light">
        <Link class="navbar-brand " to="/">
          <h3> Practice App</h3>
        </Link>

        <span className="navbar-toggler-icon"></span>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? authLink : unauthLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
