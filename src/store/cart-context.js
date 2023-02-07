import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0, // 초기 값
  addItem: (item) => {}, // 추가해야하는 항목을 받는 함수
  removeItem: (id) => {}, // 삭제해야 하는 항목을 식별하기 위해 id를 받는 함수
});

export default CartContext;
