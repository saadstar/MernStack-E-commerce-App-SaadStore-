import React, { useContext, useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.scss";
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { Auth } from '../Auth/Auth';
import { AuthContext } from '../AuthContext/AuthContext';
import LogoutIcon from "@mui/icons-material/Logout";
import { WishList } from '../WishList/WishList';


export const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);
  const carts = useSelector((state) => state.Reducer.cart);
  const wishlists = useSelector((state) => state.Reducer.wishlist);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate("");
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
       dispatch({ type: "LOGOUT" });
       localStorage.removeItem("user");
       navigate("/login");
    } catch (err) {      
       dispatch({ type: "LOGIN_FAILED",payload:err });
    }
  }
  return (
    <div className="navBar">
      <img
        className="base-img__inner base-img__cover"
        src="//img.ltwebstatic.com/images3_ccc/2023/09/26/9a/1695710207ea755d60afdd087091d68a495505037c.jpg"
        alt=""
      ></img>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="lang" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link
              to="/products/1"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Men
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/1"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Women
            </Link>
          </div>
          <div className="item">
            <Link
              to="/products/1"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Children
            </Link>
          </div>
        </div>
        <div className="item">
          <Link to="/" className="link" style={{ textDecoration: "none" }}>
            <p className="saadstore">SAADSTORE</p>
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              HomePage
            </Link>
          </div>
          <div className="item">
            <Link
              to="/about"
              className="link"
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
          </div>
          <div className="item">
            <Link
              to="/contact"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
          <div className="item">
            <Link
              to="/store"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            {user ? (
              <LogoutIcon onClick={logoutHandler} />
            ) : (
              <PersonOutlineOutlinedIcon
                onClick={() => setAccountOpen(!accountOpen)}
              />
            )}
            <div className="cartIcon" onClick={() => setWishOpen(!wishOpen)}>
              <FavoriteBorderOutlinedIcon />
              <span>{wishlists.length}</span>
            </div>
            <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCartOutlinedIcon />
              <span>{carts.length}</span>
            </div>
            <Link className="cartIcon" style={{ color: "#777 !important" }} to="/order">
              <LocalShippingIcon />
            </Link>
          </div>
        </div>
      </div>
      {cartOpen && <Cart />}
      {wishOpen && <WishList />}
      {accountOpen && <Auth setAccountOpen={setAccountOpen} />}
    </div>
  );
}
