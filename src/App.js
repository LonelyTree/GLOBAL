import React,{Component} from 'react';
import Global from './component/global/Global'
import FrontPage from './component/frontPage/frontPage'


class App extends Component{
  state={
    logged: false
  }

  userLogin=(e) => {
  this.setState({logged: !this.state.logged})
}
render(){
  return (
    <div className="App">
      {this.state.logged&&<Global />}
  <FrontPage userLogin={this.userLogin} />
    </div>
  );
}
}
export default App;
