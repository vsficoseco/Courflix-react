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
      carouseles: []
    };
  }

  async componentDidMount() {
    const result = await fetch("http://localhost:3001/api/covers");
    const resultJson = await result.json();

    console.log(resultJson);
    this.setState({
      carouseles: resultJson.covers
    });
  }

  render() {
    const settings = {
      slidesToShow: 5,
      slidestoScroll: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
      ]
    };
    return (
      <div className="list-container">
        {this.state.carouseles.map((carousel, i) => {
          console.log(carousel);
          return (
            <React.Fragment>
              <div className="list-title-container">
                <h2>{carousel.name}</h2>
              </div>
              <div className="list-images-container">
                <Slider {...settings}>
                  {carousel.items.map((item, key) => {
                    return <Item item={item} key={key} />;
                  })}
                </Slider>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Carousel;
