import React, { useState } from "react";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const ResponsiveAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Forex Growers
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)} >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""} >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signal">Signal</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact_Us</NavLink>
        </li>
        <li>
          <NavLink to="/about">About_Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveAppBar