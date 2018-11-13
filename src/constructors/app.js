import React, { Component } from 'react';

import bankAudio from '../reducers/reducer_audios'
import DrumPads from '../components/drum_pads';
import Slider from '../components/slider';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentAudios: bankAudio,
      volumeLevel: 0.5,
      display: ''
    }

    this.clearDisplay = this.clearDisplay.bind(this);
    this.displayName = this.displayName.bind(this);
    this.displayVolume = this.displayVolume.bind(this);
  }

  clearDisplay() {
    this.setState({
      display: ''
    })
  }

  displayName(name) {
    this.setState({
      display: name
    });
  }

  displayVolume(event) {
    this.setState({
      volumeLevel: event.target.value,
      display: "Volume: " + Math.round(event.target.value * 100)
    });
    setTimeout(() => this.clearDisplay(), 1000);
  }

  render() {
    let padDrums = this.state.currentAudios.map(audio => {
      return (
        <div key={audio.keyPress}>
          <DrumPads
            audioId={audio.id}
            audio={audio.url}
            keyPress={audio.keyPress}
            keyCode={audio.keyCode}
            updateDisplay={this.displayName}
          />
        </div>
      );
    });

    return(
      <div id="drum-machine">
        <div className="container controllers">
          <div className="label">MACHINE</div>
          <div id="pad-drums" className="control-pads row col-md-7">
            {padDrums}
          </div>
          <div id="display-bank" className="display-bank">
            <div id="display" className="control-display">
              {this.state.display}
            </div>
            <div id="slider" className="control-slider">
              <Slider
                volumeVal={this.state.volumeLevel}
                updateVolume={this.displayVolume} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;