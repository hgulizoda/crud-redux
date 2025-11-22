import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logIn, logOut } from "../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  return (
    <header
      className="container"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h2>Logo</h2>
      <nav style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <Button
          variant="contained"
          onClick={() => dispatch(auth ? logOut() : logIn())}
        >
          {auth ? "Log out" : "Log In"}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
