import React,{Component} from 'react';
import ToggleDiv from '../toggle/toggleVirtualSky'
import styled from "styled-components"

const IframeWrangler = styled.iframe`
height: 70vh;
width: 70vw;
position: absolute;
border-radius: 10% 10% 10% 10%;
border: none;
z-index: 1;
scrolling: no;
left: 0;
right: 0;
margin-top: 14vh;
margin-left: auto;
margin-right: auto;
allow-transparency: true
`
class VirtualSky extends Component {
    state={
        showStarLabels: false,
        showOrbits: false,
        showMeridian: false,
        showPlanets: false,
        showPlanetLabels: false,
        azimuthGridlines: true,
        constellationLabels: false,
        constellations: false
    }
    setToggle=(data) => {
        this.setState({[data]: !this.state[data]})
    }
    render() {
        const settings=`longitude=-119.86286000000001&\
showplanets=${this.state.showPlanets}&\
showplanetlabels=${this.state.showPlanetLabels}&\
latitude=34.4326&\
constellations=${this.state.constellations}&\
showstarlabels=${this.state.showStarLabels}&\
scalestars=1.3&\
showorbits=${this.state.showOrbits}&\
meridian=${this.state.showMeridian}&\
gridlines_az=${this.state.azimuthGridlines}&\
constellationlabels=${this.state.constellationLabels}&\
showdate=false&\
projection=stereo&\
showposition=false&\
live=true&\
color=black&\
az=271.5665939727662`


        return (
            <div>
                <ToggleDiv setToggle={this.setToggle} />
                <IframeWrangler title="virtualSky" style={{
                            // height: '70vh',
                            // width: '70vw',
                            // position: "absolute",
                            // borderRadius: "100% 100% 10% 10%",
                            // border: "none",
                            // zIndex: '1',
                            // scrolling: "no",
                            // left: "0",
                            // right: "0",
                            // marginTop: "14vh",
                            // marginLeft: "auto",
                            // marginRight: "auto",
                            // allowTransparency: "true"
                        }}
                            src={`https://virtualsky.lco.global/embed/index.html?${settings}`}>
                    </IframeWrangler>
                </div>
        );
    }
}
export default VirtualSky;




