// App.js
import React, { useState, useEffect } from "react";
import AudioUpload from "./components/AudioUpload";
import Playlist from "./components/PlayList";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
    localStorage.setItem("currentAudioIndex", currentAudioIndex.toString());
  }, [playlist, currentAudioIndex]);

  // Load playlist and current audio index from local storage on component mount
  useEffect(() => {
    const storedPlaylist = JSON.parse(localStorage.getItem("playlist")) || [];
    const storedIndex =
      parseInt(localStorage.getItem("currentAudioIndex")) || [];
    setPlaylist(storedPlaylist);
    setCurrentAudioIndex(storedIndex);
  }, []);

  // Update local storage whenever the playlist or current audio index changes

  return (
    <div>
      <div>
        <h1>Audio Player</h1>
        <AudioUpload setPlaylist={setPlaylist} />
        <Playlist
          playlist={playlist}
          setCurrentAudioIndex={setCurrentAudioIndex}
        />
        <AudioPlayer
          playlist={playlist}
          currentAudioIndex={currentAudioIndex}
          setCurrentAudioIndex={setCurrentAudioIndex}
        />
      </div>
    </div>
  );
}

export default App;
