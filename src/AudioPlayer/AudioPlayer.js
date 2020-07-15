import React from 'react';
import './AudioPlayer.css';

import { BsPlayFill, BsFillVolumeUpFill } from 'react-icons/bs';

function playSound(sound) {
  const track = new Audio(sound);
  track.play();
}

function AudioPlayer({ sound }) {
  return (
    <div className="AudioPlayer">
      <div className="play-pause">
        <BsPlayFill className="play-icon" onClick={() => playSound(sound)} />
      </div>
      <div className="volume">
        <BsFillVolumeUpFill className="volume-icon" />
        <input
          className="volume-range"
          type="range"
          name="volume"
          id=""
          min="0"
          max="1"
          step="0.1"
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
