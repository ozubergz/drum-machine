import React, { Component } from 'react';

class Slider extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const sounds = [].slice.call(document.getElementsByClassName('clip'));
    sounds.forEach(sound => {
      sound.volume = this.props.volumeVal
    });

    return(
      <div className="volumeSlider">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="slider"
          id="myRange"
          value={this.props.volumeVal}
          onChange={this.props.updateVolume}
        />
      </div>
    );
  }
}

export default Slider;
