import React, {Component} from 'react';
import Global from './component/global/Global'
import FrontPage from './component/frontPage/frontPage'
import Account from './component/userMenu/account'
import Backpack from './component/userMenu/backpack'
import Coordinates from './component/userMenu/backpack/coordinates'
import Apod from './component/userMenu/backpack/apod'
import Notes from './component/userMenu/backpack/notes'
import {Route,Switch} from 'react-router-dom';
// import Music from './component/player/music'


const My404 = () =>{
  return (
    <div>
      You are lost
    </div>
    )
}


class App extends Component {
  state={
    logged: false
  }
  logger=(state) => {
      this.setState(state)
}
  render() {
    return (
      <main>
        {/* <Music audioSources={["https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ufhklDs1k2.mp3","https://s1.vocaroo.com/media/download_temp/Vocaroo_s1TqHehK0FmE.mp3","https://s1.vocaroo.com/media/download_temp/Vocaroo_s17RtUOoWiqD.mp3"]} /> */}
        <Switch>
          <Route exact path="/" render={(props) => <FrontPage logger={this.logger} state={this.state} {...props} />}/>
          <Route exact path="/global"  render={(props) => <Global logger={this.logger} state={this.state} {...props} />} />
          <Route exact path="/account" render={(props) => <Account logger={this.logger} state={this.state} {...props}/>} />
          <Route exact path="/backpack" render={(props) =><Backpack logger={this.logger} state={this.state} {...props}/>} />
          <Route exact path="/coordinates" render={(props) => <Coordinates logger={this.logger} state={this.state} {...props}/>} />
          <Route exact path="/apod" render={(props) => <Apod logger={this.logger} state={this.state } {...props}/>} />
          <Route exact path="/notes" render={(props) => <Notes logger={this.logger} state={this.state} {...props}/>} />
          <Route component={My404} />
        </Switch>
      </main>
    );
  }
}
export default App