import React, { Component }  from 'react';
import { Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import _ from 'lodash';

import SEProjects from '../MacroComponent/SEProjects.jsx';
import SESummary from '../MacroComponent/SESummary.jsx';
import TechnicalSkills from '../MacroComponent/TechnicalSkills.jsx';
import WorkExperience from '../MacroComponent/WorkExperience.jsx';
import AcaCourses from '../MacroComponent/AcademicCourses.jsx';

import ModelGallery from '../MacroComponent/ModelGallery.jsx';
import WorkIPUC from '../MacroComponent/WIPUCpage.jsx';

class StatusPanel extends Component {
  constructor() {
    super();
    this.state={
      showmodal: false,
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

  arrPNL(inPNL){
    if(inPNL === 'summaryP'){
      return (
        <div>
          <SESummary/>
          <WorkIPUC/>
        </div>

      );
    } else if(inPNL === 'techSk'){
      return (
        <TechnicalSkills/>
      );
    } else if(inPNL === 'wExp'){
      return (
        <div>
          <WorkExperience/>
          <WorkIPUC/>
        </div>

      );
    } else if(inPNL === 'wProjects'){
      return (
        <div>
          <SEProjects/>
          <WorkIPUC/>
        </div>

      );
    } else if(inPNL === 'ACourses'){
      return (
        <div>
          <AcaCourses/>
          <WorkIPUC/>
        </div>
      );
    } else if(inPNL === 'modGal'){
      return (
        <ModelGallery/>
      );
    } else if(inPNL === 'modsummaryP'){
      return (
        <div>
          <SESummary/>
          <WorkIPUC/>
        </div>

      );
    } else if(inPNL === 'ComQuote'){
      return (
        <WorkIPUC/>
      );
    }
  }

  render() {
    const uName = this.props.uName;
    const uJob = this.props.uJob;
    const navPages = this.props.navPages;
    const showmodal = this.state.showmodal;
    const yoURL = this.state.yoURL;
    const renderedPanel = (navPages.length === 0) ? null : ((this.state.renderedPanel === '') ? navPages[0].pVal : this.state.renderedPanel);
    const routedPanel = this.arrPNL(renderedPanel);

    const renderedButtons = _.map(navPages, (page) => {
        return(

          <Button key={page.pVal} onClick={(i) => this.alertRender(page.pVal)}>{page.pName}</Button>
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
