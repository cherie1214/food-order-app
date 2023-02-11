import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsBumped, sestBtnIsBumped] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  // arr.reduce((prev, current) => {}), 누적값의 초기값)  ### 원하는 시작점부터 모든 배열의 요소들을 돌면서 어떤 값을 누적할 때 사용한다.(앞 요소부터)
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    sestBtnIsBumped(true);

    const timer = setTimeout(() => {
      sestBtnIsBumped(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} type={props.type} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
