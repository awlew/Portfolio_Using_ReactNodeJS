import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import {Table, Panel} from 'react-bootstrap';

import overworld from './Overworld/Overworld.jpg';

class WorkExperience extends Component {
constructor() {
  super();
  this.state={
    overworldsel : '1-5',
  };
}

onWorldClick(obj, num, event){
  const worldst = '1-' + (1+num);
  this.setState({overworldsel: worldst});
  return;
}

onPanelClick(e, evKey){
  alert('clicked' + evKey);
}

  render(props) {
    const worldmap = {
      name: "overworld-map",
      areas: [
        { shape: "circle", coords: [151,399,19] },
        { shape: "circle", coords: [477,319,24] },
        { shape: "circle", coords: [169,259,27] },
        { shape: "circle", coords: [458,123,30] },
        { shape: "circle", coords: [155,92,30] },
      ]
    };
    const world11 = (this.state.overworldsel === '1-1') ? true : false;
    const world12 = (this.state.overworldsel === '1-2') ? true : false;
    const world13 = (this.state.overworldsel === '1-3') ? true : false;
    const world14 = (this.state.overworldsel === '1-4') ? true : false;
    const world15 = (this.state.overworldsel === '1-5') ? true : false;
    const worldsty11 = (this.state.overworldsel === '1-1') ? 'success' : 'info';
    const worldsty12 = (this.state.overworldsel === '1-2') ? 'success' : 'info';
    const worldsty13 = (this.state.overworldsel === '1-3') ? 'success' : 'info';
    const worldsty14 = (this.state.overworldsel === '1-4') ? 'success' : 'info';
    const worldsty15 = (this.state.overworldsel === '1-5') ? 'success' : 'info';


    return (

      <div className="App">
        <div className="App-header">
          <h2>Work Experience</h2>
        </div>
        <p className="App-intro">
          World Selected: <b className="worldNum">{this.state.overworldsel}</b>
          <div className="immap">
            <ImageMapper src={overworld} map={worldmap} onClick={(obj, num, event) => this.onWorldClick(obj, num, event)} />
          </div>
          <Panel collapsible expanded={world15} bsStyle={worldsty15} header="World 1-5 (December 2017 - Present) : Raytheon Space and Airborne Systems - Software Engineer"  eventKey="5" onSelect={()=>this.setState({overworldsel: "1-5"})}>
            <div className="worldpanel">
              Raytheon Space and Airborne Systems is a major component of Raytheon that focuses on developing airborne radars and processors, Electro-optic/infrared sensors, Electronic warfare and precision guidance systems, Active electronically scanned array radars, Space and missile defense technology, and Intelligence + surveillance + reconnaissance (ISR) systems <br/><br/>
            •	 Working together with multiple small teams to design + develop, integrate, test, document, maintain, troubleshoot + edebug, and peer review software using Ada, Python, and C/C++. <br/>
            •	 (I am very limited to the information that I can put here.) <br/>
            </div>


            <Table striped bordered condensed hover responsive className="worldpanel">
              <tr>
                <td><b>Tools</b></td>
                <td>Visual Studio, AdaMulti, SlickEdit, Notepad++, TortoiseSVN, Git/SVN, PuTTY</td>
              </tr>
              <tr>
                <td><b>Environment</b></td>
                <td>Ada, C, C++, Python, JSON, XML, C#/.NET, Linux, Windows 7</td>
              </tr>
            </Table>

          </Panel>
          <Panel collapsible expanded={world14} bsStyle={worldsty14} header="World 1-4 (May 2016 - June 2017) : Mercury Security Corporation LLC - Firmware Engineer"  eventKey="4" onSelect={()=>this.setState({overworldsel: "1-4"})}>
            <div className="worldpanel">
              Mercury Security Corporation is a leader on developing and manufacturing OEM hardware for facility security and access control. They collaborate with OEM partners to build an unmatched set of features into an open hardware platform that is unequaled for reliability, longevity, and effectiveness. <br/><br/>
            •	Worked together with a small agile engineering team to develop features and fixes to help make MSC’s security controllers easier and more enjoyable to use. <br/>
            •	Focused on developing client-server based features relating to TCP/TLS connections, the ability to use a secondary ethernet adapter, and revamping the embedded web interface using JavaScript and HTML.<br/>

            </div>


            <Table striped bordered condensed hover responsive className="worldpanel">
              <tr>
                <td><b>Tools</b></td>
                <td>Visual Studio/Eclipse, Notepad++, TortoiseSVN, Jira, BugTracker, VMWare, VirtualBox, PuTTY, WinSCP, Rake C</td>
              </tr>
              <tr>
                <td><b>Environment</b></td>
                <td>C, C++, JavaScript, HTML, CSS, XML, OpenSSL, libxml2, JSON, PHP, C#, .NET, wpa_supplicant, Linux, Windows 7</td>
              </tr>
            </Table>

          </Panel>
          <Panel collapsible expanded={world13} bsStyle={worldsty13} header="World 1-3 (October  2015 - April 2016) : Starwood Waypoint Homes - Web Developer Intern" onSelect={()=>this.setState({overworldsel: "1-3"})}>
            <div className="worldpanel">
              Starwood Waypoint Homes, previously Colony Starwood Homes and Colony American Homes, is one of the largest publicly traded owners and operators of single-family rental homes in the United States. The company acquires, renovates, leases, maintains, and manages single-family homes. They develop and utilize Atlas, a web-based mobile-friendly and highly scalable software system with functionality across multiple departments. Atlas optimizes efficiency by being fully integrated with the technology systems of over 40 of their outside vendors and engages residents by providing a mobile-enabled lease application and completion process, a seamless online rent payment capability, and a service portal with detailed self-help videos. <br/><br/>
              •	Worked together with a medium sized agile development and QA team to provide property managers and residents an understandable and enjoyable web application, “Atlas”, using React and Node.js.   <br/><br/>
            </div>
            <Table striped bordered condensed hover responsive className="worldpanel">
              <tr>
                <td><b>Tools</b></td>
                <td>JavaScript, HTML5, CSS, Node, React, lodash, Jira, Git Hub, BitBucket, Microsoft Office</td>
              </tr>
              <tr>
                <td><b>Environment</b></td>
                <td>MacOS, Windows 7</td>
              </tr>
            </Table>

          </Panel>
          <Panel collapsible expanded={world12} bsStyle={worldsty12} header="World 1-2 (February  2015 - October 2015) : Starwood Waypoint Homes - QA Intern" onSelect={()=>this.setState({overworldsel: "1-2"})}>
            <div className="worldpanel">
              Starwood Waypoint Homes, previously Colony Starwood Homes and Colony American Homes, is one of the largest publicly traded owners and operators of single-family rental homes in the United States. The company acquires, renovates, leases, maintains, and manages single-family homes. They develop and utilize Atlas, a web-based mobile-friendly and highly scalable software system with functionality across multiple departments. Atlas optimizes efficiency by being fully integrated with the technology systems of over 40 of their outside vendors and engages residents by providing a mobile-enabled lease application and completion process, a seamless online rent payment capability, and a service portal with detailed self-help videos. <br/><br/>
            •	Worked together with the QA team to provide a better experience to the end user, and helped the development team have a more pleasant experience by providing behavioral results from verification. <br/>
              •	Found/reported/documented bugs and wrote user stories to suggest improvements to the website.<br/><br/>

            </div>
            <Table striped bordered condensed hover responsive className="worldpanel">
              <tr>
                <td><b>Tools</b></td>
                <td>Jira, Git Hub, BitBucket, Microsoft Office</td>
              </tr>
              <tr>
                <td><b>Environment</b></td>
                <td>Windows 7, MacOS</td>
              </tr>
            </Table>

          </Panel>
          <Panel collapsible expanded={world11} bsStyle={worldsty11} header="World 1-1 (February  2015 - October 2015) : Ira A. Fulton Schools of Engineering - Robotics Camp Lead Instructor and Manual Developer" onSelect={()=>this.setState({overworldsel: "1-1"})}>
            <div className="worldpanel">
              The Ira A. Fulton Schools of Engineering is an independent school unit of Arizona State University that provides undergraduate and graduate programs for engineering, computer science, and construction students. It has grown over 20,000 students from all 50 states and Puerto Rico and 121 countries. They emphasize discovery, design, innovation, entrepreneurship, and societal impact. This camp focused on providing 7th – 12th grade students an introductory course to Computer Science as well as robotics through visual programming LEGO NXT/EV3 robots. <br/><br/>
            •	Co-mentored with a small team of instructors to provide an enjoyable and positive interpersonal experience to the future of the Computer Science/Engineering and Robotics community (7-12th graders) using LEGO NXT/EV3 robots and Microsoft/ASU VPL. <br/>
            </div>
            <Table striped bordered condensed hover responsive className="worldpanel">
              <tr>
                <td><b>Tools</b></td>
                <td>Microsoft VPL, Microsoft Office, Visual Studios, LEGO EV3/NXT IDEs</td>
              </tr>

            </Table>

          </Panel>
        </p>

      </div>
    );
  }
}

export default WorkExperience;
