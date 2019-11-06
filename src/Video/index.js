import React from "react";
import "./style.scss";
import Navbar from "../Navbar";

class Video extends React.Component {
  render() {
    return (
      <React.Fragment className="video-main-container">
        <Navbar />
        <div className="video-player-container">
          <img
            src="https://media.wired.com/photos/5c658e84e7b9ee4c64ff4e38/master/pass/Culture_Monitor_BreakingBad.jpg"
            className="video-window"
          />
        </div>
      </React.Fragment>
    );
  }
}
export default Video;
