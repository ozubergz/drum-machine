import React, { Component } from 'react';

class DrumPads extends Component {
  constructor(props) {
    super(props);

    this.playClip = this.playClip.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if(event.keyCode === this.props.keyCode){
      document.getElementById(this.props.audioId).classList.add('playing');
      setTimeout(() => document.getElementById(this.props.audioId).classList.remove('playing'), 100);
      this.playClip();
    }
  }
  
  playClip() {
    const clip = document.getElementById(this.props.keyPress);
    clip.currentTime = 0;
    clip.play();
    this.props.updateDisplay(this.props.audioId.replace(/-/g, ' '));
  }
  
  render() {
    let inputStyle = {
      cursor: "pointer",
      borderStyle: "none",
      borderRadius: "5px",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.5)",
      backgroundColor: "rgba(93,93,93)",
      color: "white",
      outline: "none",
      width: "60px",
      height: "60px",
      margin: "3px"
    }

    return (
      <button
        style={inputStyle}
        id={this.props.audioId}
        onClick={this.playClip}
        className="drum-pad">
          <audio
            className="clip"
            id={this.props.keyPress}
            src={this.props.audio}
          ></audio>
        {this.props.keyPress}
      </button>
    );
  }
}

export default DrumPads;
