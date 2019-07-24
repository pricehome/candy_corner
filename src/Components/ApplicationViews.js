import {Route} from "react-router-dom"
import React, {Component} from "react"
import LocationList from "./LocationList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"

export default class ApplicationViews extends Component {
	state = {
		stores: [],
		employees: [],
		candy_types: [],
		candy_list: []
	}

	componentDidMount() {
		const newState = {}

		fetch("http://localhost:5002/employees")
			.then(r => r.json())
			.then(employees => (newState.employees = employees))
			.then(() =>
				fetch("http://localhost:5002/candy_list?_expand=candy_type").then(r =>
					r.json()
				)
			)
			.then(candies => (newState.candy_list = candies))
			.then(() => fetch("http://localhost:5002/stores").then(r => r.json()))
			.then(stores => (newState.stores = stores))
			.then(() => this.setState(newState))
	}
	deleteCandy = id => {
		return fetch(`http://localhost:5002/candy_list/${id}`, {
			method: "DELETE"
		})
			.then(e => e.json())
			.then(() => fetch(`http://localhost:5002/candy_list`))
			.then(e => e.json())
			.then(candylist =>
				this.setState({
					candy_list: candylist
				})
			)
	}

	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path="/"
					render={props => {
						return <LocationList locationList={this.state.stores} />
					}}
				/>
				<Route
					exact
					path="/employees"
					render={props => {
						return <EmployeeList employeeList={this.state.employees} />
					}}
				/>
				<Route
					exact
					path="/candy_list"
					render={() => {
						return (
							<CandyList
								deleteCandy={this.deleteCandy}
								candyList={this.state.candy_list}
								candyType={this.state.candy_type}
							/>
						)
					}}
				/>
			</React.Fragment>
		)
	}
}
