import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Create from "./create/create";
import Beach from "./beach";


function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/beach" element={<Beach/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Router;