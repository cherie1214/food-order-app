import { useRef } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("확인");

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">성함</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">도시</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">도로명</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">우편번호</label>
        <input type="text" id="postal" ref={postalInputRef} />
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
