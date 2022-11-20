import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expriense from "./components/Expriense";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Expriense />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
