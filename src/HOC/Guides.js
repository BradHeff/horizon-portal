import React from "react";
import Styles from "../Styles/StyleWhite";
import StylesLight from "../Styles/StyleLight";
import StylesFooter from "../Styles/StyleFooter";
const Guides = (props) => {
  return (
    <div className={`section ${props.bg}`}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 text-center sec2">
            <a href={props.link}>
              <h1>
                {props.title} <span>{props.titleColor}</span> {props.title2}
              </h1>
            </a>
          </div>
          <div className="col-md-12 col-6 text-center">
            <p>{props.children}</p>
          </div>
          <div className="col-sm-8 col-md-6 col-2">
            <div className="img-border-invert border-image">
              <a href={props.link}>
                <img
                  src={props.image}
                  alt={props.image}
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {props.color === "dark" ? (
        <Styles trans={props.trans} />
      ) : props.color === "footer" ? (
        <StylesFooter trans={props.trans} />
      ) : (
        <StylesLight trans={props.trans} />
      )}
    </div>
  );
};

export default Guides;
