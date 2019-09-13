import React, { Component } from 'react'
import { withFirebase } from '../../firebase/'
import * as ROUTES from '../../../constants/routes'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import styled from 'styled-components'

const LogoutButton = styled.a`
	position: absolute;
	z-index: 30;
	margin-left: 4%;
	margin-top: 2%;
	height: 4%;
	width: 9%;
	background: #15132b;
	border: none;
	border-radius: 6vh;
	cursor: pointer;
	font-family: Major Mono Display;
	font-size: 1.3vw;
	box-shadow: inset 0 0 1vw black;
	text-align: center;
	line-height: 2vw;
`
const INITIAL_STATE = {
	email: '',
	password: '',
	regEmail: '',
	regPassword: '',
	regPasswordTwo: '',
	error: null,
}
class LogoutBase extends Component {
	exit = (event) => {
		this.props.firebase
			.doSignOut()
			.then((authUser) => {
				this.setState({ ...INITIAL_STATE })
				this.props.history.push(ROUTES.LANDING)
			})
			.catch((error) => {
				this.setState({ error })
			})
		event.preventDefault()
	}
	render() {
		return <LogoutButton onClick={this.exit}>LOGOUT</LogoutButton>
	}
}
const Logout = compose(
	withRouter,
	withFirebase
)(LogoutBase)

export default Logout
