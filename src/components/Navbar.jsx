import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Get-a-Job
      </a>
      <ul>
        <li>
          <a href="/todos">Todos</a>
        </li>
        <li className="active">
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
