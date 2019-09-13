import React, { Component } from 'react'
import video from '../../../src/media/backgroundVideo/Nebula_8.mp4'
import MainReturn from '../globalButtons/MainMenu'
import Logout from '../globalButtons/logout'
import Particles from '../particles'

import { withAuthorization, AuthUserContext } from '../session'
import '../../css/userMenu/account.css'
class Account extends Component {
	state = {
		username: '',
		password: '',
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submit = () => {}
	render() {
		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<div className="account-files">
						<Particles />
						<div className="account-container">
							<Logout />
							<MainReturn />
							<div className="account-editor">
								<h1 className="account-h1">EMAIL</h1>
								<input
									className="account-submissions"
									value={this.state.value}
									name="username"
									onChange={this.handleChange}
								></input>
								<h1 className="account-h1">PASSWORD</h1>
								<input
									className="account-submissions"
									value={this.state.value}
									name="password"
									onChange={this.handleChange}
								></input>
								<button className="account-buttons" type="submit">
									Delete User
								</button>
								<button className="account-buttons" type="submit">
									Update User
								</button>
							</div>
							<video
								className="account account-movingBackground"
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

export default withAuthorization(condition)(Account)
