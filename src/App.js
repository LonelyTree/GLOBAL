import React from 'react';
import Global from './component/global/Global'
import FrontPage from './component/frontPage/frontPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <FrontPage/>
      <div>
        <Global/>
      </div>
    </div>
  );
}

export default App;
