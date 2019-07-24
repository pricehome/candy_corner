import React, {Component} from "react"
import NavBar from "./Components/Layout/NavBar"
import ApplicationViews from "./Components/ApplicationViews"
// import "bootstrap/dist/css/bootstrap.min.css"

export default class CandyCorner extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<ApplicationViews />
			</React.Fragment>
		)
	}
}
