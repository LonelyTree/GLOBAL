import React,{Component} from 'react';
import ToggleDiv from '../toggle/toggleVirtualSky'

class VirtualSky extends Component {
    state={
        showStarLabels: false,
        showOrbits: false,
        showMeridian: false,
        showPlanets: false,
        showPlanetLabels: false,
        azimuthGridlines: false,
        constellationLabels: false,
        constellations: false
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
            <ToggleDiv/>
            <iframe title="virtualSky" style={{
                height: '70vh',
                width: '70vw',
                position: "absolute",
                borderRadius: "10px",
                border: "solid",
                zIndex: '1',
                scrolling: "no",
                left: "0",
                right: "0",
                marginTop: "14vh",
                marginLeft: "auto",
                marginRight: "auto",
                allowTransparency: "true"
            }}
                src={`https://virtualsky.lco.global/embed/index.html?${settings}`}
        >
                </iframe>
                </div>
        );
    }
}
export default VirtualSky;




