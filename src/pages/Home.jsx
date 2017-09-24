import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class HomePage extends Component {
  render(props) {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NavLink to="/contact">Deez Nutz</NavLink>

      </div>
    );
  }
}

export default HomePage;
