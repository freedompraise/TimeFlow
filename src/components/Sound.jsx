// Sound.jsx is a component that plays a sound file when it mounts.
import React from "react";

class Sound extends React.Component {
  componentDidMount() {
    // Play the audio file when the component mounts
    this.playAudio();
  }

  playAudio = () => {
    const { src, autoplay } = this.props;
    const audio = new Audio(src);

    // Autoplay the audio if specified
    if (autoplay) {
      audio.play();
    }
  };

  render() {
    return null; // The Sound component doesn't render anything
  }
}

export default Sound;
