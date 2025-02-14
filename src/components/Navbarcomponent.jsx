import React from "react";
import ToggleDarkModeComponent from "./ToggleDarkModeComponent";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

function Navbarcomponent() {
  return (
    <header className="constainer mx-auto bg-neutral-300 dark:bg-neutral-800 w-full">
      <nav className="container mx-auto px-[16px] flex items-center h-[80px] justify-between">
        {/* <h1 className="text-3xl uppercase font-extrabold text-blue-600">
          Redux
        </h1> */}
        <ToggleDarkModeComponent />
        <ul className="flex gap-[20px]">
          <li>
            <NavLink
              to={"/"}
              className="uppercase hover:text-blue-600 transition-all duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className="uppercase hover:text-blue-600 transition-all duration-300"
            >
              Profile
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-[40px]">
          <Link
            to={"/register"}
            className="uppercase hover:text-yellow-500 transition-all text-red-600 duration-300 px-[16px] py-[6px]"
          >
            Register
          </Link>

          <Link
            to={"/login"}
            className="uppercase  transition-all duration-300 flex items-center gap-[5px] px-[16px] py-[6px] bg-yellow-500 rounded-2xl hover:bg-red-600 hover:text-white"
          >
            <FaRegUser /> Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbarcomponent;
