import React from "react";
import "./style.scss";
import Button from "../Button";

class Banner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <div className="banner-inicio">
            <div className="banner-details">
              <div className="banner-title">
                <h4>ORIGINAL DE COURFLIX</h4>
                <h1>BLACK SUMMER</h1>
              </div>
              <div className="banner-buttons-container">
                <Button title="Reproducir" />
                <Button title="Mi lista" />
              </div>
              <div className="banner-description">
                <p>
                  Ve la temporada 1. Los muertos viven y cazan al predador de
                  predadores. Sin refugios seguros ni personas confiables, solo
                  queda sobrevivir.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-banner">
          <div className="mobile-banner-img">
            <div className="mobile-info-container">
              <div className="info-title">
                <h2>Black Summer</h2>
              </div>
              <div className="info-details">
                <p>2019</p>
                <p>16 +</p>
                <p>1 temporada</p>
              </div>
              <div className="info-button">
                {/* <p className="play-button">REPRODUCIR</p>
                <p className="episodes-button">EPISODIOS</p> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
