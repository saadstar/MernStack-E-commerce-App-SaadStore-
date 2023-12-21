import React, { useState, useEffect } from "react";
import axios from "axios";
import "./user.css";

export const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

    const form = [
        {
            id:"1",
            label: "Username",
            inputType:"text"
        },
        {
            id:"2",
            label: "Email",
            inputType:"email"
        },
        {
            id:"3",
            label: "Password",
            inputType:"text"
        },
        {
            id:"4",
            label: "Admin",
            inputType:"checkbox"
        },
    ]
  const addUserSync = async () => {
    // add new user
    try {
      await axios.post("http://localhost:3500/api/auth/register", {
        username,
        email,
        password,
        isAdmin
      });
      props.setOpen(false);
      setEmail("");
      setPassword("");
      setUserName("");
      setIsAdmin("");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>{`Add new ${props.slug}`}</h1>
        <form onSubmit={addUserSync}>
          <div className="userItems">
            <div className="item">
              <label className="label" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                name="username"
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="username">
                Email:
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
          </div>
          <div className="userItems">
            <div className="item">
              <label className="label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="confirm">
                Confirm Password:
              </label>
              <input type="password" name="confirm" />
            </div>
          </div>
          <div className="isAdmin userItems">
            <label className="label" htmlFor="isAdmin">
              Admin
            </label>
            <input
              value={isAdmin}
              className="checkbox"
              type="checkbox"
              onClick={(e) => setIsAdmin(!isAdmin)}
              name="isAdmin"
            />
          </div>
          <button className="addButton" >Send</button>
        </form>
      </div>
    </div>
  );
}
