import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuMobile from "../MenuMobile";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <div className="header-menu-icon-container">
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="header-logo-container">
            <img
              src={"https://courseit.com.ar/static/courflix/assets/logo.png"}
              alt=""
              className="logo-img"
            />
          </div>
          <div className="header-list-container">
            <ul className="header-list-elements">
              <li>Inicio</li>
              <li>Series</li>
              <li>Peliculas</li>
              <li>Agregados recientemente</li>
              <li>Mi lista</li>
            </ul>
          </div>
        </div>
        <MenuMobile />
      </React.Fragment>
    );
  }
}

export default Navbar;
