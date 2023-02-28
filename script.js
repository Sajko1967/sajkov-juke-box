const imageElement = document.getElementById('image');
const titleElement = document.getElementById('title');
const artistElement = document.getElementById('artist');
const musicElement = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progressBarElement = document.getElementById('progress');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music

class Song {
  constructor(name, artist) {
    this.name = name;
    this.artist = artist;
  }
}
const song1 = new Song('Rolling In The Deep', 'Adelle');
const song2 = new Song('Love And Happiness', 'Al Green');
const song3 = new Song('Fallin', 'Alicia Keys');
const song4 = new Song('Back To Black', 'Amy Winehouse');
const song5 = new Song('Paid My Dues', 'Anastacia');
const song6 = new Song("Why'd You Lie To Me", 'Anastacia');
const song7 = new Song("It's A New Day", 'Anouk');
const song8 = new Song('Everybody', 'Backstreet Boys');
const song9 = new Song('Crazy In Love', 'Beyonce');
const song10 = new Song('If I Were A Boy', 'Beyonce');
const song11 = new Song("Ain't No Sunshine", 'Bill Withers');
const song12 = new Song('Breathe', 'Blu Cantrell');
const song13 = new Song("It's My Life", 'Bon Jovi');
const song14 = new Song('Baby One More Time', 'Britney Spears');
const song15 = new Song('Oops! I Did It Again', 'Britney Spears');
const song16 = new Song('Fuck You', 'CeeLo Green');
const song17 = new Song('Malaguena Salerosa', 'Chingon');
const song18 = new Song('Beautiful', 'Christina Aguilera');
const song19 = new Song('Fighter', 'Christina Aguilera');
const song20 = new Song('Hurt', 'Christina Aguilera');
const song21 = new Song('The Rhytm Of The Night', 'Corona');
const song22 = new Song('One Love', 'David Guetta feat. Estelle');
const song23 = new Song('Survivor', "Destiny's Child");
const song24 = new Song('My Kind Of Love', 'Emeli Sande');
const song25 = new Song('Sisters', 'Eurythmics feat. Aretha Frenklin');
const song26 = new Song('Bring Me To Life', 'Evanescence');
const song27 = new Song('A Little Party', 'Fergie');
const song28 = new Song('Everybody Get Up', 'Five');
const song29 = new Song('Good Feeling', 'Flo Rida');
const song30 = new Song('Killing Me Softly', 'Fugees');
const song31 = new Song('We Are Young', 'Fun feat. Janelle Monae');
const song32 = new Song('More Than Friends', 'James Hype feat. Kelli Leigh');
const song33 = new Song('Ni Tu Ni Yo', 'Jennifer Lopez feat. Gente de Zona');
const song34 = new Song("You're The One That I Want", 'John Travolta');
const song35 = new Song('Stronger', 'Kelly Clarkson');
const song36 = new Song("Can't Fight The Moonlight", 'LeAnn Rimes');
const song37 = new Song('Thunderclouds', 'LSD feat. Sia, Diplo, Labrinth');
const song38 = new Song('Thrift Shop', 'Macklemore, Ryan Lewis feat. Wanz');
const song39 = new Song('Family affair', 'Mary J. Blige');
const song40 = new Song('Nothing Else Matters', 'Metallica');
const song41 = new Song('How You Remind Me', 'Nickelblack');
const song42 = new Song('Smells Like Teen Spirit', 'Nirvana');
const song43 = new Song('Love Runs Out', 'One Republic');
const song44 = new Song('Gangnam Style', 'Psy');
const song45 = new Song('Show Must Go ON', 'Queen');
const song46 = new Song('Everybody Hurts', 'R.E.M.');
const song47 = new Song('Loosing My Religion', 'R.E.M.');
const song48 = new Song('Cry Baby Cry', 'Santana feat. Sean Paul & Joss Stone');
const song49 = new Song('Still Loving You', 'Scorpions');
const song50 = new Song('Stuck', 'Stacie Orrico');
const song51 = new Song("Let's Get It Started", 'The Black Eyed Pees');
const song52 = new Song('Roxxane', 'The Police');

const songs = [
  song1,
  song2,
  song3,
  song4,
  song5,
  song6,
  song7,
  song8,
  song9,
  song10,
  song11,
  song12,
  song13,
  song14,
  song15,
  song16,
  song17,
  song18,
  song19,
  song20,
  song21,
  song22,
  song23,
  song24,
  song25,
  song26,
  song27,
  song28,
  song29,
  song30,
  song31,
  song32,
  song33,
  song34,
  song35,
  song36,
  song37,
  song38,
  song39,
  song40,
  song41,
  song42,
  song43,
  song44,
  song45,
  song46,
  song47,
  song48,
  song49,
  song50,
  song51,
  song52,
];

// Check if playing
let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  musicElement.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  musicElement.pause();
}

function loadSong(song) {
  titleElement.textContent = song.name;
  artistElement.textContent = song.artist;
  musicElement.src = `music/My-music/${song.artist} - ${song.name}.mp3`;
  imageElement.src = `img/Images/${song.artist} - ${song.name}.jpg`;
}

let songIndex = 0;

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBarElement.style.width = `${progressPercent}%`;
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    if (durationSeconds) {
      durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);

    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

function setProgressBar(e) {
  const progressBarWith = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = musicElement;
  musicElement.currentTime = (clickX / progressBarWith) * duration;
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
musicElement.addEventListener('ended', nextSong);
musicElement.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
