import React, {Component} from "react"
// import Image from "./Components/Layout/Image"

export default class CandyList extends Component {
	render() {
		return (
			<section className="candies">
				<h1>Candy List</h1>
				{this.props.candyList.map(candy => (
					<div key={candy.id} className="card">
						<div className="card-body">
							<div className="card-title">
								{/* <image src={candy} className="candy-icon" /> */}
								<h5>Candy Name</h5>
								<button
									onClick={() => this.props.deleteCandy(candy.id)}
									className="card-link"
								>
									Delete
								</button>
								Candy:
								{candy.name}
								{candy.candy_type.name}
							</div>
						</div>
					</div>
				))}
			</section>
		)
	}
}
