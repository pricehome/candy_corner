import React, {Component} from "react"

export default class LocationList extends Component {
	render() {
		return (
			<section className="store">
				<h1>Location List</h1>
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
