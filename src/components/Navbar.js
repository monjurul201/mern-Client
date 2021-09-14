import React from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
         
            <NavLink className="navbar-brand" as={Link} to="/"> MERT <span className='text-primary'>STaCK</span> </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
    
              <li className="nav-item">
                <NavLink className="nav-link" as={Link}  activeClassName='item-active' to="/home"> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" as={Link} activeClassName='item-active' to="/about"> About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" as={Link} activeClassName='item-active' to="/login"> Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" as={Link} activeClassName='item-active' to="/signup"> Signup</NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      </div>
    </>
  );
};

export default Navbar;
