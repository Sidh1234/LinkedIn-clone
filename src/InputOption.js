import React from "react";
import "./inputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <div>{title}</div>
    </div>
  );
}
export default InputOption;
