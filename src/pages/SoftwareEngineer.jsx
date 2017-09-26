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

  render() {
    const rPages = [ { pName:'Summary', pVal:'summaryP'},
          { pName:'Technical Skills', pVal:'techSk'},
          { pName:'Work Experience', pVal:'wExp'},
          { pName:'Projects', pVal:'wProjects'},
          { pName:'Academic Courses', pVal:'ACourses'},
    ];
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
