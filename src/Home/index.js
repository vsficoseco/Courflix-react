import React from "react";
import "./style.scss";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Carousel from "../Carousel";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment className="home-main-container">
        <Navbar />
        <Banner />
        <Carousel />
      </React.Fragment>
    );
  }
}

export default Home;
