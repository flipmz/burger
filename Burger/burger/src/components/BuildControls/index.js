import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <BuildControl type="salad" orts="Салад" />
    <BuildControl type="Bacon" orts="Гахайн мах" />
    <BuildControl type="cheese" orts="Бяслаг" />
    <BuildControl type="meat" orts="Үхрийн мах" />
  </div>
);

export default BuildControls;
