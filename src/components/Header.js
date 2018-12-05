import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header className="header">
    <div className="content-container header__content">
      <NavLink
        className="header__title"
        to="/"
        activeClassName="is-active"
        exact={true}
      >
        Logout
      </NavLink>
      <NavLink
        className="header__title"
        to="/create"
        activeClassName="is-active"
      >
        Create Product
      </NavLink>
      <NavLink className="header__title" to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
