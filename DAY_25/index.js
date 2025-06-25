const image = document.getElementById("cover");
title = document.getElementById("music-title");
artist = document.getElementById("music-artist");
currentTimeEl = document.getElementById("current-time");
durationEl = document.getElementById("duration");
progress = document.getElementById("progress");
playerProgress = document.getElementById("player-progress");
prevBtn = document.getElementById("prev")
nextBtn = document.getElementById("next")
playBtn = document.getElementById("play")
background = document.getElementById("bg-img")

const music = new Audio();

const songs = [
    {
        path: 'assets/99.mp3',
        displayName: '99',
        cover: 'assets/Olamide.jpg',
        artist: 'Olamide ft Asake, Young John, Seyi Vibe',
    },
    {
        path: 'assets/free.mp3',
        displayName: 'FREE',
        cover: 'assets/free.jpeg',
        artist: 'Olamide ft Seyi Vibe, Muyeez',
    },
    {
        path: 'assets/kai.mp3',
        displayName: 'Kai',
        cover: 'assets/kai.jpeg',
        artist: 'Olamide ft Wizkid',
    },
     {
        path: 'assets/Hassibunallah.mp3',
        displayName: 'Hassibunallah',
        cover: 'assets/Olamide.jpg',
        artist: 'Olamide',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    };
};


function playMusic(){
    isPlaying = true;
    //change Play Btn Icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    //Set btn hover title
    playBtn.setAttribute('title','Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    //change Play Btn Icon
    playBtn.classList.replace( 'fa-pause', 'fa-play');
    //Set btn hover title
    playBtn.setAttribute('title','Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;

}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
};

function updateProgressBar(){
    const {duration, currentTime} = music;
    const progressPercent = (currentTime/duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2,'0');
    durationEl.textContent = `${formatTime( duration/60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime/60)}:${formatTime(currentTime % 60)}`;
};

function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX/width) * music.duration;
};

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener ('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
