import {v4 as uuidv4} from 'uuid'
import s1 from './music/Autumn.mp3'
import s2 from './music/Beyond The Memory.mp3'
import s3 from './music/Cold Winter.mp3'
import s4 from './music/Fly a Letter to the Wind.mp3'
import s5 from './music/Forgotten.mp3'
import s6 from './music/I remember you.mp3'
import s7 from './music/In Love.mp3'
import s8 from './music/My Soul.mp3'
import s9 from './music/Remember Me.mp3'
import s10 from './music/Somewhere.mp3'
import s11 from './music/Unable.mp3'

function songList(){
    return [
        {
            name: "Autumn",
            audio: s1,
            cover: "https://i.scdn.co/image/ab67616d0000b27328a9c38d44cd06ee9c5ca44d",
            artist: "July",
            color: ["#ede2c9", "#e49e46"], 
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/5f70Ie5hgWwwpSnaVnKvEt'
        },
        {
            name: "Beyond The Memory",
            audio: s2,
            cover: "https://i.scdn.co/image/ab67616d0000b273088f30289f7c0e59a3e82bc6",
            artist: "July",
            color: ["#529dde", "#edca90"],
            active: true,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/643ozuluvtE9hpvQxSI1pG'
        },
        {
            name: "Cold Winter",
            audio: s3,
            cover: "https://i.scdn.co/image/ab67616d0000b273ecda914bbe7833407b5364ec",
            artist: "July",
            color: ["#c9e3fa", "#5279a9"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/0kKktEyBhO6BDZUQcAjsaW'
        },
        {
            name: "Fly a Letter to the Wind",
            audio: s4,
            cover: "https://i.scdn.co/image/ab67616d0000b273ec748d43ed136531c13bd596",
            artist: "July",
            color: ["#d1c7a4", "#ab7848"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/5wOlRp7zUfRH1UY81JN41f'
        },
        {
            name: "Forgotten",
            audio: s5,
            cover: "https://i.scdn.co/image/ab67616d0000b273b647d914f95eb8b01d7257bc",
            artist: "July",
            color: ["#242424", "#d5d5d5"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/4UwMv1z1FVDzYf1na6qPnx'
        },
        {
            name: "Remember You",
            audio: s6,
            cover: "https://i.scdn.co/image/ab67616d0000b2739ed9ef5cd15cf06d7a7ff6b6",
            artist: "July",
            color: ["#d0c1ae", "#947a61"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/3MyG4RtbwyJ4PnBlflUqnB'
        },
        {
            name: "In Love",
            audio: s7,
            cover: "https://i.scdn.co/image/ab67616d0000b2737d92bfef4fcafbfe19d10865",
            artist: "July",
            color: ["#9cacac", "#4c596e"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/78NFLZbISqFcgHEmNtIWHd'
        },
        {
            name: "My Soul",
            audio: s8,
            cover: "https://i.scdn.co/image/ab67616d0000b2735c9a8607df7a8c5fb461e1ae",
            artist: "July",
            color: ["#595559", "#e0d0c7"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/18mx9Nwyc5u191GH282Sea'
        },
        {
            name: "Remember Me",
            audio: s9,
            cover: "https://i.scdn.co/image/ab67616d0000b2737d92bfef4fcafbfe19d10865",
            artist: "July",
            color: ["#9cacac", "#4c596e"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/2XX3dAZw0qRoMbgIz3EoVZ'
        },
        {
            name: "Somewhere",
            audio: s10,
            cover: "https://i.scdn.co/image/ab67616d0000b2737d92bfef4fcafbfe19d10865",
            artist: "July",
            color: ["#9cacac", "#4c596e"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/425O5hrUPYmM1xJaWxvGsb'
        },
        {
            name: "Unable",
            audio: s11,
            cover: "https://i.scdn.co/image/ab67616d0000b273b647d914f95eb8b01d7257bc",
            artist: "July",
            color: ["#242424", "#d5d5d5"],
            active: false,
            id: uuidv4(),
            link: 'https://open.spotify.com/track/36ZExegLAuA0C71BHWlDjf'
        }
    ]
}

export default songList;