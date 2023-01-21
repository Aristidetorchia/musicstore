import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo193.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a href=".">
          <img src={logo} height="100" alt="No Encontrada" />
        </a>

        <h1>🎵 Guitar Shopp MariSabel 🎵 </h1>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <h4>
              <NavLink
                to="/"
                className="navbar-item nav-link text-center "
                style={{ color: "white"}}
              >
                Inicio
              </NavLink>
            </h4>
            <h4>
              <NavLink
                to="/carrito"
                className="navbar-item nav-link text-center"
                style={{ color: "white" }}
              >
                Carrito
              </NavLink>
            </h4>
            <h4>
              <NavLink
                to="/contacto"
                className="navbar-item nav-link text-center"
                style={{ color: "white" }}
              >
                Contacto
              </NavLink>
            </h4>
            <h4></h4>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
