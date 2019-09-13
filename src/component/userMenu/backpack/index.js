import React, { Component } from 'react'
import video from '../../../../src/media/backgroundVideo/Nebula_8.mp4'
import Particles from '../../particles'
import Logout from '../../globalButtons/logout'
import MainReturn from '../../globalButtons/MainMenu'

import { withAuthorization, AuthUserContext } from '../../session'
import '../../../css/userMenu/backpack.css'

class Backpack extends Component {
	render() {
		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<div className="backpack-wrapper">
						<Particles />
						<Logout />
						<MainReturn />
						<div className="backpack-container">
							<div className="backpack-contents">
								<a
									href="/coordinates"
									className="backpack-submissions"
									type="submit"
									name="coordinates"
									onClick={this.toCoordinates}
								>
									COORDINATES
								</a>
								<a
									href="/apod"
									className="backpack-submissions"
									type="submit"
									name="favorites"
									onClick={this.toAPOD}
								>
									NASA APOD
								</a>
								<a
									href="/notes"
									className="backpack-submissions"
									type="submit"
									name="notes"
									onClick={this.toNotes}
								>
									NOTES
								</a>
							</div>
							<video
								className="account backpack-background"
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

export default withAuthorization(condition)(Backpack)
