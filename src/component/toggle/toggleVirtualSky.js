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

// const ToggleMeh=styled.button`
//     height: 4vh;
//     width: 8vw;
//     margin-left: .5vw;
//     border-radius: 100% 100% 0% 0%;
// `
class ToggleDiv extends Component{

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
                {/* <ToggleMeh type="submit" onClick={this.toggle} name="showPlanets">Planets</ToggleMeh>
                <ToggleMeh type="submit" onClick={this.toggle} name="showPlanetLabels">Planet Labels</ToggleMeh>
                <ToggleMeh type="submit" onClick={this.toggle} name="showMeridian">Meridian</ToggleMeh>
                <ToggleMeh type="submit" onClick={this.toggle} name="showOrbits">Orbit Paths</ToggleMeh>
                <ToggleMeh type="submit" onClick={this.toggle} name="showStarLabels">Star Labels</ToggleMeh>
                <ToggleMeh type="submit" onClick={this.toggle} name="azimuthGridlines">Grid Lines</ToggleMeh>
                <ToggleMeh type="submit" onClick={this.toggle} name="constellations">Constellations</ToggleMeh>
                <ToggleMeh type="submit" onClick={this.toggle} name="constellationLabels">Constellation Labels</ToggleMeh> */}
            </ToggleWrapper>
        )
    }
}

export default ToggleDiv