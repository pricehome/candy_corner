import React, {Component} from "react"
import {Link} from "react-router-dom"

export class Footer extends Component {
	render() {
		return (
			<div>
				<React.Fragment>
					<footer className="page-footer light-blue">
						<div className="container" />
						<div className="footer-copyright">
							<div className="container">
								© 2019 Copyright Text
								<Link className="grey-text text-lighten-2 right">More</Link>
							</div>
						</div>
					</footer>
				</React.Fragment>
			</div>
		)
	}
}

export default Footer
