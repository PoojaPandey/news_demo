import React, { Component } from "react";
import NewsList from "./Views/NewsList/NewsList";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NewsList />;
      </BrowserRouter>
    );
  }
}

export default App;
