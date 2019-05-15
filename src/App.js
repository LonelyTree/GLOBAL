import React,{Component} from 'react';
import Global from './component/global/Global'
import FrontPage from './component/frontPage/frontPage'
import Music from './component/player/music'


class App extends Component{
  state={
    logged: false
  }

  componentDidMount() {
    // var audio = document.getElementById("audio");
    // audio.play();
  }

  userLogin=(login) => {
    if(login.logged) {
      this.setState({
        logged: !this.state.logged,
        name: login.name
      })
    }
}
  render() {
  const logged = this.state.logged
  return (
    <div className="App">
      <Music audioSources={["https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ufhklDs1k2.mp3","https://s1.vocaroo.com/media/download_temp/Vocaroo_s1TqHehK0FmE.mp3","https://s1.vocaroo.com/media/download_temp/Vocaroo_s17RtUOoWiqD.mp3"]} />

      {/* <audio id="audio" src="https://s1.vocaroo.com/media/download_temp/Vocaroo_s1TqHehK0FmE.mp3"  loop autoPlay></audio> */}
      {/* <audio id="audio" src="https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ufhklDs1k2.mp3" ></audio>
      <audio id="audio" src="https://s1.vocaroo.com/media/download_temp/Vocaroo_s17RtUOoWiqD.mp3" ></audio> */}

      { logged
        ?(<Global />)
        :(<FrontPage logged={this.userLogin} />)}

    </div>
  );
}
}
export default App;
