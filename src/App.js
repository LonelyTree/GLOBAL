import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Global from './component/main'
import FrontPage from './component/landing'
import Account from './component/userMenu/account'
import Backpack from './component/userMenu/backpack'
import Coordinates from './component/userMenu/backpack/coordinates'
import Apod from './component/userMenu/backpack/apod'
import Notes from './component/userMenu/backpack/notes'

import * as ROUTES from './constants/routes'
import withAuthentication from './component/session/withAuthentication'

const My404 = () => {
	return <div>You are lost</div>
}

const App = () => {
	return (
		<Router>
			<Route exact path={ROUTES.LANDING} component={FrontPage} />
			<Route exact path={ROUTES.HOME} component={Global} />
			<Route exact path={ROUTES.ACCOUNT} component={Account} />
			<Route exact path={ROUTES.BACKPACK} component={Backpack} />
			<Route exact path={ROUTES.COORDINATES} component={Coordinates} />
			<Route exact path={ROUTES.APOD} component={Apod} />
			<Route exact path={ROUTES.NOTES} component={Notes} />
			<Route component={My404} />
		</Router>
	)
}

export default withAuthentication(App)
