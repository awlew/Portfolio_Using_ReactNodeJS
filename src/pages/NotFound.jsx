import React, { Component } from 'react';

import WorkIPUC from '../MacroComponent/WIPUCpage.jsx';

class NotFoundPage extends Component {
  render(props) {
    return (
      <div className="App">
        <div className="NotFoundHeader">
          <h2>404 Not Found</h2>
        </div>
        <p className="App-intro">
          Save file doesn't exist! <br/>
          Time to restart that playthrough.


        </p>

      </div>
    );
  }
}

export default NotFoundPage;
