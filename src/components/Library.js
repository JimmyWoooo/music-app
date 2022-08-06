import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, 
    libraryStatus, songInfo}) =>{
    return(
        <div className={`library ${libraryStatus  ? 'active-library' : ''}`}>
            <h2>Library <span>({songs.length})</span></h2>
            <div className="library-songs">
                {songs.map(song =>(
                    <LibrarySong 
                        song={song} 
                        setCurrentSong={setCurrentSong} 
                        songs={songs} 
                        id={song.id}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                        songInfo={songInfo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;