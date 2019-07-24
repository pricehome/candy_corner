import React, {Component} from "react"

export default class CandyList extends Component {
	render() {
		return (
			<section className="candies">
				<h1>Candy List</h1>
				{this.props.candyList.map(candy => (
					<div key={candy.id}>
						{" "}
						className
						<div>
							Candy:
							{candy.name}
							{candy.candy_type.name}
						</div>
					</div>
				))}
			</section>
		)
	}
}
