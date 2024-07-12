import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => (
    localStorage.getItem('user') ? <>{children}</> : <Navigate to='/login' />
)

export default PrivateRoute