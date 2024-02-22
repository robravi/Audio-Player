// AudioUpload.js
import { useRef } from "react";

function AudioUpload({ setPlaylist }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPlaylist = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const audio = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
      newPlaylist.push(audio);
    }

    setPlaylist((prevPlaylist) => [...prevPlaylist, ...newPlaylist]);

    // Clear the file input field after uploading
    fileInputRef.current.value = null;
  };

  return (
    <div>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        multiple
        ref={fileInputRef} // Reference to the file input field
      />
    </div>
  );
}

export default AudioUpload;
