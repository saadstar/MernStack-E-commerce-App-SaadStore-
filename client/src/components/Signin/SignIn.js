import React,{useContext, useState} from 'react'
import "./signin.scss";
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignIn = () => {
  const [inputs, setInputs] = useState({});
  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate("");

  const changeHandler = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://saadstore.onrender.com/api/auth/login",
        {
          ...inputs,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
      setInputs({});
    } catch (err) {      
      dispatch({ type: "LOGIN_FAILED", payload: err });
    }
  }
  return (
    <div className="signUp">
      <div className="wrapper">
        <h1>Sign In</h1>
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
              <label className="label">Password:</label>
              <input
                required={true}
                type="password"
                name="password"
                onChange={changeHandler}
              />
            </div>
            <div className="item" onClick={loginHandler}>
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
