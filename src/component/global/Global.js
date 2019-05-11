import React,{Component} from 'react';
import ReactGlobal from 'react-globe'
import VirtualSky from '../virtualSky/virtualSky'

class Global extends Component {
    state={
        skyVisible: false
    }

    virtualSkyHandler=e => {
        this.setState({skyVisible: !this.state.skyVisible})
    }

    render() {
        return (
<div style={{ height: '100vh', width: '100vw'}}>
    {this.state.skyVisible&&<VirtualSky />}
<button type="submit" onClick={this.virtualSkyHandler}>Open</button>
    <ReactGlobal
        globeOptions={{
        backgroundTexture: "./Images/8k_stars_milky_way.png",
        cloudsTexture: "./Images/8k_earth_clouds.png",
        texture: "./Images/8k_earth_nightmap_copy.png",
        cloudsSpeed: 0.1,
        cloudsOpacity: 0.2,
        enableClouds: true,
        glowCoefficient: 0.05,
        glowColor: 'gold',
        glowPower: 30,
        glowRadiusScale: 1,
        enableGlow: true,
        }}
        lightOptions={{
        pointLightColor: 'rgb(255, 175, 5)',
        pointLightIntensity: 2,
        pointLightPositionRadiusScales: [-2, 0, -1],
        }}

        />
</div>
        );
    }
}
export default Global;

