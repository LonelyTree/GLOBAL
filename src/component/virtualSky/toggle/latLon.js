import React, { Component } from 'react'

class LatLon extends Component {
	state = {
		latitude: '',
		longitude: '',
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	liftUp = () => {
		this.props.setCoordinates(this.state)
		this.setState({
			latitude: '',
			longitude: '',
		})
	}
	render() {
		return (
			<div className="nav">
				<div className="lat">
					<h3>LATITUDE</h3>
					<input
						className="inputCoords"
						type="text"
						value={this.state.latitude}
						name="latitude"
						onChange={this.handleChange}
					/>
				</div>
				<button
					className="sendIt"
					type="submit"
					value="TRAVEL"
					onClick={this.liftUp}
				>
					TRAVEL
				</button>
				<div className="lon">
					<h3>LONGITUDE</h3>
					<input
						className="inputCoords"
						type="text"
						value={this.state.longitude}
						name="longitude"
						onChange={this.handleChange}
					/>
				</div>
			</div>
		)
	}
}

export default LatLon
