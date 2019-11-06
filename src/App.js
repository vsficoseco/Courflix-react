import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Video from "./Video";
import Selection from "./Selection";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/video" exact component={Video} />
          <Route path="/selection" exact component={Selection} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
