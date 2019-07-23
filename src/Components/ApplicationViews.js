import {Route} from "react-router-dom"
import React, {Component} from "react"
import LocationList from "./LocationList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"

export default class ApplicationViews extends Component {
	state = {
		LocationList: [],
		EmployeeList: [],
		CandyType: [],
		CandyList: []
	}

	componentDidMount() {
		const newState = {}

		fetch("http://localhost:5002/employees")
			.then(r => r.json())
			.then(employee => (newState.employee = employee))
			.then(() => fetch("http://localhost:5002/CandyList").then(r => r.json()))
			.then(candies => (newState.candies = candies))
			.then(() => fetch("http://localhost:5002/store").then(r => r.json()))
			.then(store => (newState.candies = store))
			.then(() => this.setState(newState))
	}
	deleteCandy = id => {
		return fetch(`http://localhost:5002/CandyList/${id}`, {
			method: "DELETE"
		})
			.then(e => e.json())
			.then(() => fetch(`http://localhost:5002/CandyList`))
			.then(e => e.json())
			.then(CandyList =>
				this.setState({
					CandyList: CandyList
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
						return <LocationList LocationList={this.state.LocationList} />
					}}
				/>
				<Route
					exact
					path="/employees"
					render={props => {
						return <EmployeeList EmployeeList={this.state.EmployeeList} />
					}}
				/>
				<Route
					exact
					path="/CandyList"
					render={() => {
						return (
							<CandyList
								deleteCandy={this.deleteCandy}
								CandyList={this.state.CandyList}
							/>
						)
					}}
				/>
			</React.Fragment>
		)
	}
}
