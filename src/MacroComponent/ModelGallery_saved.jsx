import React, { Component } from 'react';
import FacebookProvider, { Share, EmbeddedPost } from 'react-facebook';
import {Button} from 'react-bootstrap';
import {ImageGallery} from 'react-image-gallery';


//image paths
/*import minotaur from '../thumbnails/minotaur.jpg';
import bugbears from '../thumbnails/bugbears.jpg';
import femcommissar from '../thumbnails/femcommissar.jpg';*/
class ModelGallery extends Component {
  constructor() {
    super();
    this.state={
      showmodal: false,
      renderedGallery: '',
      currentSelect: 0,
    };
  }

  alertRender(rP){
    this.setState({renderedGallery: rP});
  }

  createImList(){
    const images = [
      {
        original: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/21543777_1913854711963657_5653924728824215595_o.jpg?oh=d62927e93a04b4da20e03760e44fa902&oe=5A3BF4BA',
        thumbnail: '',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
  }

  arrPNL(){
    switch(this.state.currentSelect) {
        case 0: //bugbears
            return (
              <FacebookProvider appId="1911577932496741">
                <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1913853605297101.1073741841.100000174417748&type=1&l=bc802113ea" width="500" />
              </FacebookProvider>
            );
            break;

        case 1:
            return ( //female commissar
              <div>
                <FacebookProvider appId="1911577932496741">
                  <EmbeddedPost href="https://www.facebook.com/dragnhuo/videos/vb.100000174417748/1881105821905213" width="500" />
                </FacebookProvider>
                <FacebookProvider appId="1911577932496741">
                  <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1881105775238551.1073741839.100000174417748&type=1&l=30832273a5" width="500" />
                </FacebookProvider>
              </div>
            );
            break;
        case 2:
            return ( //female commissar
              <div>
                <FacebookProvider appId="1911577932496741">
                  <EmbeddedPost href="https://www.facebook.com/dragnhuo/videos/vb.100000174417748/1349653815050419" width="500" />
                </FacebookProvider>
                <FacebookProvider appId="1911577932496741">
                  <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1349649771717490.1073741837.100000174417748&type=1&l=73cfd8e850" width="500" />
                </FacebookProvider>
              </div>
            );
            break;
        default:
            return null;
    }
  }

  calculateWidth(){
if (window.innerWidth >= 540){
      return 540;
    } else {
      return 320;
    }

  }

  FBIn(inp){
    this.setState({currentSelect: (this.state.currentSelect + inp)});
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render(props) {
    const renderedGallery = this.arrPNL(this.state.renderedGallery);
    const pimages = this.createImList();
    return (
      <div className="App">
        <div className="App-header">
          <h2>Gallery</h2>
        </div>
        <div className="App-intro">

            <Button onClick={(i) => this.FBIn(-1)} disabled={false}>Back</Button>
          <Button onClick={(i) => this.FBIn(1)} disabled={false}>Next</Button>
          {renderedGallery}
        </div>
      </div>
    );
  }
}

export default ModelGallery;
