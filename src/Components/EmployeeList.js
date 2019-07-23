import React, {Component} from "react"

export default class EmployeeList extends Component {
	render() {
		return (
			<section className="employee">
				<h1>Employee List</h1>
				{this.props.EmployeeList.map(employee => (
					<div key={this.props.EmployeeList.id}>
						<article>{employee}</article>
					</div>
				))}
			</section>
		)
	}
}
