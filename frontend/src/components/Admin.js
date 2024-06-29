/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store";

// [Import local folders/files]
import { Navbar } from "../index";
// * Form Components
import AuthForm from './AuthForm'
// // * stylesheets
import "./AuthCommon.scss";
// * api-helpers 
import { sendAdminAuthRequest } from "../../api-helpers/api-helpers";

/* ------------------------------ Main function ----------------------------- */

const Admin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    // console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token", data.token);
    navigate("/");
  };
  const getData = (data) => {
    // console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };

  return (
    <div className='auth_common'>
      <Navbar />
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  )
}

export default Admin