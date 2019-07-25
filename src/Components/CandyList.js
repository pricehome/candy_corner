import React, {Component} from "react"
import "./Candy.css"
// import "./Layout/Image"

export default class CandyList extends Component {
	render() {
		return (
			<section className="candies">
				<h3>Candy List</h3>

				{this.props.candyList.map(candy => (
					<div key={candy.id} className="card">
						<div className="card-body">
							<div className="card-title">
								{/* <img src={Image} className="candy-img" alt="peppermint" /> */}
								<h4>Candy Name</h4>
								<button
									onClick={() => this.props.deleteCandy(candy.id)}
									className="card-link"
								>
									Delete
								</button>
								Candy:
								{candy.name}
								{candy.candyType.name}
							</div>
						</div>
					</div>
				))}
			</section>
		)
	}
}
