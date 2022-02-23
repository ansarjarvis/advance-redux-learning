import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const totalQunatity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQunatity}</span>
    </button>
  );
};

export default CartButton;
