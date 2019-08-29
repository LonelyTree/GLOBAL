import React, { Component } from 'react'
import styled from 'styled-components'
import video from '../../../../src/media/backgroundVideo/Coordinates.mp4'
import Particles from '../../particles'

const Anchor = styled.div`
	position: absolute;
	width: 200vh;
	height: 100vw;
`
const Container = styled.div`
	position: absolute;
	margin-top: 23vh;
	width: 200vh;
	height: 25vw;
	background: #23232c;
	overflow: hidden;
`
const MovingBackground = styled.video`
	width: 201vh;
	height: 113vh;
	transform: rotate(180deg);
`
const Editor = styled.div`
	position: absolute;
	z-index: 5;
	margin-left: 55vh;
	width: 80vh;
	height: 53vw;
	background: #3c3c7d45;
	box-shadow: 0 0 58px #000000d1;
	overflow: scroll;
`
const Heading = styled.h3`
	position: relative;
	text-align: center;
	margin-top: 2vh;
	line-height: 6vh;
	font-family: Major Mono Display;
	font-size: 3vh;
	color: #ff0078;
`
const InfoWrapper = styled.div`
	position: relative;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	background: #00000075;
	border-radius: 8vh 8vh 5vh 5vh;
	height: 5vh;
	line-height: 2vh;
	box-shadow: inset 0px 0px 1.4vh 0px #048ffc7d;
`
const Info = styled.p`
	position: absolute;
	margin-left: 34vh;
	font-size: 3vh;
	color: white;
	margin-top: 2vh;
	font-weight: 500;
`
const New = styled.input`
	position: relative;
	margin-left: 27vh;
	margin-top: 6vh;
	height: 4vh;
	width: 27vh;
	text-align: center;
	font-size: 2.5vh;
	font-family: Major Mono Display;
	border-radius: 0.4vh 0.4vh 1vh 1vh;
	box-shadow: inset 0 0 1vh black;
	background: #00000061;
	color: white;
	font-weight: 600;
	margin-bottom: 3vh;
`
const Travel = styled.button`
	position: relative;
	width: 6vh;
	margin-left: 3vh;
	height: 5.6vh;
	border-radius: 100%;
	margin-top: -0.3vh;
	background: #007effc4;
	border: 0.06vh solid white;
	box-shadow: inset 0 0 1.5vh black;
	color: #ffffff;
	cursor: pointer;
`

class Coordinates extends Component {
	state = {
		lat: '',
		lon: '',
		coordinates: [],
	}

	// viewSky=(e)={

	// }
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	populateCoordinates = () => {
		this.coordinate = this.state.coordinates.map((coordinate, key) => (
			<div key={coordinate._id}>
				<Heading>Coordinates #{coordinate._id.slice(-1)}</Heading>
				<InfoWrapper>
					<Info
						style={{
							position: 'relative',
							display: 'inline-block',
							marginLeft: '3vh',
						}}
					>
						LAT={coordinate.lat}
					</Info>
					<Info
						style={{
							position: 'relative',
							display: 'inline-block',
							marginLeft: '3vh',
						}}
					>
						LONG={coordinate.lon}
					</Info>
					<div>
						<Travel type="submit">VIEW SKY</Travel>
					</div>
				</InfoWrapper>
			</div>
		))
	}

	getCoordinates = async () => {
		try {
			const coordinatesFetch = await fetch(
				'http://localhost:9000/backpack/coordinates',
				{
					method: 'GET',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const parsedResponse = await coordinatesFetch.json()
			console.log(parsedResponse)
			if (parsedResponse.status === 200) {
				this.setState({ coordinates: parsedResponse.data })
				this.populateCoordinates()
			}
		} catch (e) {
			console.log(e)
		}
	}

	postCoordinates = async (e) => {
		e.preventDefault()
		try {
			const coordinatesFetch = await fetch(
				`http://localhost:9000/backpack/coordinates/${this.state.lat}/${this.state.lon}`,
				{
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const parsedResponse = await coordinatesFetch.json()
			console.log(parsedResponse.data)
			if (parsedResponse.status === 200) {
				this.setState({ coordinates: parsedResponse.data })
				this.populateCoordinates()
			}
		} catch (e) {
			console.log(e)
		}
	}
	componentDidMount() {
		this.getCoordinates()
	}
	render() {
		this.populateCoordinates()
		return (
			<Anchor>
				<Particles />
				<Editor style={{ background: '#21212cc2' }}>
					<Heading>Saved Coordinates:</Heading>
					<br />
					{this.coordinate}
					<br />
					<Heading>Enter New Coordinates to Save?</Heading>
					<br />
					<Info>LATITUDE</Info>
					<New
						type="text"
						value={this.state.value}
						name="lat"
						onChange={this.handleChange}
					></New>
					<Info style={{ marginLeft: '33vh' }}>LONGITUDE</Info>
					<New
						type="text"
						value={this.state.value}
						name="lon"
						onChange={this.handleChange}
					></New>
					<New type="submit" onClick={this.postCoordinates} />
				</Editor>
				<Container>
					<MovingBackground
						className="account"
						loop={true}
						autoPlay={true}
						muted={true}
						playsInline={true}
						reverse={true}
					>
						<source src={video} type="video/mp4" />
					</MovingBackground>
				</Container>
			</Anchor>
		)
	}
}

export default Coordinates
