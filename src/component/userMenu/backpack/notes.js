import React,{Component} from 'react'
import styled from 'styled-components'
import video from '../../../../src/Notes.mp4'
import Particles from '../../particles/particles'
// import {Redirect} from 'react-router-dom'

const Anchor=styled.div`
position: absolute;
    width: 200vh;
    height: 100vw;
`
const Container=styled.div`
    position: absolute;
    border-radius: 100%;
    width: 200vh;
    height: 100vw;
    background: #23232c;
    overflow:hidden;
`
const MovingBackground=styled.video`
    width: 100%;
    height: 57%;
`
const Editor=styled.div`
    position: absolute;
    margin-left: 61vh;
    width: 80vh;
    height: 50vw;
    background: #3c3c7d45;
`



class Notes extends Component{
    render() {
        return (<Anchor>
            <Particles/>
            <Container>
                <Editor>

                </Editor>
                <MovingBackground className="account" loop={true} autoPlay={true} muted={true} playsInline={true} >
                        <source src={video} type="video/mp4"/>
                </MovingBackground>
            </Container>
        </Anchor>)
    }
}


export default Notes