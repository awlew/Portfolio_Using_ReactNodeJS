import React, { Component } from 'react';

import WorkIPUC from '../MacroComponent/WIPUCpage.jsx';

class HomePage extends Component {
  render(props) {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Adam Wayne Lew</h2>
        </div>
        <div>
            <h3>To co-create an enjoyable world through enjoyable technologies; one smile at a time.</h3>
        </div>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <WorkIPUC/>

      </div>
    );
  }
}

export default HomePage;
