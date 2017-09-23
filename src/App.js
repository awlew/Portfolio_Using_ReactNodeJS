import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


// Pages
import HomePage from './pages/Home';
import SoftwareEngineer from './pages/SoftwareEngineer';
import MiniatureModel from './pages/MiniatureModel';
import ContactInfo from './pages/ContactInfo';

//test deploy

//nested pages
import EmbeddedEngineer from './pages/EmbeddedDev';
import WebDeveloper from './pages/WebDev';

const App = () => (
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
);

export default App;
