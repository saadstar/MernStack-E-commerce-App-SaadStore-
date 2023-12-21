import React from 'react'
import "./auth.scss";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Link } from 'react-router-dom';

export const Auth = (props) => {
  return (
    <div className="auth">
          <div className="accountItems">
              <Link to="/login" className='link'>
        <div className="authButton" onClick={() => props.setAccountOpen(false)}>
          <LoginIcon />
          <span>LOGIN</span>
                  </div>
              </Link>
        <Link to="/signup" className="link">
          <div
            className="authButton"
            onClick={() => props.setAccountOpen(false)}
          >
            <AssignmentIndIcon />
            <span>Sign in/Register</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
