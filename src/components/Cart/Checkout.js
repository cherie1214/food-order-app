import React from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("확인");
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">성함</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">도시</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">도로명</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">우편번호</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancle}>
          취소
        </button>
        <button>확인</button>
      </div>
    </form>
  );
};

export default Checkout;
