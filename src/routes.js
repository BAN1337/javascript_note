import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UsersEditScreen from "./screens/users/edit";
import UserEditNameScreen from "./screens/users/edit/name";
import UserEditEmailScreen from "./screens/users/edit/email";
import UserEditPasswordScreen from "./screens/users/edit/password";
import NotificationScreen from "./screens/notification";

import PrivateRoute from "./components/auth/private_router";
import PublicRoute from "./components/auth/public_router";

const RoutesScreen = () => (
    <BrowserRouter>
        <Routes>
            <Route
                exact path="/"
                element={
                    <PublicRoute>
                        <HomeScreen />
                    </PublicRoute>
                }
            />
            <Route
                exact path="/register"
                element={
                    <PublicRoute>
                        <RegisterScreen />
                    </PublicRoute>
                }
            />
            <Route
                exact path="/login"
                element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                }
            />
            <Route
                exact path="/notes"
                element={
                    <PrivateRoute>
                        <NotesScreen />
                    </PrivateRoute>
                }
            />
            <Route
                exact path="/users/edit"
                element={
                    <PrivateRoute>
                        <UsersEditScreen />
                    </PrivateRoute>
                }
            />
            <Route
                exact path="/users/edit/email"
                element={
                    <PrivateRoute>
                        <UserEditEmailScreen />
                    </PrivateRoute>
                }
            />
            <Route
                exact path="/users/edit/password"
                element={
                    <PrivateRoute>
                        <UserEditPasswordScreen />
                    </PrivateRoute>
                }
            />
            <Route
                exact path="/users/edit/name"
                element={
                    <PrivateRoute>
                        <UserEditNameScreen />
                    </PrivateRoute>
                }
            />
            <Route
                exact path="/users/notification"
                element={
                    <PrivateRoute>
                        <NotificationScreen />
                    </PrivateRoute>
                }
            />
        </Routes>
    </BrowserRouter>
)

export default RoutesScreen