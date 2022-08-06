import React, {useRef} from 'react';

const LibrarySong = ({song, setCurrentSong, songs, id, audioRef, isPlaying, 
    setSongs, isPreviewPlaying}) =>{
    const songSelectHandler = async () =>{
        if(!isPreviewPlaying){
            const selectedSong  = songs.filter((state) => state.id === id);
            await setCurrentSong(selectedSong[0]);
            const newSongs = songs.map((song) =>{
                if(song.id === id){
                    return{
                        ...song, active: true,
                    }
                }else{
                    return{
                        ...song, active: false,
                    }
                }
            })
            setSongs(newSongs)
            if(isPlaying) audioRef.current.play();
        }
    }
 
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img alt={song.name} src={song.cover} className="songCover"></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;