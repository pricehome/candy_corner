import React, {Component} from "react"

export default class CandyList extends Component {
	render() {
		return (
			<section className="candies">
				<h1>Candy List</h1>
				{this.props.CandyList.map(candy => (
					<div key={this.props.CandyList.id}>
						<article>{candy}</article>
						<div>
							Candy:
							{candy.name}
						</div>
						<div>
							Type:
							{
								this.props.CandyType.find(type => type.id === candy.candyTypeId)
									.type
							}
						</div>
					</div>
				))}
			</section>
		)
	}
}
