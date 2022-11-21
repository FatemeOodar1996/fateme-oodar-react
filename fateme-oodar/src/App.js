import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Exprianse from "./components/Exprianse";
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
            <Exprianse />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
