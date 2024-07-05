import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UsersEditScreen from "./screens/users/edit";

const RoutesScreen = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/register" element={<RegisterScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/notes" element={<NotesScreen />} />
            <Route exact path="/users/edit" element={<UsersEditScreen />} />
        </Routes>
    </BrowserRouter>
)

export default RoutesScreen