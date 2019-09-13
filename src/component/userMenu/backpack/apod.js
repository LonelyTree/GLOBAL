import React, { Component } from 'react'
import video from '../../../../src/media/backgroundVideo/Apod.mp4'
import Particles from '../../particles'
import Logout from '../../globalButtons/logout'
import MainReturn from '../../globalButtons/MainMenu'

import { withAuthorization, AuthUserContext } from '../../session'
import '../../../css/userMenu/apod.css'

class Apod extends Component {
	state = {}

	componentDidMount() {
		fetch(
			'https://api.nasa.gov/planetary/apod?api_key=OZ51NKR2tWSduaBYJUhYNtHL3vLghOjbd6Ipzcle'
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					date: data.date,
					description: data.explanation,
					image: data.hdurl,
					title: data.title,
				})
			)
	}

	render() {
		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<div className="apod-anchor">
						<Particles />
						<MainReturn />
						<Logout />
						<div className="apod-viewer">
							<h1 className="apod-title">
								NASA's ASTRONOMY PICTURE OF THE DAY
							</h1>
							<p className="apod-date">{this.state.date}</p>
							<p className="apod-date">{this.state.title}</p>
							<img
								className="apod-NASA"
								src={this.state.image}
								alt="None Today"
							/>
							<div className="apod-descWrapper">
								<p className="apod-desc">{this.state.description}</p>
							</div>
						</div>
						<div className="apod-container">
							<video
								className="account apod-movingBackground"
								loop={true}
								autoPlay={true}
								muted={true}
								playsInline={true}
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

export default withAuthorization(condition)(Apod)
