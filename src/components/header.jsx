import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <NavLink to="/">Todos</NavLink>
      <NavLink to="/product">Products</NavLink>
    </header>
  );
};

export default Header;
