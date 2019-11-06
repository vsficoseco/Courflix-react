import React from "react";
import "./style.scss";
import Navbar from "../Navbar";
import Carousel from "../Carousel";

class Categories extends React.Component {
  render() {
    return (
      <React.Fragment className="categories-main-container">
        <Navbar />
        <div className="categories-title">
          <h5>Series >> </h5> <h3>TV de Accion y aventuras</h3>
        </div>
        <Carousel />
      </React.Fragment>
    );
  }
}

export default Categories;
