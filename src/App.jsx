import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
const App = () => {
    const [sidebar, setSidebar] = useState(true);
    return (
        <div>
            <Navbar setSidebar={setSidebar} />
            <Routes>
                <Route path="/" element={<Home sidebar={sidebar} />} />
                <Route path="/video/:categoryId/:videoId" element={<video />} />
            </Routes>
        </div>
    );
};
export default App; 