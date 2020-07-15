import React from 'react';
import './AudioPlayer.css';

import { BsPlayFill, BsFillVolumeUpFill } from 'react-icons/bs';

function AudioPlayer() {
  return (
    <div className="AudioPlayer">
      <div className="play-pause">
        <BsPlayFill className="play-icon" />
      </div>
      <div className="volume">
        <BsFillVolumeUpFill />
      </div>
    </div>
  );
}

export default AudioPlayer;
