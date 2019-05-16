import React,{Component} from 'react'
import styled from 'styled-components'
import video from '../../../src/Background1.mp4'
import Particles from '../particles/particles'
import {Redirect} from 'react-router-dom'

const Bag=styled.div`
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

const Contents=styled.div`
    position: absolute;
    margin-left: 61vh;
    width: 80vh;
    height: 50vw;
    background: #3c3c7d45;
`
const MovingBackground=styled.video`
    width: 100%;
    height: 57%;
`
const Submissions=styled.button`
    position: relative;
    display: inline-block;
    z-index: 10;
    width: 40vh;
    height: 8vh;
    margin-left: 19vh;
    border-radius: 5vh 5vh 10vh 10vh;
    margin-top: 16vh;
    border: none;
    font-size: 4vh;
    font-family: Major Mono Display;
    text-align: center;
    box-shadow: 0 0 15px #ff0052;
    background: #fa0e5a85;
    cursor: pointer;
    transition: 2s;
    &:hover{
        box-shadow: 0 0 15px #00ffdc;
        background: #0efae485;
    }
`



class Backpack extends Component{
    state={
        coordinates: [],
        favorites: [],
        notes: [],
        coordinateClick: false,
        apodClick: false,
        notesClick: false
    }

    toCoordinates=() => {
        this.setState({coordinateClick: !this.state.coordinateClick})
    }
    toAPOD=() => {
        this.setState({apodClick: !this.state.apodClick})
    }
    toNotes=() => {
        this.setState({notesClick: !this.state.notesClick})
    }
    render() {
        if(this.state.coordinateClick) {
            return <Redirect to='/coordinates'/>
        }
        if(this.state.apodClick) {
            return <Redirect to='/apod'/>
        }
        if(this.state.notesClick) {
            return <Redirect to='/notes'/>
        }
        return(<Bag>
            <Particles/>
            <Container>
                <Contents>
                    <Submissions type="submit" name="coordinates" onClick={this.toCoordinates}>COORDINATES</Submissions>
                    <Submissions type="submit" name="favorites" onClick={this.toAPOD}>NASA APOD</Submissions>
                    <Submissions type="submit" name="notes" onClick={this.toNotes}>NOTES</Submissions>
                </Contents>
                <MovingBackground className="account" loop={true} autoPlay={true} muted={true} playsInline={true} >
                        <source src={video} type="video/mp4"/>
                </MovingBackground>
            </Container>
        </Bag>)
    }
}
export default Backpack