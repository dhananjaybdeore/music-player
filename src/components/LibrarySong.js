import React from "react";
const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //Handlers
  const songSelectHandler =async () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    // setCurrentSong(selectedSong[0]);
    await setCurrentSong(song);
    // audioRef.current.play();
    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if the song is playing
    // playAudio(isPlaying, audioRef);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
