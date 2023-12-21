import React, { useContext, useState } from 'react'
import "./signup.scss";
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
    const [inputs, setInputs] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate("");

    const changeHandler = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
  };
  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://saadstore.onrender.com/api/auth/register",
        { ...inputs, isAdmin }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/signin");
      setInputs({});
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="signUp">
      <div className="wrapper">
        <h1>Sign Up/Register</h1>
        <div>
          <form>
            <div className="item">
              <label className="label" htmlFor="username">
                Username:
              </label>
              <input
                required={true}
                type="text"
                name="username"
                onChange={changeHandler}
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input
                required={true}
                type="email"
                onChange={changeHandler}
                name="email"
              />
            </div>
            <div className="item">
              <label className="label">Password:</label>
              <input
                required={true}
                type="password"
                name="password"
                onChange={changeHandler}
              />
            </div>
            <div className="item">
              <label className="label" htmlFor="confirm">
                Confirm Password:
              </label>
              <input required={true} type="password" />
            </div>
            <div className="item" style={{ flexDirection: "row" }}>
              <input required={true} type="checkbox" className='admin' name="admin" onClick={()=>setIsAdmin(!isAdmin)} />
              <label className="label" htmlFor="admin">
                Admin
              </label>
            </div>
            <div className="item" onClick={registerHandler}>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
