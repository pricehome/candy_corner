import React, {Component} from "react"
import {Link} from "react-router-dom"

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
				<ul className="nav nav-pills">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Stores
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/employees">
							Employee List
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/CandyList">
							Candy List
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}
export default NavBar
