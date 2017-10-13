import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Table} from 'react-bootstrap';

import condresume from '../miscfiles/Adam_Lew_Resume.docx';
import longresume from '../miscfiles/Adam_Lew_Resume_Technical.docx';


class TechnicalSkills extends Component {
  constructor(props){
    super(props);
    this.state={
      outresume:'',
    };
  }

  onPressButton(sender){
    switch(sender){
      case 1: this.setState({outresume: condresume});
              break;
      case 2: this.setState({outresume: longresume});
              break;
      default: alert("nope");
              break;
    };

  }

  render(props) {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Technical Skills</h2>
        </div>
        <p className="App-intro">
          <Table striped bordered condensed hover className="tSkill">
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>Languages</td>
                <td>C, C++, C#/.NET, Java, PHP</td>
              </tr>
              <tr>
                <td>Web Technologies</td>
                <td>HTML, JavaScript, CSS, XML, DOM, React, Node.js, lodash, JSON, OpenSSL, Mosquitto, Paho, libxml2, wpa_supplicant</td>
              </tr>
              <tr>
                <td>Databases</td>
                <td>MySQL</td>
              </tr>
              <tr>
                <td>Operating Systems</td>
                <td>Windows XP/Vista/7/10, Linux, Unix, Mac-OS, MS-DOS</td>
              </tr>
              <tr>
                <td>Tools</td>
                <td>Eclipse, Notepad++, Visual Studios, Jira, PuTTY, WinSCP, VMWare, VirtualBox, VPL, BugTracker.NET, Jenkins, Rake</td>
              </tr>
              <tr>
                <td>Methodologies/Software</td>
                <td>AGILE/SCRUM, Waterfall</td>
              </tr>
              <tr>
                <td>Source Control</td>
                <td>Tortoise SVN, GitHubEnterprise, BitBucket</td>
              </tr>

            </tbody>
          </Table>
        </p>
        <Table condensed hover className="tSkill">
          <tr>
            <td>
              <form method="get" name="downloadform" action={this.state.outresume}>
                <Button bsStyle="primary" bsSize="large" type="submit" onClick={(i)=>this.onPressButton(1)}>Download Resume</Button>
                <Button bsStyle="primary" bsSize="large" type="submit" onClick={(i)=>this.onPressButton(2)}>Download Technical Resume</Button>
              </form>
            </td>
            <td>
              <form method="get" >

              </form>
            </td>
          </tr>
        </Table>
      </div>
    );
  }
}

export default TechnicalSkills;
