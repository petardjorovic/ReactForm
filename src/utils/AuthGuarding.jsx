import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function authGuarding({ children }) {
  const { userData } = useSelector((state) => state.userStore);

  if (userData.hasOwnProperty("firstName")) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}

export default authGuarding;
