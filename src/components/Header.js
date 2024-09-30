import React from "react";
//import link
import { Link } from "react-router-dom";
//import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header id="sticky" className="py-6 border-b mb-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/login">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg"
            to="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
