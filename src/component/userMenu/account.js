import React,{Component} from 'react'
import styled from 'styled-components'
import video from '../../../src/Background1.mp4'
import Particles from '../particles/particles'

const Files=styled.div`
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


class Account extends Component{
    state={
        username: '',
        password: ''
    }

    handleChange=(e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submit=() => {
        
    }
    render() {
        return (<Files>
            <Particles/>
            <Container>
                 <Editor>
                    <input value={this.state.value} name="username" onChange={this.handleChange}></input>
                    <input value={this.state.value} name="password" onChange={this.handleChange}></input>
                    <input type="submit" value="Delete User"></input>
                </Editor>
                <MovingBackground className="account" loop={true} autoPlay={true} muted={true} playsInline={true} >
                        <source src={video} type="video/mp4"/>
                </MovingBackground>
            </Container>
        </Files>)
    }
}
export default Account