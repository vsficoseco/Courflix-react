import React from "react";
import "./style.scss";

class Item extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="image-container">
          <img src={this.props.images.img} alt="" />
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
