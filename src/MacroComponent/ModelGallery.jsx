import React, { Component } from 'react';
import FacebookProvider, { Share, EmbeddedPost } from 'react-facebook';
import {Button} from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';

//image paths
/*import minotaur from '../thumbnails/minotaur.jpg';
import bugbears from '../thumbnails/bugbears.jpg';
import femcommissar from '../thumbnails/femcommissar.jpg';*/

const MAX_IMGES = 15;
const FBAppID = "1911577932496741";

class ModelGallery extends Component {
  constructor() {
    super();
    this.state={
      showmodal: false,
      renderedGallery: '',
      currentSelect: 14,
    };
  }

  alertRender(rP){
    this.setState({renderedGallery: rP});
  }

  RendInstaEmb(iurl){
    const maxWIEmb = 500;
    return (
      <center>
        <InstagramEmbed
          url={iurl}
          maxWidth={maxWIEmb}
          hideCaption={false}
          containerTagName='EmbeddedPost'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </center>
    );
  }

  RendFBEmb(iurl, iwidth){
    return (
      <div>
        <FacebookProvider appId={this.FBAppID}>
          <EmbeddedPost href={iurl} width={iwidth} />
        </FacebookProvider>
      </div>
    );
  }

  arrPNL(){
    switch(this.state.currentSelect) {
      case 14: //Kill team Goon Squad
        return(
          this.RendInstaEmb('https://www.instagram.com/p/CAJqHK0nHsX/?utm_source=ig_web_copy_link')
        );
      case 13: //Kill team Goon Squad
        return(
          this.RendInstaEmb('https://www.instagram.com/p/B_9mLbGnoZW/?utm_source=ig_web_copy_link')
        );
        break;
      case 12: //Kill team Reiver Bros
        return(
          this.RendInstaEmb('https://www.instagram.com/p/B_6Xi4HnLqT/?utm_source=ig_web_copy_link')
        );
        break;
      case 11: //Kill team Interceptor 1
          return (
            this.RendInstaEmb('https://www.instagram.com/p/B_GuBIxH5PX/?utm_source=ig_web_copy_link')
          );
          break;
      case 10: //Kill team Scouts
          return (
            this.RendInstaEmb('https://www.instagram.com/p/B-jjraQnHAm/?utm_source=ig_web_copy_link')
          );
          break;
      case 9: //NMM Stormcast Eternal
          return (
            <FacebookProvider appId="1911577932496741">
              <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.2140593432623116.1073741849.100000174417748&type=1&l=fdd0e24248" width="500" />
            </FacebookProvider>
          );
          break;

      case 8: //bugbears
          return (
            <FacebookProvider appId="1911577932496741">
              <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1974550065894121.1073741847.100000174417748&type=1&l=800f0c46b7" width="500" />
            </FacebookProvider>
          );
          break;
      case 7: //bugbears
          return (
            <FacebookProvider appId="1911577932496741">
              <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1972231499459311.1073741846.100000174417748&type=1&l=1581672a8e" width="500" />
            </FacebookProvider>
          );
          break;
        case 6: //bugbears
            return (
              <FacebookProvider appId="1911577932496741">
                <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1913853605297101.1073741841.100000174417748&type=1&l=bc802113ea" width="500" />
              </FacebookProvider>
            );
            break;

        case 5:
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
        case 4:
            return ( //Warlock
              <div>
                <FacebookProvider appId="1911577932496741">
                  <EmbeddedPost href="https://www.facebook.com/dragnhuo/videos/vb.100000174417748/1774178195931310" width="500" />
                </FacebookProvider>
                <FacebookProvider appId="1911577932496741">
                  <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1774178135931316.1073741838.100000174417748&type=1&l=f24476b27c" width="500" />
                </FacebookProvider>
              </div>
            );
            break;
        case 3:
            return ( //Minotaur
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
      case 2: //Mangu Timur
          return (
            <FacebookProvider appId="1911577932496741">
              <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1038038706211933.1073741833.100000174417748&type=1&l=ccf4adb8f5" width="500" />
            </FacebookProvider>
          );
          break;
      case 1: //Dragon Gundam
          return (
            <FacebookProvider appId="1911577932496741">
              <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1027389583943512.1073741832.100000174417748&type=1&l=cf302045ff" width="500" />
            </FacebookProvider>
          );
          break;
      case 0: //Dragon
          return (
            <FacebookProvider appId="1911577932496741">
              <EmbeddedPost href="https://www.facebook.com/media/set/?set=a.1006337182715419.1073741831.100000174417748&type=1&l=f1cc750942" width="500" />
            </FacebookProvider>
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
    let inOut = 0;
    if(inp === 'dec'){
      if(this.state.currentSelect === 0){
        inOut = MAX_IMGES - 1;
      } else {
        inOut = this.state.currentSelect - 1;
      }
    } else if(inp === 'inc'){
      if(this.state.currentSelect === (MAX_IMGES - 1)) {
        inOut = 0;
      } else {
        inOut = this.state.currentSelect + 1;
      }
    } else {
      inOut = this.state.currentSelect;
    }
    this.setState({currentSelect: (inOut)});

  }

  render(props) {
    const renderedGallery = this.arrPNL(this.state.renderedGallery);
    const covWidth = this.calculateWidth();
    const covHeight = ((covWidth * 10) / 25);
    const currentSelect = this.state.currentSelect;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Gallery</h2>
        </div>
        <div className="App-intro">
          <Button onClick={(i) => this.FBIn('inc')}>Back</Button>
          <Button onClick={(i) => this.FBIn('dec')}>Next</Button>
          {renderedGallery}
        </div>
      </div>
    );
  }
}

export default ModelGallery;
