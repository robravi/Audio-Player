// AudioPlayer.js
import React, { useEffect, useRef, useState } from "react";

function AudioPlayer({ playlist, currentAudioIndex, setCurrentAudioIndex }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    audio.src = playlist[currentAudioIndex]?.url;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Auto-playback failed:", error);
          setIsPlaying(false);
        });
    }

    audio.onended = () => {
      setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    return () => {
      audio.pause();
    };
  }, [playlist, currentAudioIndex, setCurrentAudioIndex]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h2>Audio Player</h2>
      <audio ref={audioRef} src={playlist[currentAudioIndex]?.url} controls />
      <button onClick={togglePlayback}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default AudioPlayer;
