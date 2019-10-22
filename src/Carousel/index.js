import React from "react";
import "./style.scss";
import Item from "../Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      images: []
    };
  }

  async componentDidMount() {
    const result = await fetch("https://localhost3001/api/covers");
    const resultJson = await result.json();

    this.setState({
      images: resultJson
    });
  }

  render() {
    const settings = {
      slidesToShow: 5,
      slidestoScroll: 2
    };
    return (
      <div className="list-container">
        <div className="list-title-container">
          <h2>{this.props.title}</h2>
        </div>
        <div className="list-images-container">
          <Slider {...settings}>
            {this.images.img.map((item, key) => {
              return <Item item={this.images.img} key={key} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
