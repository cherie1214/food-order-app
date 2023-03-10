import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    city: true,
    street: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid =
      !isEmpty(enteredPostal) && isFiveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmitOrder({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postal: enteredPostal,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">??????</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>????????? ???????????????.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">?????????</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>???????????? ???????????????.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">?????????</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>???????????? ???????????????.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">????????????</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && <p>??????????????? ???????????????.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancle}>
          ??????
        </button>
        <button>??????</button>
      </div>
    </form>
  );
};

export default Checkout;
