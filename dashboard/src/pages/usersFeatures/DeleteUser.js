import React from "react";
import "./user.css";

export const DeleteUser = (props) => {
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // add new item
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setDeleteOpen(false)}>
          X
        </span>
        <h1>{`DELETE ${props.slug}`}</h1>
        <div className="">
          <p className="item">Are You Sure You Want To Delete This User ?</p>
          <div className="deleteButtons">
            <button className="deleteButton" onSubmit={handleSubmit}>
              DELETE
            </button>
            <button className="cancelButton" onClick={()=>props.setDeleteOpen(false)}>CANCLE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
