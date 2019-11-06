import React from "react";
import "./style.scss";
import Button from "../Button";

class BannerSelection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="mobile-section-banner">
          <div className="mobile-section-banner-info">
            <h1>Breaking Bad</h1>
            <div className="mobile-section-banner-details">
              <div>2013</div>
              <div>16+</div>
              <div>5 temporadas</div>
            </div>
            <div>
              <Button title="Reproducir" />
            </div>
          </div>
        </div>
        <div className="section-banner">
          <div className="section-banner-info">
            <div className="banner-logo-container">
              {/* <img
                src="http://pluspng.com/img-png/breaking-bad-png-download-png-download-eps-1024.png"
                alt="Logo Breacking Bad"
              /> */}
            </div>
            <div className="banner-general-info">
              <div className="coincidence">96% de coincidencia</div>
              <div className="year">2013</div>
              <div className="clasification">16+</div>
              <div className="seasons">5 temporadas</div>
            </div>
            <div className="banner-description">
              <p>
                Un profesor de Química de secundaria con cáncer terminal se
                asocia a un exestudiante para asegurar el futuro de su familia
                al fabricar y vender metanfetamina.
              </p>
            </div>
            <div className="section-banner-buttons">
              <div>
                <Button title="Reproducir" />
              </div>
              <div className="button-margin">
                <Button title="Mi lista" />
              </div>

              {/* <div class="banner-button" class="play-button">
                <i class="fas fa-play"></i>
                Reproducir
              </div>
              <div class="banner-button" class="my-list-button">
                <i class="fas fa-plus"></i>
                Mi lista
              </div>
              <div class="rate-buttons-container">
                <div class="rate-button">
                  <i class="far fa-thumbs-up" class="icon"></i>
                </div>
                <div class="rate-button">
                  <i class="far fa-thumbs-down" class="icon"></i>
                </div>
              </div> */}
            </div>
            <div className="banner-extra-info">
              {/* <div className="banner-extra-info-icon">
                <i className="fas fa-trophy"></i>
              </div> */}
              <div className="banner-extra-info-text">
                <p>
                  "Breacking bad" ganó 16 premios Emmy, incluidos cuatro a mejor
                  actor para la estrella Bryan Cranston
                </p>
              </div>
            </div>
            <div className="banner-details">
              <p>Protagonistas: Brian Cranston, Aaron Paul, Anna Gunn</p>
              <p>Géneros: Thrillers de TV, Dramas de TV, TV sobre crimen</p>
              <p>Este programa es: Realista, Violento, Sombrío</p>
            </div>
          </div>
          <div className="banner-content-selector">
            <div className="content-sections-row">
              <div className="content-section" class="section-information">
                DESCRIPCIÓN GENERAL
              </div>
              <div className="content-section" className="section-episodes">
                EPISODIOS
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BannerSelection;
