import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { sendCartData, fetchCartData } from "./store/cart-actions-thunk";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notificaiton = useSelector((state) => state.ui.notificaiton);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {notificaiton && (
        <Notification
          status={notificaiton.status}
          title={notificaiton.title}
          message={notificaiton.message}
        ></Notification>
      )}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
