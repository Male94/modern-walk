import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center sticky top-0 z-50 bg-white shadow-md p-5">
      <Link to="/">
        <h4 className="font-black text-2xl">Modern Walk</h4>
      </Link>
    </header>
  );
}

export default Header;
