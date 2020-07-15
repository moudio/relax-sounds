import React from 'react';
import Rain from '../Tracks/rain.mp3';
import Fan from '../Tracks/fan.mp3';
import SpringBirds from '../Tracks/spring_birds.mp3';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import WoodCracking from '../Tracks/wood_cracking.mp3';
import './SoundList.css';
function SoundList() {
  return (
    <div className="SoundList">
      <div className="rain audio-div">
        <AudioPlayer sound={Rain} description="Rain" />
      </div>
      <AudioPlayer sound={WoodCracking} description="Camp Fire"></AudioPlayer>
      <AudioPlayer sound={Fan} description="Fan noise"></AudioPlayer>
      <AudioPlayer
        sound={SpringBirds}
        description="Singing Birds"
      ></AudioPlayer>
    </div>
  );
}

export default SoundList;
