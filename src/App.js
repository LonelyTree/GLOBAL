import React,{Component} from 'react';
import Global from './component/global/Global'
import FrontPage from './component/frontPage/frontPage'


class App extends Component{
  state={
    logged: false
  }

  userLogin=(login) => {
    if(login.logged) {
      this.setState({
        logged: !this.state.logged,
        name: login.name
      })
    }
}
render(){
  return (
    <div className="App">
      {this.state.logged&&<Global />}
  <FrontPage logged={this.userLogin} />
    </div>
  );
}
}
export default App;
