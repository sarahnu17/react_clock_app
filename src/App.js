import React, { Component } from 'react';
import Header from "./components/layout/Header";
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Clock />
      </div> 
    )
  }
}

export default App;

