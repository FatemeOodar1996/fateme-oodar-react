import React from "react";
import { Hero, About, Exprianse, Projects, Contact, Footer } from "../components";

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Exprianse />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
