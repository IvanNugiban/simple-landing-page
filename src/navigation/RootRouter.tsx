import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";

const RootRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<MainPage/>}></Route>
        </Routes>
    );
};

export default RootRouter;