import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./wishList.scss";


export const WishList = () => {
    const wishlists = useSelector((state) => state.Reducer.wishlist);
  const dispatch = useDispatch();
  
  return (
    <div className="wishlist">
      {wishlists.length === 0 ? (
        <div className="emptyCart">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/saadstore-ed76a.appspot.com/o/emptyCart.png?alt=media&token=4b8ec5d1-ff1c-4f6d-be3c-82cbe4ba0935"
            }
            alt="empty-cart"
          />
          <h4>Your WishList is Empty</h4>
        </div>
      ) : (
        <h1>Wishlist</h1>
      )}
      {wishlists?.map((item) => {
        return (
          <div className="item" key={item._id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item?.desc?.substring(0, 100)}</p>
              <div className="price ">{`$${item.price}`}</div>
            </div>
            <DeleteOutlineIcon
              className="delete"
              onClick={() => dispatch({ type: "REMOVE_WISH", payload: item })}
            />
          </div>
        );
      })}
          {!wishlists.length == 0  &&
              <div onClick={() => dispatch({ type: "DELETE_ALL_WISHES" })}>
        <span className="reset">
          Reset Cart
        </span>
      </div>}
    </div>
  );
}
