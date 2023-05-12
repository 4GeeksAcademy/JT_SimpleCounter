//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import { matchRoutes } from "react-router";
import Home from "./component/home.jsx";
//import your own components

let counter = 0;
setInterval(function() {
        const six = Math.floor(counter/100000);
        const five = Math.floor(counter/10000);
        const four = Math.floor(counter/1000);
        const three = Math.floor(counter/100);
        const two = Math.floor(counter/10);
        const one = Math.floor(counter/1);

        counter++;

        ReactDOM.render(<Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app")
        );
    }, 1000);


