import React, { useRef, useState } from 'react';
import Wrapper from '../assets/Styles/VideoPlayerWrapper'

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!video.paused);
  };

  const handleProgressBarClick = (event) => {
    const video = videoRef.current;
    const progressBar = event.currentTarget;
    const offsetX = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.clientWidth;
    const seekTime = (offsetX / progressBarWidth) * video.duration;

    video.currentTime = seekTime;
  };

  return (
    <Wrapper className="video-player">
      <video ref={videoRef} controls autoPlay>
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* <div className="progress-bar" onClick={handleProgressBarClick}>
        <div className="progress" />
      </div> */}
      {/* <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </Wrapper>
  );
}

export default VideoPlayer;