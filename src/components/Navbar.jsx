import React from "react";
import logo from "../assets/s75-31690.jpeg";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-screen bg-sky-100 p-2 ">
      <img
        src={logo}
        alt="..."
        className="w-24 flex-none rounded-md ml-2 mr-7"
      />

      {/* HOme */}
      <div className="lobster basis-2/6 space-x-16 ml-6 tracking-wide text-lg  font-semibold text-slate-800">
        <NavLink to="/">Home</NavLink>

        {/* earth */}
        <NavLink to="/earth">Earth</NavLink>

        {/* mars */}
        <NavLink to="/mars">Mars</NavLink>
      </div>
      {/* search input */}
      <div className="basis-11/12 flex space-x-2">
        <input
          type="text"
          placeholder="  rover landing.."
          className="h-8 w-9/12 rounded-lg"
        />
        <FiSearch className="h-8" />
      </div>
    </nav>
  );
}

export default Navbar;
