import React from "react";

import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const RootLayout = ({ children }) => {

  const {isLogged,setIsLogged} = useAuthContext();  
  const navigateFunc = useNavigate();

  const location = useLocation();

  const prevPath = location.state?.prevPath || "/";

  return (
    <div>
      <h1>Nav</h1>

      <nav>
        <ul>
          {/* NavLink vs Link
              NavLink provides active class to element
        */}

          <li>
            
            <NavLink
              className={({ isActive }) => {
                return isActive ? "navActive" : null;
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            
            <NavLink
              className={(obj) => {
                return obj.isActive ? "navActive" : null;
              }}
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            
            <NavLink
              className={(obj) => {
                return obj.isActive ? "navActive" : null;
              }}
              to="services"
            >
              Services
            </NavLink>
          </li>
          <li>
            
            <NavLink
              className={(obj) => {
                return obj.isActive ? "navActive" : null;
              }}
              to="contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            
            <NavLink
              className={(obj) => {
                return obj.isActive ? "navActive" : null;
              }}
              to="posts"
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      {isLogged && <button onClick={e=>{
        setIsLogged(false);
        navigateFunc(prevPath,{replace:true})

      }}>Log Out</button>  }      
      <hr />
      <Outlet />
    </div>
  );
};

export default RootLayout;
