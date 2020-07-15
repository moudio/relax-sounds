import React, { useState } from 'react';
import './AudioPlayer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayIcon from '../Pictures/play.png';
import PauseIcon from '../Pictures/pause.png';
import { BsPlayFill, BsFillVolumeUpFill, BsPauseFill } from 'react-icons/bs';

function AudioPlayer({ sound, description }) {
  const track = new Audio(sound);
  track.loop = true;

  function playSound(e) {
    console.log(e);
    let element = e.target;
    console.log(element);
    if (!track.paused) {
      track.pause();
      element.classList.add('play');
      element.classList.remove('pause');
      const equalizerDiv = element.parentElement.nextSibling;
      equalizerDiv.classList.remove('show-equalizer');
    } else {
      track.play();
      element.classList.add('pause');
      element.classList.remove('play');
      const equalizerDiv = element.parentElement.nextSibling;
      equalizerDiv.classList.add('show-equalizer');
    }
  }

  function handleVolume(e) {
    const value = e.target.value;
    track.volume = value;
  }

  return (
    <div className="AudioPlayer">
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="play-pause">
        <div
          className="play-pause-icon play"
          onClick={(e) => playSound(e)}
        ></div>
      </div>
      <div className="equalizer"></div>
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
