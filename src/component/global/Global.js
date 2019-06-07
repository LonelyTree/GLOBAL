import React,{Component} from 'react';
import ReactGlobal from 'react-globe'
import VirtualSky from '../virtualSky/virtualSky'
import styled from 'styled-components'
import UserMenu from '../userMenu/userMenu'
import Logout from '../logout/logout'
import AtomSpinner from '../atomSpinner/atomSpinner'
import Particle from '../particles/particles';

const Wrapper=styled.div`
    position: absolute;
    width: 14vw;
    height: 100vh;
    margin-left: 43vw;
    margin-top: 86.6vh;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    transition: 0.5s;
    letter-spacing: 1px;
`
const View=styled.button`
    transition: 0.5s;
    border-radius: 2vh 2vh 12vh 12vh;
    box-shadow: inset 0 0 15px #000000;
    width: 100%;
    background: #2d2d547a;
    height: 12vh;
    font-family: 'Lato',sans-serif;
    font-weight: 300;
    line-height: 18vh;
    font-size: 20px;
    z-index: 10;
    letter-spacing: 1px;
    -webkit-mask-image: radial-gradient(circle 5vh at center -307px,transparent 0,transparent 361px,#1b1f2c 21px);
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
    box-shadow: inset 0 0 36px #0c99862e;
    }
`

class Global extends Component {

    state={
        skyVisible: false,
        isLoading: true
    }

    virtualSkyHandler=e => {
        this.setState({skyVisible: !this.state.skyVisible})
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
    },2000)
}
    render() {
        return (
            <div style={{height: '100vh',width: '100vw'}}>
                {this.state.isLoading&&(<div><Particle/><AtomSpinner /></div>)}
                <Logout logger={this.props.logger} state={this.props.state}/>
    <UserMenu logger={this.props.logger} state={this.props.state} {...this.props} />
        {this.state.skyVisible&&<VirtualSky />}
                <Wrapper>
                    <div onClick={this.virtualSkyHandler} style={{height: '6vh'}}>
                        <View type="submit" >VIEW</View>
                    </div>
                </Wrapper>

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
        cameraOptions={{
        enableZoom: false,
        }}
                />
    </div>
        );
    }
}
export default Global;



    // <div className="button-container-2">
    //     <span className="mas">MASK2</span>
    // <button type="button" name="Hover">MASK2</button>
    // </div>


