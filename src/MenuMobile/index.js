import React from "react";
import "./style.scss";

class MenuMobile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="menu-mobile-container">
          <div class="user-information">
            <div class="user">
              <div class="user-img-container">
                <img
                  src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg"
                  alt="user profile img"
                />
              </div>
              <div class="user-data">
                <p class="user-name">CourseIT</p>
                <p class="change-profile">Cambiar perfiles</p>
              </div>
            </div>
            <div class="user-menu-container">
              <ul>
                <li>Cuenta</li>
                <li>Centro de ayuda</li>
                <li>Cerrar sesion en Courflix</li>
              </ul>
            </div>
          </div>
          <div class="content-menu-container">
            <ul>
              <li class="title-content-menu">Inicio</li>
              <li>Mi lista</li>
              <li>TV de acción y aventuras</li>
              <li>Acción y aventuras</li>
              <li>Películas africanas</li>
              <li>Películas alemanas</li>
              <li>Ambientadas en otra época</li>
              <li>Animé de acción</li>
              <li>TV argentina</li>
              <li>Películas australianas</li>
              <li>Series australianas</li>
              <li>Películas de Bollywood</li>
              <li>TV brasileña</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MenuMobile;
