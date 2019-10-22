import React from "react";
import "./style.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Button extends React.Component {
  render() {
    return <div class="button">{this.props.title}</div>;
  }
}
export default Button;
