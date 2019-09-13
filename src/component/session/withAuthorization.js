import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import Landing from '../landing'

import AuthUserContext from './context'
import { withFirebase } from '../firebase'
import * as ROUTES from '../../constants/routes'

const withAuthorization = (condition) => (Component) => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			this.listener = this.props.firebase.auth.onAuthStateChanged(
				(authUser) => {
					if (!condition(authUser)) {
						this.props.history.push(ROUTES.LANDING)
					}
				}
			)
		}
		componentWillUnmount() {
			this.listener()
		}
		render() {
			return (
				<AuthUserContext.Consumer>
					{(authUser) =>
						condition(authUser) ? <Component {...this.props} /> : <Landing />
					}
				</AuthUserContext.Consumer>
			)
		}
	}
	return compose(
		withRouter,
		withFirebase
	)(WithAuthorization)
}
export default withAuthorization
