import React, { Component } from 'react'
import video from '../../../../src/media/backgroundVideo/Notes.mp4'
import Particles from '../../particles'
import Logout from '../../globalButtons/logout'
import MainReturn from '../../globalButtons/MainMenu'

import { withAuthorization, AuthUserContext } from '../../session'
import '../../../css/userMenu/notes.css'

class Notes extends Component {
	render() {
		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<div className="note-anchor">
						<Particles />
						<MainReturn />
						<Logout />
						<div className="note-container">
							<div className="note-editor">
								<h1 className="note-h1">SAVED NOTES</h1>
								<h1 className="note-h1">NEW NOTE</h1>
								<form className="note-form">
									{/* INPUT SAVED NOTES HERE */}
									<textarea className="note-submissions" />
									<button className="note-button" type="submit">
										SAVE
									</button>
								</form>
							</div>
							<video
								className="account note-movingBackground"
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

export default withAuthorization(condition)(Notes)
