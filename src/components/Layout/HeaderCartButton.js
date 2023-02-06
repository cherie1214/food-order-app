import React from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} type={props.type} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>내 장바구니</span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;