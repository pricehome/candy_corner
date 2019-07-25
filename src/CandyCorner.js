import React, {Component} from "react"
import NavBar from "./Components/Layout/NavBar"
import ApplicationViews from "./Components/ApplicationViews"
import Footer from "./Components/Layout/Footer"

export default class CandyCorner extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<ApplicationViews />
				<Footer />
			</React.Fragment>
		)
	}
}
