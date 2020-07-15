import React, { useState } from 'react';
import './AudioPlayer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayIcon from '../Pictures/play.png';
import PauseIcon from '../Pictures/pause.png';
import { BsPlayFill, BsFillVolumeUpFill, BsPauseFill } from 'react-icons/bs';

function AudioPlayer({ sound }) {
  const track = new Audio(sound);
  track.loop = true;

  function playSound() {
    if (!track.paused) {
      track.pause();
      document.querySelector('.play-pause-icon').classList.add('play');
      document.querySelector('.play-pause-icon').classList.remove('pause');
    } else {
      track.play();

      document.querySelector('.play-pause-icon').classList.add('pause');
      document.querySelector('.play-pause-icon').classList.remove('play');
    }
  }

  function handleVolume(e) {
    const value = e.target.value;
    track.volume = value;
  }

  return (
    <div className="AudioPlayer">
      <div className="play-pause">
        <div className="play-pause-icon play" onClick={() => playSound()}></div>
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
          step="0.05"
          onChange={(e) => handleVolume(e)}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
