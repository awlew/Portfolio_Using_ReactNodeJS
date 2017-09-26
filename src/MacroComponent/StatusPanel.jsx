import React, { Component }  from 'react';
import { Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import _ from 'lodash';

import SEProjects from '../MacroComponent/SEProjects.jsx';
import SESummary from '../MacroComponent/SESummary.jsx';
import TechnicalSkills from '../MacroComponent/TechnicalSkills.jsx';
import WorkExperience from '../MacroComponent/WorkExperience.jsx';

class StatusPanel extends Component {
  constructor() {
    super();
    this.state={
      showmodal: false,
      renderedPanel: 'summaryP',
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

  arrPNL(inPNL){
    if(inPNL === 'summaryP'){
      return (
        <SESummary/>
      );
    } else if(inPNL === 'techSk'){
      return (
        <TechnicalSkills/>
      );
    } else if(inPNL === 'wExp'){
      return (
        <WorkExperience/>
      );
    } else if(inPNL === 'wProjects'){
      return (
        <SEProjects/>
      );
    }
  }

  render() {
    const uName = this.props.uName;
    const uJob = this.props.uJob;
    const navPages = this.props.navPages;
    const showmodal = this.state.showmodal;
    const yoURL = this.state.yoURL;
    const renderedPanel = this.state.renderedPanel;

    const routedPanel = this.arrPNL(renderedPanel);

    const renderedButtons = _.map(navPages, (key, value) => {
        return(

          <Button onClick={(i) => this.alertRender(key)}>{value}</Button>
        );
      }
    );

    return (
      <div>
        <div>
          <h3>Name:{uName}</h3>
          <h3>Title: {uJob}</h3>
        </div>
        <div>
          <ButtonGroup>
            {renderedButtons}
          </ButtonGroup>
        </div>


        <div>
          {routedPanel}
        </div>
      </div>
    );
  }
}

export default StatusPanel;
