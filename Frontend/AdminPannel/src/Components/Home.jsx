import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="header">
        <NavLink className="header-brand" to="#">
          CoreUI
        </NavLink>
        <button className="header-toggler" type="button">
          <span className="header-toggler-icon"></span>
        </button>
        <ul className="header-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="#">
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              SignUp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to=""
              id="headerDropdown"
              role="button"
              data-coreui-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="headerDropdown">
              <NavLink className="dropdown-item" to="#">
                Action
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                Another action
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Something else here
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link disabled"
              to="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </NavLink>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
}

export default Home;
