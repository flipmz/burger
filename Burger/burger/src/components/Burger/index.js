import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
const Burger = (props) => {
  console.log(props.orts);
  const items = Object.entries(props.orts);
  console.log(items);
  let content = [];
  items.map((el, j) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${j + 1}${i + 1}}`} type={el[0]} />);
  });
  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу....</p>;
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
