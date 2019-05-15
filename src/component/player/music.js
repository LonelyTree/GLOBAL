import React from 'react'
import styled from "styled-components"

const ButtonLoc=styled.button`
    position: absolute;
    margin-left: 190vh;
    margin-top: 2vh;
    height: 7vh;
    width: 4.1vw;
    background: #2e3b762e;
    border: none;
    border-radius: 6vh;
    cursor: pointer;
    font-family: 'Lato',sans-serif;
    font-weight: 300;
    font-size: 3vh;
    color: #ed255373;
`
class Music extends React.Component {
state = {
    play: false,
    activeAudioIndex: 0
}

    // audio=new Audio("https://s1.vocaroo.com/media/download_temp/Vocaroo_s1TqHehK0FmE.mp3")

    audio = new Audio()


togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
    });
}

getInitialState=()=>{
    return {
    activeAudioIndex: 0
    }
}

componentDidMount=() => {
    this.audio.src=this.props.audioSources[this.state.activeAudioIndex]
    this.audio.play()
    this.audio.onended = this.nextSong(this.togglePlay())
    this.audio.addEventListener("ended", this.nextSong())
}

nextSong=()=> {
    const nextSongIndex = this.state.activeAudioIndex + 1
    this.audio.src=this.props.audioSources[nextSongIndex]
    if(this.state.activeAudioIndex===(this.props.audioSources.length-1)) {
        this.setState({activeAudioIndex: 0})
    }
    if(this.audio.src===null) {
        this.nextSong().play()
    }
    this.setState({activeAudioIndex: nextSongIndex})
}


render() {
    if(this.audio===null) {
        this.nextSong().play();
    }
    return (
        <div style={{position: "absolute", zIndex: "30"}} >
        <ButtonLoc onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</ButtonLoc>
        </div>
    );
    }
}

export default Music;