import React, { Component }  from 'react';
import { ListGroup, ListGroupItem, Modal, Button} from 'react-bootstrap';

class SoftwareEngineer extends Component {
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

  render() {
    const showmodal = this.state.showmodal;
    const yoURL = this.state.yoURL;
    return (
      <div>
        <h2 className='hello-world' style={{textAlign : 'center'}}>
          Skills
        </h2>
        <ListGroup>
          <ListGroupItem
            onClick={this.alertClicked.bind(this,
              'https://react-bootstrap.github.io/components.html')}>
            React</ListGroupItem>
          <ListGroupItem onClick={this.alertClicked.bind(this, 'https://lodash.com/')}>
            lodash</ListGroupItem>
          <ListGroupItem onClick={this.alertClicked.bind(this, 'https://www.heroku.com/')}>
            Heroku</ListGroupItem>

          <Modal show={showmodal} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>ALERT</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              'WARNING: Navigating outside of site!'
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
              <Button bsStyle="primary" href={yoURL}>Go to page</Button>
            </Modal.Footer>
          </Modal>

            <ListGroupItem>Service and Object Oriented Programming(CSS, JS, C/C++, Java)
            </ListGroupItem>
            <ListGroupItem>Web Forms and Applications development</ListGroupItem>
            <ListGroupItem>Embedded Systems Programming</ListGroupItem>
            <ListGroupItem>Hardware Synthesis</ListGroupItem>
            <ListGroupItem>Assembly Level Programming (MIPS and 64000 ARCH)
            </ListGroupItem>
            <ListGroupItem>Tutoring (Computer Engineering/Science and Mathematics)
            </ListGroupItem>
          </ListGroup>
      </div>
    );
  }
}

export default SoftwareEngineer;
