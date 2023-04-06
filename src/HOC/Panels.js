import React from "react";

import parent from "../assets/images/prnt2.png";
import student from "../assets/images/stdnt.png";

const Panels = (props) => {
  return (
    <div className="panels">
      <div className="panel-container-header">
        {props.choice === "KIDS" ? (
          <img src={student} alt={student} />
        ) : (
          <img src={parent} alt={parent} />
        )}
        <h2 style={{ marginTop: "15px" }}>{props.title}</h2>
      </div>
      <div className="panel-container">{props.children}</div>
    </div>
  );
};

export default Panels;
