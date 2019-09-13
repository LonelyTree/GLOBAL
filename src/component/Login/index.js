import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../firebase'
import * as ROUTES from '../../constants/routes'
import '../../css/login.css'

const LoginPage = () => <Login />

const INITIAL_STATE = {
	email: '',
	password: '',
	regEmail: '',
	regPassword: '',
	regPasswordTwo: '',
	error: null,
}
class LoginBase extends Component {
	state = { ...INITIAL_STATE }
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	Register = (e) => {
		const { regEmail, regPassword } = this.state
		this.props.firebase
			.doCreateUserWithEmailAndPassword(regEmail, regPassword)
			.then((authUser) => {
				this.setState({ authUser: true, ...INITIAL_STATE })
				this.props.history.push(ROUTES.HOME)
			})
			.catch((error) => {
				alert(error.message)
			})
		e.preventDefault()
	}
	SignIn = (e) => {
		const { email, password } = this.state
		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ ...INITIAL_STATE })
				this.props.history.push(ROUTES.HOME)
			})
			.catch((error) => {
				alert(error.message)
			})
		e.preventDefault()
	}

	render() {
		const {
			email,
			password,
			regEmail,
			regPassword,
			regPasswordTwo,
		} = this.state
		const noSignIn = password === '' || email === ''
		const noRegister = regPassword !== regPasswordTwo || regEmail === ''
		return (
			<div className="material-Container">
				<form id="login" onSubmit={this.SignIn}>
					<div className="box">
						<div className="title">LOGIN</div>
						<div className="input">
							<label htmlFor="name">Email</label>
							<input
								type="text"
								name="email"
								id="name"
								onChange={this.handleChange}
							/>
							<span className="spin"></span>
						</div>
						<div className="input">
							<label htmlFor="pass">Password</label>
							<input
								type="password"
								name="password"
								id="pass"
								onChange={this.handleChange}
							/>
							<span className="spin"></span>
						</div>

						<div className="button login">
							<button type="Submit" disabled={noSignIn}>
								<span>GO</span> <i className="fa fa-check"></i>
							</button>
						</div>
						<a href="/password-recover" className="pass-forgot">
							Forgot your password?
						</a>
					</div>
				</form>
				<form id="register" onSubmit={this.Register}>
					<div className="overbox">
						<div className="material-button alt-2">
							<span className="shape"></span>
						</div>
						<div className="title">REGISTER</div>
						<div className="input">
							<label htmlFor="regname">Email</label>
							<input
								type="text"
								name="regEmail"
								id="regname"
								onChange={this.handleChange}
							/>
							<span className="spin"></span>
						</div>
						<div className="input">
							<label htmlFor="regpass">Password</label>
							<input
								type="password"
								name="regPassword"
								id="regpass"
								onChange={this.handleChange}
							/>
							<span className="spin"></span>
						</div>
						<div className="input">
							<label htmlFor="reregpass">Repeat Password</label>
							<input
								type="password"
								name="regPasswordTwo"
								id="reregpass"
								onChange={this.handleChange}
							/>
							<span className="spin"></span>
						</div>
						<div className="button">
							<button type="submit" disabled={noRegister}>
								<span>SUBMIT</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
const Login = compose(
	withRouter,
	withFirebase
)(LoginBase)

export default LoginPage

export { Login, LoginBase }
