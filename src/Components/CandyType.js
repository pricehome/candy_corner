import React, {Component} from "react"

export default class CandyType extends Component {
	render() {
		return (
			<section className="CandyType">
				<h1>Candy Type</h1>
				<div>
					{this.props.CandyType.map(CandyType => (
						<article>{CandyType}</article>
					))}
				</div>
			</section>
		)
	}
}
