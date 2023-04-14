import React from "react";
import ReactDOM from "react-dom";
import "aos/dist/aos.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "spectre.css/dist/spectre.css";
// import "spectre.css/dist/spectre-exp.css";
// import "spectre.css/dist/spectre-icons.css";
import "./assets/fonts/Helvetica/helvetica.css";
import "normalize.css/normalize.css";
import "./assets/css/index.css";
import "./assets/css/App.css";
import "./assets/css/guide.css";
import App from "./Content/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
