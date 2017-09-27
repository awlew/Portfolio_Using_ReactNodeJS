import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { MenuItem, Modal, Button, ButtonGroup, DropdownButton} from 'react-bootstrap';


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
  constructor() {
    super();
    this.state={
      showmodal: false,
      yoURL: '',
    };
  }

  alertClicked(hewrl) {
    this.setState({yoURL: hewrl, showmodal : true});
  }

  close() {
    this.setState({showmodal: false});
  }

  render () {
    const showmodal = this.state.showmodal;
    const yoURL = this.state.yoURL;
    return (
      <div>
        <Modal show={showmodal} onHide={this.close} dialogClassName="navigation-modal">
          <Modal.Header>
            <Modal.Title>Main Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <ButtonGroup vertical>
              <Button href="/">Home</Button>
              <Button href="/skillEXP/SoftwareEngineer/">Software Engineer</Button>
              <Button href="/skillEXP/MiniatureModel">Miniature Modeler and Painter</Button>
              <Button href="/Contact">Contact Info</Button>
            </ButtonGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
            <Button bsStyle="danger" disabled={true}>Self Destruct</Button>
          </Modal.Footer>
        </Modal>
        <Button onClick={this.alertClicked.bind(this, '/')}>
          Main Menu
        </Button>

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
