import React, { Component } from "react";
import Card from "./CardList";
// import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll"
import './main.css'

const Style = {
	heading: {
		textShadow: '2px 2px 8px #FFFFFF',
		color: '#fc9f81',		//'#fcb69f',
		'&:hover': {
			border: '1px solid black',
			cursor: 'pointer',
		},
	},
}

class Main extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(responce => responce.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});

		return !robots.length
			? <h1 id="main-heading" className="m-4" style={Style.heading}>Loading...</h1>
			: (
				<div className="" style={{ textAlign: "center" }}>
					<div className="text-center m-3">
						<h2 id="main-heading" style={Style.heading}>
							Robo Friends
						</h2>
						<SearchBox searchChange={this.onSearchChange} />
					</div>

					<Scroll>
						<Card robots={filteredRobots} />
					</Scroll>
				</div>
			);
	}
}

export default Main;
