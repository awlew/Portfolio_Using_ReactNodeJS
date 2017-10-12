import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import {Table, Panel} from 'react-bootstrap';

import overworld from './Overworld/Overworld.jpg';

class WorkExperience extends Component {
constructor() {
  super();
  this.state={
    overworldsel : '1-4',
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
      ]
    };
    const world11 = (this.state.overworldsel === '1-1') ? true : false;
    const world12 = (this.state.overworldsel === '1-2') ? true : false;
    const world13 = (this.state.overworldsel === '1-3') ? true : false;
    const world14 = (this.state.overworldsel === '1-4') ? true : false;
    const worldsty11 = (this.state.overworldsel === '1-1') ? 'success' : 'info';
    const worldsty12 = (this.state.overworldsel === '1-2') ? 'success' : 'info';
    const worldsty13 = (this.state.overworldsel === '1-3') ? 'success' : 'info';
    const worldsty14 = (this.state.overworldsel === '1-4') ? 'success' : 'info';


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
          <Panel collapsible expanded={world14} bsStyle={worldsty14} header="World 1-4 (May 2016 - June 2017) : Mercury Security Corporation LLC - Firmware Engineer"  eventKey="4" onSelect={()=>this.setState({overworldsel: "1-4"})}>
            <div className="worldpanel">
              Mercury Security Corporation is a leader on developing and manufacturing OEM hardware for facility security and access control. They collaborate with OEM partners to build an unmatched set of features into an open hardware platform that is unequaled for reliability, longevity, and effectiveness. <br/><br/>
              •	Created and developed software tools/applications, wrote back-end cross-compiled c/c++ cgi’s, implemented secure cookies, and wrote front-end JavaScript/C#/HTML/XML/PHP to allow users to configure and communicate with Mercury’s access control embedded devices. <br/>
              •	Researched, developed, and documented new technologies and API/SDK commands for our firmware. <br/>
              •	Configured TCP and TLS sockets for a secondary NIC, maintained an integrated web server (lighttpd), and diagnosed firmware issues using Linux Debian command line, c code, *.sh’s, and bash scripts. <br/>
            •	Implemented 802.1x authentication in the firmware; configured a FreeRadius server and an HP 2530 ProCurve switch to simulate the entire workflow of 802.1x, EAPOL, and RADIUS protocols. <br/><br/>
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
              •	Improved, refactored, and implemented visual and logical features within CSH’s lease/resident website using JavaScript/HTML5 frameworks such as React, Bookshelf, lodash, and Node.js.  <br/><br/>
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
              •	Functionally tested and verified features implemented in CSH’s leasing/resident website.
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
              •	Created, wrote, and supervised an enjoyable interpersonal and written experience that allows students (7th to 12th graders) and instructors to understand logic gates, Microsoft Visual Programming Language (VPL), and Lego Mindstorm NXT/EV3 robot platforms.<br/><br/>
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
