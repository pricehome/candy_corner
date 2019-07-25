import React, {Component} from "react"

export default class CandyType extends Component {
	render() {
		return (
			<section className="CandyType">
				<h3>Candy Type</h3>
				<div>
					{this.props.candyType.map(candyType => (
						<article>{candyType}</article>
					))}
				</div>
			</section>
		)
	}
}
