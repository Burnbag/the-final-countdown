import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./Counter";
import Visitors from "./Visitors";
import Like from "./Like";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Counter />, document.getElementById("root"));
ReactDOM.render(<Visitors />, document.getElementById("visitors"))
ReactDOM.render(<Like />, document.getElementById("like"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
