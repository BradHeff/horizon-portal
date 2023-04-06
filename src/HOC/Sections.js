import React from "react";
import Styles from "../Styles/StyleWhite";
import StylesLight from "../Styles/StyleLight";
import StylesFooter from "../Styles/StyleFooter";

const Sections = (props) => {
  return (
    <div className={`section ${props.bg}`}>
      <div className="container grid-xl">
        <div className="row align-items-center justify-content-center">
          {props.children}
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

export default Sections;
