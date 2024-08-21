import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import NavBar from "./components/NavBar";
import PropTypes from "prop-types";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  state = {
    progress: 0,
  };
  setProgress = (percent) => {
    this.setState({ progress: percent });
  };

  render() {
    return (
      <div>
        <LoadingBar
        height={4}
        color="#f11946"
        progress={this.state.progress}
        />
        <NavBar />
        {/* <News/> */}
        <News setProgress={this.setProgress} pageSize={5} country="in" category="science" />
      </div>
    );
  }
}
