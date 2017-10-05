import React from 'react';
import * as ReactBS from 'react-bootstrap';

//import sendMail from '../emailsvc'


const ContactPage = React.createClass({

  getInitialState : function() {
      return {firstname : '', lastname : '', emailaddr : '', phoneno : '',
        option : true, contactPreference : 'Email',
        submitlbl : 'Our mailman is in another castle! But, I\'ve sent a few heroes on their life long journey to conquer it!' ,
        //submitlbl : 'Fill out the form above, and I will contact you shortly.',
      };
    },
  handleChange : function(key, event) {
      this.setState({[key] : event.currentTarget.value});
    },
  handleOption : function(key, event) {
      this.setState({[key] : event.target.value});
      if (event.target.value == 'Email') {
        this.setState({option : true});
      } else {
        this.setState({option : false});
      }
    },

  handleClick : function(event) {
    let validated = true;
    if (this.state.option && this.state.emailaddr.indexOf('@') <= -1) {
      this.setState({submitlbl :
      'You have enterred an invalid email format. EX: (you@domain.com)'});
      validated = false;
    }
    if (!this.state.option && (this.state.phoneno.length != 10 || isNaN(this.state.phoneno))) {
      this.setState({submitlbl : 'You have enterred an invalid phone number format.'});
      validated = false;
    }
    if (validated) {
      this.setState({submitlbl : 'Thank you ' + this.state.firstname + ' ' + this.state.lastname +
            ' for submitting, I will contact you shortly at ' +
            (this.state.option ?  this.state.emailaddr : this.state.phoneno) + '.'});
    }
  },

  render() {
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const emailaddr = this.state.emailaddr;
    const phoneno = this.state.phoneno;
    const submitlbl = this.state.submitlbl;
    const contactPreference = this.state.contactPreference;
    const option = this.state.option;
    const vardis = true;
    const gridmd = 5;
    const gridxs = 2;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Contact Information</h2>
        </div>
        <p className="App-intro">
          <h4>Name: Adam Wayne Lew</h4>
          <h4>Email: adamwlew@gmail.com</h4>
          <h4>Cell: (310)-357-1091 </h4>
          <a href="https://github.com/awlew">Github Page</a>
          <h3>Contact Me</h3>
          <form method="POST">
            <ReactBS.Grid>
              <ReactBS.Row className='fnamerow'>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                    <h4>Your First Name</h4>
                </ReactBS.Col>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                  <input disabled={vardis} type="text" value={firstname} placeholder = "Enter your first name"
                     onChange={this.handleChange.bind(null, 'firstname')} />
                </ReactBS.Col>
              </ReactBS.Row>
              <ReactBS.Row className='lnamerow'>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                    <h4>Your Last Name</h4>
                </ReactBS.Col>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                  <input disabled={vardis} type="text" value={lastname} placeholder = "Enter your last name"
                    onChange={this.handleChange.bind(null, 'lastname')} />
                </ReactBS.Col>
              </ReactBS.Row>
              <ReactBS.Row className='emailrow'>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                    <h4>Your Email</h4>
                </ReactBS.Col>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                  <input disabled={vardis} type="text" value={emailaddr} placeholder = "address@email"
                    onChange={this.handleChange.bind(null, 'emailaddr')} />
                </ReactBS.Col>
              </ReactBS.Row>
              <ReactBS.Row className='phonerow'>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                    <h4>Your Phone Number</h4>
                </ReactBS.Col>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                  <input disabled={vardis} type="text" value={phoneno} placeholder = "XXXXXXXXXX"
                    onChange={this.handleChange.bind(null, 'phoneno')} />
                </ReactBS.Col>
              </ReactBS.Row>

              <ReactBS.Row className='prefcon'>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                    <h4>Preferred Contact Method</h4>
                </ReactBS.Col>
                <ReactBS.Col xs={gridxs} md={gridmd}>
                  <select disabled={vardis} value={contactPreference}
                    onChange={this.handleOption.bind(null, 'contactPreference')}>
                    <option value = "Email">Email</option>
                    <option value = "Phone">Phone</option>
                  </select>
                </ReactBS.Col>
              </ReactBS.Row>

            </ReactBS.Grid>

            <ReactBS.Button disabled bsStyle="danger" bsSize="small"
             onClick={this.handleClick}>Submit</ReactBS.Button>
          </form>


          <h4><b className="WIPBOLD">{submitlbl}</b></h4>
        </p>
      </div>
    );
  },
});


export default ContactPage;
