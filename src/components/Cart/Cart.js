import React from "react";

import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes["card-item"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>총 수량</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>닫기</button>
        <button className={classes.button}>주문하기</button>
      </div>
    </div>
  );
};

export default Cart;
