/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";

// [Import local folders/files]
// * Components
import { Navbar } from "../index";
// * Form Components
import AuthForm from './AuthForm'
// // * stylesheets
import "./AuthCommon.scss";
// * api-helpers 
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";


/* ------------------------------ Main function ----------------------------- */

const Auth = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    // console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
    navigate("/");
  };
  const getData = (data) => {
    // console.log(data);
    sendUserAuthRequest(data.inputs, data.signup)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };

  return (
    <div className='auth_common'>
      <Navbar />
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth