import React, { Component } from 'react'
import ReactGlobe from 'react-globe'
import VirtualSky from '../virtualSky'
import UserMenu from '../userMenu'
import Logout from '../globalButtons/logout'
import AtomSpinner from '../atomSpinner'
import Particle from '../particles'

import { withAuthorization, AuthUserContext } from '../session'
import '../../css/main.css'

class Global extends Component {
	state = {
		skyVisible: false,
		isLoading: true,
		view: { name: 'VIEW', class: 'viewSky-off' },
	}

	virtualSkyHandler = () => {
		this.setState({ skyVisible: !this.state.skyVisible })
		if (this.state.view.name === 'VIEW') {
			this.setState({ view: { name: 'EXIT', class: 'viewSky-on' } })
		} else {
			this.setState({ view: { name: 'VIEW', class: 'viewSky-off' } })
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false })
		}, 2000)
	}
	render() {
		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<div className="main-Wrapper">
						{this.state.isLoading && (
							<div style={{ zIndex: '100' }}>
								<Particle />
								<AtomSpinner />
							</div>
						)}
						<Logout />
						<UserMenu
							logger={this.props.logger}
							state={this.props.state}
							{...this.props}
						/>

						{this.state.skyVisible && <VirtualSky />}

						<div className="viewSky-Wrapper">
							<button
								onClick={this.virtualSkyHandler}
								className={this.state.view.class}
								type="submit"
							>
								{this.state.view.name}
							</button>
						</div>
						<div className="globe-Wrapper">
							<ReactGlobe
								globeOptions={{
									backgroundTexture: `https://raw.githubusercontent.com/LonelyTree/GLOBAL/master/src/media/GlobalTextures/galaxy.png`,
									cloudsTexture: `https://raw.githubusercontent.com/LonelyTree/GLOBAL/master/src/media/GlobalTextures/earthClouds.jpg`,
									texture: `https://raw.githubusercontent.com/LonelyTree/GLOBAL/master/src/media/GlobalTextures/earthNight.png`,
									cloudsSpeed: 0.1,
									cloudsOpacity: 0.2,
									enableClouds: true,
									glowCoefficient: 0.05,
									glowColor: 'gold',
									glowPower: 30,
									glowRadiusScale: 1,
									enableGlow: true,
								}}
								lightOptions={{
									pointLightColor: 'rgb(255, 175, 5)',
									pointLightIntensity: 2,
									pointLightPositionRadiusScales: [-2, 0, -1],
								}}
								cameraOptions={{
									enableZoom: false,
								}}
							/>
						</div>
					</div>
				)}
			</AuthUserContext.Consumer>
		)
	}
}

const condition = (authUser) => !!authUser

export default withAuthorization(condition)(Global)
