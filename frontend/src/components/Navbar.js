import { Link } from "react-router-dom";
import AuthContext from "../components/layouts/auth/AuthContext";

import React, { Fragment, useContext } from "react";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;
  let flag=null
  if(localStorage.token){
    flag=true
  }else{
    flag=false
  }
  const Exit = () => {
    logout();
  };
  const authLink = (
    <Fragment>
       <div className="navbar navbar-expand-lg navbar-primary bg-light">
        <Link class="navbar-brand " to="/">
          <h3> {user && user.name}</h3>
        </Link>

        <span className="navbar-toggler-icon"></span>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <b>Home</b>
        </Link>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link" to="/service">
          <b>Post Memories</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <b>Your Post</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link onClick={Exit} className="nav-link" to="/">
          <b>Logout</b>
        </Link>
      </li>
      </ul>
        </div>
      </div>
    </Fragment>
  );
  const unauthLink = (
    <Fragment>
      <div className="navbar navbar-expand-lg navbar-primary bg-light">
        <Link class="navbar-brand " to="/">
          <h3> Practice App</h3>
        </Link>

        <span className="navbar-toggler-icon"></span>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <b>Home</b>
              </Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/service">
                <b>Post Memories</b>
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
          </ul>
        </div>
      </div>
    </Fragment>
  );
  return (
    <div>
      
            {flag ? authLink : unauthLink}
        
    </div>
  );
};

export default Navbar;
