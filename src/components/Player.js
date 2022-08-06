import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faPause, faRepeat, faShuffle, faVolumeLow, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs, 
    setCurrentSong, activeLibrary, shuffle, setShuffle, playlist, playlistIndex, setPlaylistIndex, 
    setBackPlaylistIndex, backPlaylistIndex, forwardPlaylistIndex, setForwardPlaylistIndex}) =>{
    let [repeat, setRepeat] = useState(0);
    
    const playSong = () =>{
        audioRef.current.volume = songInfo.volume;
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    const getTime = (time) =>{
        return (Math.floor(time /60) + ":" + ("0" + Math.floor(time %60)).slice(-2))
    }

    const drag = (e) =>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipTrack = async (direction) =>{
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        let newIndex = 0;
        if(direction === 'forward'){
            if(shuffle === 1){
                let num = playlistIndex
                if(num === 0) num = songs.length - 1
                setBackPlaylistIndex(num)
                if(playlistIndex === songs.length - 1){
                    setPlaylistIndex(0)
                }else{
                    setPlaylistIndex(idx => idx + 1)
                }
                newIndex = (playlist[playlistIndex++]);
            }else{
                if(currentIndex === songs.length - 1) newIndex = 0;
                else newIndex = currentIndex + 1;
            }
        }
        if(direction ==='back'){
            if(shuffle === 1){
                if(backPlaylistIndex === 0 || backPlaylistIndex === 1){
                    if(backPlaylistIndex === 0){
                        newIndex = playlist[songs.length - 1]
                        setBackPlaylistIndex(songs.length - 1)
                        setPlaylistIndex(songs.length - 1)
                    }else{
                        newIndex = playlist[0]
                        setBackPlaylistIndex(0)
                    }
                }
                else{
                    newIndex = playlist[backPlaylistIndex - 1]
                    setBackPlaylistIndex(idx => idx - 1)
                    setPlaylistIndex(idx => idx - 1)
                }
            }
            else{
                if(currentIndex === 0) newIndex = songs.length - 1;
                else newIndex = currentIndex - 1;
            }
        }
        await setCurrentSong(songs[newIndex]);
        activeLibrary(songs[newIndex]);
        if (isPlaying) audioRef.current.play();
    }

    const repeatSong = () =>{
        repeat++;
        if(repeat > 1){
            repeat = 0;
            audioRef.current.loop = false;
        }else{
            repeat = 1;
            audioRef.current.loop = true;
        }
        setRepeat(repeat)
    }

    const shuffleSong = () =>{
        shuffle++;
        shuffle > 1 ? setShuffle(0) : setShuffle(1);
    }

    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    const changeVolume = (e) =>{
        setSongInfo({...songInfo, volume: Math.round(e.target.valueAsNumber * 100)/ 10000})
        audioRef.current.volume = Math.round(e.target.valueAsNumber * 100)/ 10000;
    }

    const wheelVolume = (e) =>{
        const direction = e.deltaY;
        const vol = Math.round(audioRef.current.volume * 100) / 100;
        if(direction < 0 && vol + 0.05 <= 1){
            setSongInfo({...songInfo, volume: vol + 0.05})
            audioRef.current.volume = vol + 0.05;
        }
        if(direction > 0 && vol - 0.05 >= 0){
            setSongInfo({...songInfo, volume: vol - 0.05})
            audioRef.current.volume = vol - 0.05;
        }
    }

    return(
        <div className='player'>
            <div className='time-control'>
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track" >
                    <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={drag}/>
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration): '0:00' }</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon 
                    className='skip-back' 
                    size='2x' 
                    icon={faBackward}
                    onClick={() => skipTrack('back')}/>
                <FontAwesomeIcon 
                    className={`${shuffle === 1 ? 'shuffle' : ''}`} 
                    size='2x' 
                    icon={faShuffle} 
                    onClick={shuffleSong}/>
                <FontAwesomeIcon 
                    className='play' 
                    size='2x' 
                    icon={isPlaying ? faPause : faPlay} 
                    onClick={playSong} />
                <FontAwesomeIcon 
                    className={`${repeat === 1 ? 'repeat' : ''}`} 
                    size='2x' 
                    icon={faRepeat}
                    onClick={repeatSong}/>    
                <FontAwesomeIcon 
                    className='skip-forward' 
                    size='2x' 
                    icon={faForward} 
                    onClick={() => skipTrack('forward')}/>
            </div>
            <div className="volume-control">
                <FontAwesomeIcon 
                size='2x' 
                icon={faVolumeLow}
                />
                <div onWheel={wheelVolume}>
                    <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="5" 
                    className='volume-slider' 
                    onInput={changeVolume} 
                    value={songInfo.volume * 100}/>
                </div>
                <FontAwesomeIcon 
                size='2x' 
                icon={faVolumeHigh}
                />
            </div>
        </div>
    )
}

export default Player;