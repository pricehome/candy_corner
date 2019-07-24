import {Route} from "react-router-dom"
import React, {Component} from "react"
import ApiManager from "../modules/ApiManager"
import LocationList from "./LocationList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"
// import CandyDetail from "./Candy/CandyDetail"

export default class ApplicationViews extends Component {
	state = {
		stores: [],
		employees: [],
		candy_types: [],
		candy_list: []
	}

	componentDidMount() {
		const newState = {}

		ApiManager.getAll("stores")
			.then(stores => (newState.stores = stores))
			.then(() => ApiManager.getAll("employees"))
			.then(employees => (newState.employees = employees))
			.then(() => ApiManager.getAll("candy_types"))
			.then(candyType => (newState.candy_types = candyType))
			.then(() => ApiManager.getAllCandy("candy_list"))
			.then(candies => (newState.candy_list = candies))
			.then(() => {
				// console.log(newState);
			})
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
								candyTypes={this.state.candy_type}
							/>
						)
					}}
				/>
			</React.Fragment>
		)
	}
}
