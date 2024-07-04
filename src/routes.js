import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";

const RoutesScreen = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
        </Routes>
    </BrowserRouter>
)

export default RoutesScreen