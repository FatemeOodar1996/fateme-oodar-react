import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Menu from "./Menu";

import "./App.css";

function App() {
    return (
        // <Router>
        // 	<div className="App">
        // 		<Navbar />
        // 		<Route path="/" component={Home} />
        // 		<Route path="/page/:id" component={Page} />
        // 	</div>
        // </Router>
        <Navbar />
    );
}

// const Page = ({id}) => {
// 	return(
// 		<>
// 			<h3>Page {id}</h3>
// 			<p>Lorem ipsum doloret lorem ipsum ipsum dolorem</p>
// 		</>
// 	)
// }

export default App;
