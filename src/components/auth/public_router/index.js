import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => (
    localStorage.getItem('user') ? <Navigate to='/notes' /> : <>{children}</>
)

export default PublicRoute