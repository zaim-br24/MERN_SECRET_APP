import React, { useRef } from 'react';
import styled from 'styled-components';

const VideoContainer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  const playPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <Wrapper className="video-container">
      <video onClick={playPause} ref={videoRef} >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
        <source src={videoSrc} type="video/ogg" />      
     </video>
    </Wrapper>
  );
};


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    
    video{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }

`

export default VideoContainer;