import React from "react";
import { createNavLink } from "../common/FormsControls/FormsControls";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      {createNavLink("/profile", "Profile")}
      {createNavLink("/dialogs", "Messages")}
      {createNavLink("/news", "News")}
      {createNavLink("/music", "Music")}
      {createNavLink("/settings", "Settings")}
      {createNavLink("/users", "Users")}
    </nav>
  );
};

export default Navbar;
