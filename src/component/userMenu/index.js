import React from 'react'
import '../../css/userMenu/userMenu.css'

const UserMenu = () => {
	return (
		<div className="user-Wrapper">
			<div className="account-button">
				<a href="/account">ACCOUNT</a>
			</div>
			<div className="backpack-button">
				<a href="/backpack">BACKPACK</a>
			</div>
		</div>
	)
}

export default UserMenu
