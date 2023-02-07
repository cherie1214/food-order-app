import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCofirm}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCofirm={props.onCofirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay children={props.children} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
