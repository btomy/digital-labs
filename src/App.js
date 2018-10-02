import React, {
  Component
} from 'react';

import logo from '../node_modules/cadesignsystem/dist/images/citizens_advice_logo.svg';
import Header from './components/Header/Header';

import data from './config.json'

import OverlayContainer from './components/OverlayContainer/OverlayContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay : false,
      data: data.digitalLabs,
      selectedData: ""
    }
  }

  openOverlay = () => {
    this.setState({
      showOverlay: true
    });
  }

  closeOverlay = () => {
    this.setState({
      showOverlay: false
    });
  }

  handleSelection = (value,e) => {
    console.log(value);
    this.filterData(value);
    this.openOverlay();
  }

  filterData = (selection) => {
    const selectedData = this.state.data.filter((item) => {
      if (item.id === selection) {
        this.setState({
          selectedData: item
        })
      }
    });
  }

  render() {
    const selectedData = this.state.selectedData;

    return (
      <React.Fragment>
       
       <Header logo={logo} />

        <div className="c-wrap">
          <div className="o-grid">
            <div className="o-grid__unit">
              <h1>Welcome to the digital lab</h1>

              <div className="main-container">

                <div className="links" onClick={(e) => this.handleSelection('casebook', e)} ></div>

                 <div className="links" onClick={(e) => this.handleSelection('workplace', e)} ></div>

                <div className="links"></div>
                <div className="links"></div>
                <div className="links"></div>
                <div className="links"></div>
                <div className="links"></div>
              </div>

               { this.state.showOverlay ? (
                  <div className="dialog__mask"> 
                    <OverlayContainer
                      title = {selectedData.title}
                      description = {selectedData.desc}
                      link = {selectedData.link}
                      linkTxt = {selectedData.linkTxt}
                      handleClose={this.closeOverlay} 
                    />
                 </div> 
               ) : null}

            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;