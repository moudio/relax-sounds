import React from 'react';
import Rain from '../Tracks/rain.mp3';
import Fan from '../Tracks/fan.mp3';
import SpringBirds from '../Tracks/spring_birds.mp3';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

function SoundList({ sounds }) {
  return (
    <div>
      <h2>SoundLists</h2>
      <div className="rain audio-div">
        <AudioPlayer />
      </div>
      <audio src={Fan} controls></audio> <br />
      <audio src={SpringBirds} controls></audio>
    </div>
  );
}

export default SoundList;
