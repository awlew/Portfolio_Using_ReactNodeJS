import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class WorkIPUC extends Component {
  render(props) {
    return (
      <div className="App">
        <div className="App-headerUC">
          <h2>Under Construction</h2>
        </div>
        <p className="App-intro">
          <p>Commander we are supply capped, but are constructing additonal pylons!</p> <br/>
          <ProgressBar>
            <ProgressBar striped active bsStyle="success" now={33} />
            <ProgressBar striped  bsStyle="danger" now={66} />
          </ProgressBar>  <br/>

        Progress can be tracked at this <a href="https://github.com/awlew/Portfolio_Using_ReactNodeJS">Github repository. </a> <br/>
        <br/>
      <b className="WIPBOLD">Navigate with the "Main Menu" button on the top left and enjoy the rest of the site!</b> <br/>
        </p>

      </div>
    );
  }
}

export default WorkIPUC;
