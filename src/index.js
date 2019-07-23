import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import CandyCorner from "./CandyCorner"

ReactDOM.render(
	<Router>
		<CandyCorner />
	</Router>,
	document.getElementById("root")
)
