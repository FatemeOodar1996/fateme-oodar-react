import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}

export default App;
