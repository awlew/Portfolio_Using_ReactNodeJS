import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from 'react-side-bar';

const sidebarProps = {
    bar: (<div>Amazing Sidebar</div>),
    opened: this.state.opened,
    onClose: () => {
        this.setState({ opened: false })
    },
    onOpen: () => {
        this.setState({ opened: true })
    },
    size: 200
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Sidebar {... sidebarProps} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        Deez Nutz
      </div>
    );
  }
}

export default App;
