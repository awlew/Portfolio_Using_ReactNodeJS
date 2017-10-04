import React, { Component } from 'react';
import WorkIPUC from '../MacroComponent/WIPUCpage.jsx';
class ContactInfo extends Component {
  render(props) {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Contact Information</h2>
        </div>
        <p className="App-intro">
          <WorkIPUC/>
        </p>
      </div>
    );
  }
}

export default ContactInfo;
