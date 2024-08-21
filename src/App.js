import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import NavBar from "./components/NavBar";
import PropTypes from "prop-types";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 10
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number

  };
  render() {
    return (
      <div>
        <NavBar />
        {/* <News/> */}
        <News pageSize={5} country="in" category="science" />
      </div>
    );
  }
}
