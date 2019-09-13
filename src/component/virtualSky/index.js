import React, { Component } from 'react'
import buttons from './toggle/buttons'
import Iframe from './toggle/iframe'
import LatLon from './toggle/latLon'
import '../../css/virtualSky/virtualSky.css'
import '../../css/virtualSky/toggle.css'

class VirtualSky extends Component {
	state = {
		showOrbits: false,
		showMeridian: false,
		showPlanets: false,
		showPlanetLabels: false,
		azimuthGridlines: false,
		constellationLabels: false,
		constellations: false,
		longitude: -119.86286000000001,
		latitude: 34.4326,
	}
	setToggle = ({ target }) => {
		let name = target.name
		this.setState({ [name]: !this.state[name] })
		if (!this.state[name]) {
			target.className = 'toggleButtons-clicked'
		} else {
			target.className = 'toggleButtons'
		}
	}
	setCoordinates = (latLon) => {
		this.setState({
			latitude: latLon.latitude,
			longitude: latLon.longitude,
		})
	}
	render() {
		const settings = `longitude=${this.state.longitude}&\
latitude=${this.state.longitude}&\
showplanets=${this.state.showPlanets}&\
showplanetlabels=${this.state.showPlanetLabels}&\
constellations=${this.state.constellations}&\
showstarlabels=false&\
scalestars=1.3&\
showorbits=${this.state.showOrbits}&\
meridian=${this.state.showMeridian}&\
gridlines_az=${this.state.azimuthGridlines}&\
constellationlabels=${this.state.constellationLabels}&\
showdate=false&\
projection=stereo&\
showposition=false&\
live=true&\
color=black&\
az=271.5665939727662`
		return (
			<div className="virtualSky-Wrapper">
				<LatLon setCoordinates={this.setCoordinates} />
				<div className="toggle-Wrapper">
					{buttons.map((info, i) => {
						return (
							<div key={i} className="button-container-1 toggle">
								<button
									type="submit"
									onClick={this.setToggle}
									name={info.name}
									className="toggleButtons"
								>
									{info.buttonName}
								</button>
							</div>
						)
					})}
				</div>
				<Iframe settings={settings} />
			</div>
		)
	}
}
export default VirtualSky
