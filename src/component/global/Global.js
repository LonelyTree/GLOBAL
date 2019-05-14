import React,{Component} from 'react';
import ReactGlobal from 'react-globe'
// import styled from 'styled-components'
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
                <div className="button-container-1">
                    <div onClick={this.virtualSkyHandler} style={{height: '6vh'}}>
                        <span className="mas">NIGHTSKY</span>
                        <button type="submit" >VIEW</button>
                    </div>
                </div>

    <ReactGlobal
        globeOptions={{
        backgroundTexture: "./GlobalTextures/8k_stars_milky_way.png",
        cloudsTexture: "./GlobalTextures/8k_earth_clouds.png",
        texture: "./GlobalTextures/8k_earth_nightmap_copy.png",
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
                <iframe title="musical" src="./music/musicPlaylist.m3u" allow="autoplay" style={{"display":"none"}} id="iframeAudio">
</iframe>
    </div>
        );
    }
}
export default Global;



    // <div className="button-container-2">
    //     <span className="mas">MASK2</span>
    // <button type="button" name="Hover">MASK2</button>
    // </div>


