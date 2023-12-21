import React from "react";
import "../usersFeatures/user.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DeleteProduct = (props) => {
  const navigate = useNavigate("");

  const deleteProduct = async () => {
    try{
      await axios.delete(
        `http://localhost:3500/api/products/${props.deleteId}`
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setDeleteOpen(false)}>
          X
        </span>
        <h1>{`DELETE ${props.slug}`}</h1>
        <div className="">
          <p className="item">Are You Sure You Want To Delete This Product ?</p>
          <div className="deleteButtons">
            <button className="deleteButton" onClick={deleteProduct}>
              DELETE
            </button>
            <button
              className="cancelButton"
              onClick={() => props.setDeleteOpen(false)}
            >
              CANCLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
