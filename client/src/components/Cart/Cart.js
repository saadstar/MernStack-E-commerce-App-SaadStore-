import React from 'react'
import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, REMOVE_ITEM } from "../../components/Redux/Actions";
import { Pay } from '../Pay/Pay';


export const Cart = () => {
  const carts = useSelector(state => state.Reducer.cart);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    carts.forEach((item) => {
      total += item.counter * item.price
    });
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      {carts.length === 0 ? (
        <div className="emptyCart">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/saadstore-ed76a.appspot.com/o/emptyCart.png?alt=media&token=4b8ec5d1-ff1c-4f6d-be3c-82cbe4ba0935"
            }
            alt="empty-cart"
          />
          <h4>Shopping cart is Empty</h4>
          <p>
            Welcome back! If you had items in your shopping cart, we saved them
            for you. SIGN IN now to see them, or whenever you're ready to check
            out.
          </p>
        </div>
      ) : (
        <h1>Products in your cart</h1>
      )}
      {carts?.map((item) => {
        return (
          <div className="item" key={item._id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item?.desc?.substring(0, 100)}</p>
              <div className="price ">
                {item.counter} x {`$${item.price}`}
              </div>
            </div>
            <DeleteOutlineIcon
              className="delete"
              onClick={() => dispatch(REMOVE_ITEM(item))}
            />
          </div>
        );
      })}
      {carts.length >= 1 && (
        <div className="botom">
          <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
          </div>
          <Pay totalPrice={ totalPrice()} />
          <span className="reset" onClick={() => dispatch(DELETE())}>
            Reset Cart
          </span>
        </div>
      )}
    </div>
  );
}
