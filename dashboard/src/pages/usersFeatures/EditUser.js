import React from "react";
import "./user.css";

export const EditUser = (props) => {
  const form = [
    {
      id: "1",
      label: "Avatar",
      inputType: "text",
    },
    {
      id: "2",
      label: "FirstName",
      inputType: "text",
    },
    {
      id: "3",
      label: "LastName",
      inputType: "text",
    },
    {
      id: "4",
      label: "Email",
      inputType: "email",
    },
    {
      id: "5",
      label: "Phone",
      inputType: "text",
    },
    {
      id: "6",
      label: "Verified",
      inputType: "boolean",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // add new item
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setEditOpen(false)}>
          X
        </span>
        <h1>{`Edit ${props.slug}`}</h1>
        <form onSubmit={handleSubmit}>
          {form.map((item) => (
            <div key={item.id} className="item">
              <label className="label">{item.label}</label>
              <input type={item.inputType} placeholder={item.label} />
            </div>
          ))}
          <div className="item">
            <button className="">Upload a New Image</button>
          </div>
          <button className="addButton">Edit</button>
        </form>
      </div>
    </div>
  );
};
