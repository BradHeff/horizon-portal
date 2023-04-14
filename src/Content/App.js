import React, { Component } from "react";
import Layout from "../HOC/Layout";
import Base from "../Components/Base/Base";
import FourOHFour from "../Content/404";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import ParentGuides from "./Parent-guides";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-back",
    });   
  }
  render() {
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Base />
            </Layout>
          }
        />
        <Route
          path="parent-guides"
          element={
            <Layout>
              <ParentGuides />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <FourOHFour />
            </Layout>
          }
        />
      </Routes>
    );
  }
}

export default App;
