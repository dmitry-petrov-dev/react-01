import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = ({ isAuth, login, logout, props }) => {
  return (
    <header className={classes.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
        alt="logo"
      />
      <div className={classes.loginBlock}>
        {isAuth ? (
          <div>
            {login} <i className={classes.ggLogOut} onClick={logout} />
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
