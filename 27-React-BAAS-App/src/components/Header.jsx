import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="min-h-20 w-full bg-slate-300 shadow-md mx-auto ">
      <div className="px-4 max-w-screen-2xl w-full mx-auto  h-20 flex justify-between items-center">
        <NavLink to={"/"} className="font-bold text-3xl ">
          LOGO
        </NavLink>

        <nav className="flex gap-6 mx-8">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-600 " : ""} font-bold text-lg`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-600 " : ""} font-bold text-lg`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-600 " : ""} font-bold text-lg`
            }
          >
            Login
          </NavLink>
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-600 " : ""} font-bold text-lg`
            }
          >
            SignUp
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
