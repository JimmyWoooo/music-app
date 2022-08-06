export const generatePlaylist = (setPlaylist, songs, currentSong) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let arr = [];
    setPlaylist([currentIndex])
    for(let i = 0; i < songs.length; i++){
        arr.push(i);
    }
    let index = arr.length;
    let ranIndex;
    while(index !== 0){
        ranIndex = Math.floor(Math.random() * index)
        index--;

        [arr[index], arr[ranIndex]] = [arr[ranIndex], arr[index]]
    }
    let done = false;
    let location = 0;
    while(!done){
        if(arr[location] === currentIndex){
            [arr[location], arr[0]] = [arr[0], arr[location]]
            done = true;
        }else{
            location++
        }
    }
    for(let x = 1; x < songs.length; x++){
        setPlaylist(play => [...play, arr[x]])
    }
};