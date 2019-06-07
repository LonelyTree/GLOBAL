import React, {Component} from 'react'
import styled from "styled-components"

const ToggleWrapper=styled.div`
height: 70vh;
width: 72vw;
position: absolute;
zIndex: 1;
scrolling: no;
text-align: center;
left: 0;
margin-top: 9vh;
margin-left: 14vw;
allow-transparency: true
`
const NavDiv=styled.div`
    position: absolute;
    z-index: 5;
    margin-left: 35vh;
    margin-top: 70vh;
    font-size: 2vh;
`
const Lat=styled.div`
    position: absolute;
    margin-left: 2.5vh;
    color: white;
    letter-spacing: 0.5vh;
    text-align: center;
`
const Lon=styled.div`
    position: absolute;
    margin-left: 42vh;
    position: absolute;
    color: white;
    letter-spacing: 0.5vh;
    text-align: center;
`
const InputCoords=styled.input`
    background: black;
    height: 3vh;
    width: 20vh;
    color: white;
    font-family: Major Mono Display;
    font-weight: 600;
`
const SendIt = styled.button`
    position: absolute;
    width: 8vh;
    margin-left: 28vh;
    height: 8vh;
    margin-top: -2.5vh;
    border-radius: 100%;
    font-size: 1.8vh;
    font-weight: 500;
    letter-spacing: 0.1vh;
    border: solid 0.08vh #ffffff;
    background: #00b8ff;
    box-shadow: inset 0px 0px 2vh 0px black
`



class ToggleDiv extends Component{
    state={
        longitude: '',
        latitude: ''
    }
    handleChange=(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    liftUp=() => {
        this.props.setCoordinates(this.state)
        this.setState({
        longitude: '',
        latitude: ''})
    }
    toggle=(e) => {
        this.props.setToggle(e.target.name)
    }

    render() {
        return (
            <ToggleWrapper>
                <div className="button-container-1 toggle">
                    <div>
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="showPlanets">PLANETS</button>
                    </div>
                </div>
                <div className="button-container-1 toggle">
                    <div>
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="showPlanetLabels">PLANET LABELS</button>
                    </div>
                </div>
                <div className="button-container-1 toggle">
                    <div >
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="showMeridian">MERIDIAN</button>
                    </div>
                </div>
                <div className="button-container-1 toggle">
                    <div>
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="showOrbits">ORBITS</button>
                    </div>
                </div>
                <div className="button-container-1 toggle">
                    <div>
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="showStarLabels">STAR LABELS</button>
                    </div>
                </div>
                <div className="button-container-1 toggle">
                    <div>
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="azimuthGridlines">GRID LINES</button>
                    </div>
                </div>
                <div className="button-container-1 toggle">
                    <div>
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="constellations">CONSTELATIONS</button>
                    </div>
                </div>
                <div className="button-container-1 toggle">
                    <div>
                        <span className="mas toggle">TOGGLE</span>
                        <button className='button toggle' type="submit" onClick={this.toggle} name="constellationLabels">CONSTL. NAMES</button>
                    </div>
                </div>
                <NavDiv>
                    <Lat>
                        <h3>LATITUDE</h3>
                        <InputCoords type="text" value={this.state.latitude} name="latitude" onChange={this.handleChange}/>
                    </Lat>
                    <Lon>
                        <h3>LONGITUDE</h3>
                        <InputCoords type="text" value={this.state.longitude} name="longitude" onChange={this.handleChange}/>
                    </Lon>
                        <br/>
                    <SendIt type="submit" value="TRAVEL" onClick={this.liftUp}>TRAVEL</SendIt>
                </NavDiv>
            </ToggleWrapper>
        )
    }
}

export default ToggleDiv