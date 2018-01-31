import React, { Component } from 'react';
import logo                 from './logo.svg';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import AppNavbar            from './components/AppNavbar.js'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100vh' }}>
        <AppNavbar />
      </div>
    );
  }
}

export default App;
