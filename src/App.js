import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
