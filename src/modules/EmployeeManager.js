import React, {Component} from "react"

export default class EmployeeManager extends Component {
	state = {
		saveDisabled: false
	}

	render() {
		return (
			<section className="employee">
				<div key={this.props.employee.id} className="card">
					<div className="card-body">
						<h4 className="card-title">{this.props.employee.name}</h4>
						<h6 className="card-title">{this.props.employee.name}</h6>
						<button
							onClick={() => {
								this.setState({saveDisabled: true}, () =>
									this.props.deleteEmployee(this.props.employee.id)
								)
							}}
							disabled={this.state.saveDisabled}
							className="card-link"
						>
							Delete
						</button>
					</div>
				</div>
			</section>
		)
	}
}
