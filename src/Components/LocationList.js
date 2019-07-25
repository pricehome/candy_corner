import React, {Component} from "react"

export default class LocationList extends Component {
	render() {
		return (
			<section className="store">
				<h3>Location List</h3>
				{this.props.locationList.map(store => (
					<div key={store.id}>
						<article>
							{store.name}
							{store.address}
						</article>
					</div>
				))}
			</section>
		)
	}
}
