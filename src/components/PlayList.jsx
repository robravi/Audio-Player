// Playlist.js
import React from "react";

function Playlist({ playlist, setCurrentAudioIndex }) {
  const handleAudioClick = (index) => {
    setCurrentAudioIndex(index);
  };

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((audio, index) => (
          <li key={index} onClick={() => handleAudioClick(index)}>
            {audio.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
