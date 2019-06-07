import React,{Component} from 'react'
import styled from 'styled-components'
import video from '../../../../src/Apod.mp4'
import Particles from '../../particles/particles'

const Anchor=styled.div`
position: absolute;
    width: 200vh;
    height: 100vw;
`
const Container=styled.div`
    position: absolute;
    margin-left: 50vh;
    border-radius: 100%;
    width: 100vh;
    height: 50.1vw;
    background: #23232c;
    overflow: hidden;
`
const MovingBackground=styled.video`
    width: 183%;
    height: 103%;
`
const Viewer=styled.div`
    position: absolute;
    z-index: 5;
    margin-left: 61vh;
    width: 80vh;
    height: 50vw;
    background: #3c3c7d45;
`
const Title=styled.h1`
    font-size: 5.5vh;
    text-align: center;
    font-family: Major Mono Display;
    line-height: 10vh;
    color: #fb005fc4;
`
const NASA=styled.img`
    height: 46vh;
    margin-top: -3vh;
`
const DescWrapper=styled.div`
    overflow: scroll;
    height: 30vh;
    border: .01vh solid;
    width: 80vh;
    box-shadow: inset 0 0 10px black;
    background: #0000006e;
`

const Desc=styled.p`
    color: #00ffe5;
    font-weight: 800;
    line-height: 2.9vh;
    margin: 3vh;
`


class Apod extends Component{
    state={
        date: "",
        description: "",
        image: "",

}

componentDidMount() {
fetch("https://api.nasa.gov/planetary/apod?api_key=OZ51NKR2tWSduaBYJUhYNtHL3vLghOjbd6Ipzcle")
    .then(response => response.json())
    .then(data => this.setState({
        date: data.date,
        description: data.explanation,
        image: data.hdurl
    }));
}

    render() {
        return (<Anchor>
            <Particles/>
            <Viewer>
                <Title>NASA's ASTRONOMY PICTURE OF THE DAY</Title>
                <p>{this.state.date}</p>
                <NASA src={this.state.image} alt="None Today" />
                <DescWrapper>
                    <Desc>{this.state.description}</Desc>
                </DescWrapper>
                </Viewer>
            <Container>
                <MovingBackground className="account" loop={true} autoPlay={true} muted={true} playsInline={true} >
                        <source src={video} type="video/mp4"/>
                </MovingBackground>
            </Container>
        </Anchor>)
    }
}

export default Apod