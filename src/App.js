import React, {useState, useRef, useEffect} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import songlist from './SongList';
import Library from './components/Library';
import Nav from './components/Nav'
import { generatePlaylist } from './handlers/handlers';

function App() {
  const [songs, setSongs] = useState(songlist());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
      animationPercentage: 0,
      volume: 0.1
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  let [shuffle, setShuffle] = useState(0);
  const [playlist, setPlaylist] = useState([1]);
  let [playlistIndex, setPlaylistIndex] = useState(1);
  let [backPlaylistIndex, setBackPlaylistIndex] = useState(0);
  let [forwardPlaylistIndex, setForwardPlaylistIndex] = useState(0);

  const timeUpdate = (e) =>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percent = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: percent})
 }
  
  const audioRef = useRef(null);

  useEffect(() =>{
    generatePlaylist(setPlaylist, songs, currentSong);
    setPlaylistIndex(1);
    setBackPlaylistIndex(0);
    setForwardPlaylistIndex(0);
    // eslint-disable-next-line
  }, [shuffle])

  const songEnd = async () =>{
    if(shuffle === 0){
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
      setPlaylist([currentIndex])
      let newIndex = 0;
      if(currentIndex === songs.length - 1) newIndex = 0;
      else newIndex = currentIndex + 1;
      await setCurrentSong(songs[newIndex]);
      activeLibrary(songs[newIndex]);
    }
    if(shuffle === 1){
        console.log(`playlist: ${playlist}, playlist index: ${playlistIndex}`)
        if(playlistIndex === songs.length - 1){
          setPlaylistIndex(0)
        }
        let i = (playlist[playlistIndex]);
        await setCurrentSong(songs[i]);
        activeLibrary(songs[i]);
        setPlaylistIndex(idx => idx + 1)
    }
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
          playPromise.then((audio) =>{
              audioRef.current.play();
          }).catch(err => {
            audioRef.current.play();
        })
      }
    }
  }

  const activeLibrary = (nextPrev) =>{
    const newSongs = songs.map((song) =>{
        if(song.id === nextPrev.id){
            return{
                ...song, active: true,
            }
        }else{
            return{
                ...song, active: false,
            }
        }
    })
    setSongs(newSongs);
}

  return (
    <div className={`App ${libraryStatus ? 'library-active': ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} isPlaying={isPlaying}/>
      <Player 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        activeLibrary={activeLibrary}
        shuffle={shuffle}
        setShuffle={setShuffle}
        playlist={playlist}
        playlistIndex={playlistIndex}
        setPlaylistIndex={setPlaylistIndex}
        backPlaylistIndex={backPlaylistIndex}
        setBackPlaylistIndex={setBackPlaylistIndex}
        forwardPlaylistIndex={forwardPlaylistIndex}
        setForwardPlaylistIndex={setForwardPlaylistIndex}/>
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        audioRef={audioRef} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        songInfo={songInfo}/>
      <audio 
        src={currentSong.audio} 
        ref={audioRef} 
        onTimeUpdate={timeUpdate} 
        onLoadedMetadata={timeUpdate}
        onEnded={songEnd}>
      </audio>
      <div className="container" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
      
      </div>
    </div>
  );
}

export default App;