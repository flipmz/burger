import React from "react";
import css from "./style.module.css";
const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <div>{props.orts}</div>
    <button>Nemeh</button>
    <button>Hasakh</button>
  </div>
);

export default BuildControl;
