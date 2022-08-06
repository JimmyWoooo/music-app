import React from 'react';

const Song = ({currentSong, isPlaying}) =>{
    return(
        <div className='song-container'>
            <div className='vinyl'>
                <img alt={currentSong.name} src={currentSong.cover} className={`songCover ${isPlaying ? 'active' : ''}`}></img>
            </div>
            <h2><a href={currentSong.link} target="_blank">{currentSong.name}</a></h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;