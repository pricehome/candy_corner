import React, {Component} from "react"

export default class EmployeeList extends Component {
	render() {
		return (
			<section className="employee">
				<h1>Employee List</h1>
				{this.props.employeeList.map(employee => (
					<div key={employee.id}>
						<article>{employee.name}</article>
					</div>
				))}
			</section>
		)
	}
}
