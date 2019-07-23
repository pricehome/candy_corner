import React, {Component} from "react"

export default class LocationList extends Component {
	render() {
		return (
			<section className="store">
				<h1>Location List</h1>
				{this.props.LocationList.map(store => (
					<div key={this.props.LocationList.id}>
						<article>{store}</article>
					</div>
				))}
			</section>
		)
	}
}
