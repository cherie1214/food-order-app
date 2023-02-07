import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const showCartHandler = () => {
    setShowCartModal(true);
  };

  const hideCartHandler = () => {
    setShowCartModal(false);
  };

  return (
    <Fragment>
      {showCartModal && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
