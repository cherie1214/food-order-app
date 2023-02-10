import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const orderHandler = () => {
    console.log("order");
  };

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>총 수량</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          닫기
        </button>
        <button className={classes.button} onClick={orderHandler}>
          주문하기
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
