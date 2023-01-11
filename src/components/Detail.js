import React from "react";
import "./Card.css";

function Detail({ label, value }) {
  return (
    <div className="paramater-row">
      <span className="parameter-label">{label} : </span>
      <span className="parameter-value">{value}</span>
    </div>
  );
}

export default Detail;
