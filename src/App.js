import React,{Component} from 'react';
import Global from './component/global/Global'
import FrontPage from './component/frontPage/frontPage'


class App extends Component{
  state={
    logged: true
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
      <iframe title="musical" src="./music/musicPlaylist.m3u" allow="autoplay" style={{"display":"none"}} id="iframeAudio">
</iframe>
      { logged
        ?(<Global />)
        :(<FrontPage logged={this.userLogin} />)}
      
    </div>
  );
}
}
export default App;
