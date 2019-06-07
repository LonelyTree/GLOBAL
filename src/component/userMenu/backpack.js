import React,{Component} from 'react'
import styled from 'styled-components'
import video from '../../../src/Background1.mp4'
import Particles from '../particles/particles'
import Logout from '../logout/logout'

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
    height: 53vw;
    background: #3c3c7d45;
`
const MovingBackground=styled.video`
    width: 95%;
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
        coordinateClick: false,
        apodClick: false,
        notesClick: false
    }

    toCoordinates=(e) => {
        this.setState({coordinateClick: !this.state.coordinateClick})
        this.props.history.push("/coordinates")
    }
    toAPOD=(e) => {
        this.setState({apodClick: !this.state.apodClick})
        this.props.history.push("/apod")
    }
    toNotes=(e) => {
        this.setState({notesClick: !this.state.notesClick})
        this.props.history.push("/notes")
    }
    componentDidMount() {
        
    }
    render() {
        return(<Bag>
            <Particles />
            <Logout logger={this.props.logger} state={this.props.state} />
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