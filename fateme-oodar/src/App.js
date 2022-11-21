import React from "react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import MyProject from "./pages/MyProject";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/MyProject/:projectName" element={<MyProject />}></Route>
                <Route path="/MyProject" element={<MyProject />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
