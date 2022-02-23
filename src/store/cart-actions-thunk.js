import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart datas",
      })
    );

    const sendRequest = async () => {
      await fetch(
        "https://react-http-2cd65-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success...",
          message: "sending cart data successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error...",
          message: "sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const fechedData = await fetch(
        "https://react-http-2cd65-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await fechedData.json();
      return data;
    };
    try {
      const cartData = await getRequest();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error...",
          message: "fetching cart data failed",
        })
      );
    }
  };
};
