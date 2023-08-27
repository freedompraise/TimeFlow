import React from "react";

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(this.props.src);
    this.playPromise = null; // Track the play promise
  }

  componentDidMount() {
    // Play the audio file when the component mounts
    if (this.props.autoplay) {
      this.playAudio();
    }
  }
  // TO DO: make the alarm sound play for entire 10 secs, rahter than just 1 sec
  playAudio = () => {
    // Play the audio only if it's not already playing
    if (this.audio.paused) {
      this.playPromise = this.audio.play();

      // Handle the promise to avoid errors
      if (this.playPromise !== undefined) {
        this.playPromise
          .then(() => {
            // Playback started successfully
          })
          .catch((error) => {
            // Playback was interrupted or failed
            console.error("Audio playback error:", error);
          });
      }
    }
  };

  render() {
    return null; // The Sound component doesn't render anything
  }
}

export default Sound;
