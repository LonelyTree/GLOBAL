import React, { Component } from 'react'
import video from '../../../../src/media/backgroundVideo/Coordinates.mp4'
import Particles from '../../particles'
import Logout from '../../globalButtons/logout'
import MainReturn from '../../globalButtons/MainMenu'

import { withAuthorization, AuthUserContext } from '../../session'
import '../../../css/userMenu/coordinates.css'

class Coordinates extends Component {
	state = {
		lat: '',
		lon: '',
		coordinates: [],
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	populateCoordinates = () => {
		this.coordinate = this.state.coordinates.map((coordinate, key) => (
			<div key={coordinate._id}>
				<h3 className="coord-heading">
					Coordinates #{coordinate._id.slice(-1)}
				</h3>
				<div className="info-wrapper">
					<p className="coord-info">LAT={coordinate.lat}</p>
					<p className="coord-info">LONG={coordinate.lon}</p>
					<div>
						<button className="coord-travel" type="submit">
							VIEW SKY
						</button>
					</div>
				</div>
			</div>
		))
	}

	getCoordinates = async () => {
		try {
			const coordinatesFetch = await fetch(
				'http://localhost:9000/backpack/coordinates',
				{
					method: 'GET',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const parsedResponse = await coordinatesFetch.json()
			console.log(parsedResponse)
			if (parsedResponse.status === 200) {
				this.setState({ coordinates: parsedResponse.data })
				this.populateCoordinates()
			}
		} catch (e) {
			console.log(e)
		}
	}

	postCoordinates = async (e) => {
		e.preventDefault()
		try {
			const coordinatesFetch = await fetch(
				`http://localhost:9000/backpack/coordinates/${this.state.lat}/${this.state.lon}`,
				{
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const parsedResponse = await coordinatesFetch.json()
			console.log(parsedResponse.data)
			if (parsedResponse.status === 200) {
				this.setState({ coordinates: parsedResponse.data })
				this.populateCoordinates()
			}
		} catch (e) {
			console.log(e)
		}
	}
	componentDidMount() {
		this.getCoordinates()
	}
	render() {
		this.populateCoordinates()
		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<div className="coord-anchor">
						<Particles />
						<MainReturn />
						<Logout />
						<div className="coord-editor">
							<h3 className="coord-heading">Saved Coordinates:</h3>
							<br />
							{this.coordinate}
							<br />
							<h3 className="coord-heading">Enter New Coordinates to Save?</h3>
							<br />
							<p className="coord-info">LATITUDE</p>
							<input
								className="coord-new"
								type="text"
								value={this.state.value}
								name="lat"
								onChange={this.handleChange}
							></input>
							<p className="coord-info">LONGITUDE</p>
							<input
								className="coord-new"
								type="text"
								value={this.state.value}
								name="lon"
								onChange={this.handleChange}
							></input>
							<input
								className="coord-new"
								type="submit"
								onClick={this.postCoordinates}
							/>
						</div>
						<div className="coord-container">
							<video
								className="coord-movingBackground"
								loop={true}
								autoPlay={true}
								muted={true}
								playsInline={true}
								reverse="true"
							>
								<source src={video} type="video/mp4" />
							</video>
						</div>
					</div>
				)}
			</AuthUserContext.Consumer>
		)
	}
}
const condition = (authUser) => !!authUser

export default withAuthorization(condition)(Coordinates)
