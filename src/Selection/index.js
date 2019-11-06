import React from "react";
import "./style.scss";
import Navbar from "../Navbar";
import BannerSelection from "../BannerSelection";
import Carousel from "../Carousel";
import CarouselEpisodes from "../CarouselEpisodes";

class Selection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <BannerSelection />
        <div className="carousel-episodes">
          <CarouselEpisodes />
        </div>
        <div className="carousel-peliculas">
          <Carousel />
        </div>
      </React.Fragment>
    );
  }
}
export default Selection;
