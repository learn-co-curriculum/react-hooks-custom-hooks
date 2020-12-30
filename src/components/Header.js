import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Underreacted</Link>
      </h1>
    </header>
  );
}

export default Header;
