import React, { useEffect, useState } from 'react'
import "./product.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { Loading } from "../../components/Loading/Loading";
import { useDispatch } from 'react-redux';
import {ADD} from "../../components/Redux/Actions"

export const Product = () => {
  const [counter, setCounter] = useState(1);
  const id = useParams().id;
  const [data, setData] = useState([]);
  const [selectedImg, seteSelectedImg] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://saadstore.onrender.com/api/products/${id}`
      );
      seteSelectedImg(res.data.img)
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data._id]);
  return (
    <div className="product">
      {data.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={data.img}
                alt=""
                onClick={() => seteSelectedImg(data.img)}
              />
              <img
                src={data?.img2}
                alt=""
                onClick={() => seteSelectedImg(data?.img2)}
              />
            </div>
            <div className="mainImg">
              <img src={selectedImg} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data.title}</h1>
            <span className="price">${data.price}</span>
            <p>{data?.desc}</p>
            <div className="quantity">
              <button
                onClick={() => setCounter(counter === 1 ? 1 : counter - 1)}
              >
                -
              </button>
              <span max={100} min={0}>
                {counter}
              </span>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() => dispatch(ADD({ ...data, counter }))}
            >
              <AddShoppingCartIcon />
              ADD TO CART
            </button>
            <div className="links">
              <div className="item" onClick={()=>dispatch({type:"ADD_WISH",payload:data})}>
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-shirt</span>
              <span>Tag: {data?.category},Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
