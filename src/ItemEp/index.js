import React from "react";
import "./style.scss";

class ItemEp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="image-container">
          <img src={this.props.item.img} alt="" className="image-episode" />
          <div className="title-ep-container">
            <p>{this.props.item.title}</p>
            <p>{this.props.item.duration}</p>
          </div>
          <p className="description">{this.props.item.description}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemEp;
