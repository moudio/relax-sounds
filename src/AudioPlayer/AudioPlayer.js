import React, { useState } from 'react';
import './AudioPlayer.css';

import { BsPlayFill, BsFillVolumeUpFill, BsPauseFill } from 'react-icons/bs';

function AudioPlayer({ sound }) {
  const track = new Audio(sound);

  function playSound() {
    if (!track.paused) {
      track.pause();
    } else {
      track.play();
    }
  }

  function handleVolume(e) {
    const value = e.target.value;
    track.volume = value;
  }

  return (
    <div className="AudioPlayer">
      <div className="play-pause">
        {track.paused ? (
          <BsPlayFill className="play-icon" onClick={() => playSound()} />
        ) : (
          <BsPauseFill className="pause-icon" onClick={() => playSound()} />
        )}
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
          onChange={(e) => handleVolume(e)}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
