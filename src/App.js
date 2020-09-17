import React from 'react';
import ReactDOM from "react-dom";
import News from './News'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-h">HN</div>
        <div className="main-menu">
          <ul>
            <li className="active"><a href="">Top</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Ask</a></li>
            <li><a href="">Job</a></li>
          </ul>
        </div>
      </header>
      <div className="container">
        <News/>
      </div>
    </div>
  );
}

export default App;
