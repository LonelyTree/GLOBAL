import React from 'react'
import styled from 'styled-components'

const Global = styled.a`
	position: absolute;
	width: 11vw;
	height: 2.3vw;
	background: #131228;
	left: 3vw;
	top: 5vw;
	border-radius: 1vw;
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	font-size: 1.3vw;
	box-shadow: inset 0 0 1vw black;
	color: white;
	font-family: Major Mono Display;
	text-align: center;
`

const MainReturn = () => {
	return <Global href="/global">MAIN PAGE</Global>
}

export default MainReturn
