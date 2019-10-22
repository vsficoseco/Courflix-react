import React from "react";
import "./style.scss";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Carousel from "../Carousel";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Carousel title="Peliculas nuevas" images={this.props.images} />
      </React.Fragment>
    );
  }
}

export default Home;
