import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


// Pages
import HomePage from './pages/Home';
import SoftwareEngineer from './pages/SoftwareEngineer';
import MiniatureModel from './pages/MiniatureModel';
import ContactInfo from './pages/ContactInfo';

//test deploy

//nested pages
import EmbeddedEngineer from './pages/EmbeddedDev';
import WebDeveloper from './pages/WebDev';

class AdamNavigation extends Component {
  render () {
    return (
      <div>
        <Nav bsStyle="tabs"  onSelect={this.handleSelect}>
            <NavItem eventKey="1" href="/">Home</NavItem>
            <NavDropdown eventKey="2" title="Software Engineer" id="se-dropdown">
              <MenuItem eventKey="2.1" href="/skillEXP/SoftwareEngineer/EmbeddedDev/">Embedded Systems</MenuItem>
              <MenuItem eventKey="2.2" href="/skillEXP/SoftwareEngineer/WebDev/">Web Development</MenuItem>
            </NavDropdown>
            <NavItem eventKey="3" href="/skillEXP/MiniatureModel">Miniature Modeler and Painter</NavItem>
            <NavItem eventKey="3" href="/contact">Contact Info</NavItem>
          </Nav>
        <Router>
          <div>
            <Route exact path ="/" component={HomePage} />
            <Route path ="/skillEXP/SoftwareEngineer" component={SoftwareEngineer} />
            <Route strict path ="/skillEXP/SoftwareEngineer/EmbeddedDev/" component={EmbeddedEngineer} />
            <Route strict path ="/skillEXP/SoftwareEngineer/WebDev/" component={WebDeveloper} />
            <Route exact path ="/skillEXP/MiniatureModel" component={MiniatureModel} />
            <Route exact path ="/contact" component={ContactInfo} />
          </div>
        </Router>
      </div>
    );
  }

}

export default AdamNavigation;
