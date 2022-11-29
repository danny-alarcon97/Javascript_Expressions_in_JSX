import React from "react";
import ReactDOM from "react-dom";

const name = "Daniel Alarcon";
var currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
