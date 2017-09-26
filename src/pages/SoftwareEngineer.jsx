import React, { Component }  from 'react';



import StatusPanel from '../MacroComponent/StatusPanel.jsx';

class SoftwareEngineer extends Component {
  constructor() {
    super();
    this.state={
      showmodal: false,
      yoURL: '',
      renderedPanel: '',
    };
  }

  alertClicked(hewrl) {
    this.setState({yoURL: hewrl, showmodal : true});
  }

  close() {
    this.setState({showmodal: false});
  }

  alertRender(rP){
    this.setState({renderedPanel: rP});
  }

  render() {
    const rPages = {
      'Summary':'summaryP',
      'Technical Skills': 'techSk',
      'Work Experience': 'wExp',
      'Projects' : 'wProjects',
    };
    return(
      <div>
        <StatusPanel
          navPages={rPages}
          uName='Adam Wayne Lew'
          uJob='Software Engineer : Embedded / Web Developer'
          />
      </div>
    );
  }
}

export default SoftwareEngineer;
