import React, { Component } from 'react';
import { Image }                from 'semantic-ui-react'
import logo                 from './logo.svg';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import AppNavbar            from './components/AppNavbar.js'
import Topbar              from './components/Topbar.js'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100vh' }}>
        <Topbar className='Topbar' style={{ paddingRight: '5px'}} />
        <AppNavbar />
      </div>
    );
  }
}

export default App;
