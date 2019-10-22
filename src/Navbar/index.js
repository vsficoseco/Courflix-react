import React from "react";
import "./style.scss";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          {/* <div className="header-menu-icon-container">
            <i className="fas fa-bars"></i>
          </div> */}

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
      </React.Fragment>
    );
  }
}

export default Navbar;
