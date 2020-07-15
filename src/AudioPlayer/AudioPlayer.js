import React, { useState } from 'react';
import './AudioPlayer.css';
import PlayIcon from '../Pictures/play.png';
import PauseIcon from '../Pictures/pause.png';
import { globalHistory } from '@reach/router';
import { BsPlayFill, BsFillVolumeUpFill, BsPauseFill } from 'react-icons/bs';

function AudioPlayer({ sound, description }) {
  let track = new Audio(sound);
  track.loop = true;

  function playSound(e) {
    let element = e.target;
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
  globalHistory.listen(({ action }) => {
    if (action === 'PUSH') {
      if (track) {
        track.pause();
        track = null;
      }
    }
  });

  function handleVolume(e) {
    const value = e.target.value;
    track.volume = value;
  }

  function handleMute(e) {
    console.log('handlemute');
    let volumeInput = e.target;
    console.log(volumeInput.nodeName);
    if (volumeInput.nodeName === 'path') {
      volumeInput = volumeInput.parentElement;
      console.log(volumeInput, ' now');
    }
    let volumeRange = volumeInput.nextSibling;
    console.log('volume Range ', volumeRange);
    console.log(typeof volumeRange.value);
    if (parseFloat(volumeRange.value) > 0) {
      console.log(typeof parseFloat(volumeRange.value));
      console.log(parseFloat(volumeRange.value));
      console.log('yes');
      volumeRange.setAttribute('value', 0);
    } else {
      volumeRange.setAttribute('value', 0.5);
      console.log('no');
      console.log(typeof parseInt(volumeRange.value));
      console.log(parseInt(volumeRange.value));
    }
  }

  return (
    <div className="AudioPlayer">
      <div className="description">
        <span>{description}</span>
      </div>
      <div className="play-pause">
        <div
          className="play-pause-icon play"
          onClick={(e) => playSound(e)}
        ></div>
      </div>
      <div className="equalizer"></div>
      <div className="volume">
        <BsFillVolumeUpFill
          className="volume-icon"
          onClick={(e) => handleMute(e)}
        />
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
