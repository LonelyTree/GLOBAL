import React,{Component} from 'react'
import styled from 'styled-components'
import video from '../../../../src/Coordinates.mp4'
import Particles from '../../particles/particles'
// import {Redirect} from 'react-router-dom'

const Anchor=styled.div`
    position: absolute;
    width: 200vh;
    height: 100vw;
`
const Container=styled.div`
    position: absolute;
    margin-top: 23vh;
    width: 200vh;
    height: 25vw;
    background: #23232c;
    overflow: hidden;
`
const MovingBackground=styled.video`
    width: 201vh;
    height: 113vh;
    transform: rotate(180deg);
`
const Editor=styled.div`
    position: absolute;
    z-index: 5;
    margin-left: 61vh;
    width: 80vh;
    height: 50vw;
    background: #3c3c7d45;
    box-shadow: 0 0 58px #000000d1;
`


// router.get('/:id/:item'



class Coordinates extends Component{
    state={
        lat: '',
        lon: '',
        coordinates:[]
    }

handleChange=(e) => {
    this.setState({[e.target.name]: e.target.value})
}

    populateCoordinates=() => {
        this.coordinate=this.state.coordinates.map((coordinate,key) =>
                <div key={coordinate.id}>
                <h3>Coordinates #{[coordinate.id]+1}</h3>
                <p>LAT={coordinate.lat}</p>
                <p>LON={coordinate.lon}</p></div>
                            )
        
}


getCoordinates = async () => {
        try {
            const coordinatesFetch = await fetch('http://localhost:9000/backpack/coordinates',{
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse=await coordinatesFetch.json();
            if(parsedResponse.status===200) {
                this.setState({coordinates:parsedResponse.data})
                this.populateCoordinates()
            }
        } catch (e) {
            console.log(e)
    }
}

postCoordinates=async (e) => {
    e.preventDefault();
    try {
        const coordinatesFetch=await fetch(`http://localhost:9000/backpack/coordinates/${this.state.lat}/${this.state.lon}`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedResponse = await coordinatesFetch.json();
        console.log(parsedResponse.data)
        if(parsedResponse.status===200) {
            this.setState({coordinates:parsedResponse.data})
            this.populateCoordinates()
        }
    } catch(e) {
        console.log(e)
    }
}
componentDidMount(){
            this.getCoordinates();
            this.populateCoordinates()
}
    render() {
        return (<Anchor>
            <Particles/>
            <Editor>
                <h3>Saved Coordinates:</h3>
                <br />
                {this.coordinate}
                <br/>
                <h3>Enter New Coordinates to Save?</h3>
                <br/>
                <p>LATITUDE</p>
                <input type="text" value={this.state.value} name="lat" onChange={this.handleChange}></input>
                <p>LONGITUTE</p>
                <input type="text" value={this.state.value} name="lon" onChange={this.handleChange}></input>
                <input type="submit" onClick={this.postCoordinates}/>
            </Editor>
            <Container>
                <MovingBackground className="account" loop={true} autoPlay={true} muted={true} playsInline={true} reverse={true} >
                        <source src={video} type="video/mp4"/>
                </MovingBackground>
            </Container>
        </Anchor>)
    }
}

export default Coordinates