const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const songs = [
    
{name: 'What-You-Know-Bout-Love', displayName: 'What You Know Bout Love'},
{name: 'Aim-For-the-Moon-[feat-Quavo]', displayName: 'Aim For The Moon'},
{name: 'Diana-[feat-King-Combs]', displayName: 'Diana'},
{name: 'Dreaming', displayName: 'Dreaming'},
{name: 'Element', displayName: 'Element'},
{name: 'Get Back', displayName: 'Get Back'},
{name: 'Invincible', displayName: 'Invincible'},

{name: 'For-the-Night-[feat-Lil-Baby-DaBaby]', displayName: 'For the Night'},

{name: '44-Bulldog', displayName: '44-Bulldog'},


{name: 'Armed N Dangerous (Charlie Sloth', displayName: 'Armed N Dangerous'},
{name: 'Enjoy-Yourself-[feat-Karol-G]', displayName: 'Enjoy Yourself'},
{name: 'Gangstas', displayName: 'Gangstas'},
{name: 'Mannequin (feat. Lil Tjay)', displayName: 'Mannequin'},
{name: 'Mood-Swing-[feat-Lil-Tjay]', displayName: 'Mood Swing'},
{name: 'Tunnel-Vision-Outro-', displayName: 'Tunnel Vision'},
{name: 'War (feat. Lil Tjay) [Bonus]', displayName: 'War'},
{name: 'Snitchin-[feat-Quavo-Future]', displayName: 'Snitchin'},
{name: 'Dior-Bonus-', displayName: 'Dior'},
{name: 'Creature-[feat-Swae-Lee]', displayName: 'Creature'},
{name: 'The-Woo-[feat-50-Cent-Roddy-Ricch]', displayName: 'The Woo'},
{name: 'Got-it-on-me', displayName: 'Got it on me'},
{name: 'Something-Special', displayName: 'Something Special'},

{name: 'West-Coast-Shit-[feat-Tyga-Quavo]', displayName: 'West Coast Shit'},
{name: 'Foreigner', displayName: 'Foreigner'},
{name: 'Yea-Yea', displayName: 'Yea Yea'}

]



// Music
// const songs = [
//   {
//     name: "jacinto-1",
//     displayName: "STG",
//     // artist: 'MCL'
//   },
//   {
//     name: "jacinto-2",
//     displayName: "STG",
//     // artist: 'MCL'
//   },
//   {
//     name: "jacinto-3",
//     displayName: "STG",
//     // artist: 'MCL'
//   },
//   {
//     name: "jacinto-3",
//     displayName: "-2",
//     // artist: 'MCL'
//   },
//   {
//     name: "Pop-Smoke-19-Dior-Bonus-",
//     displayName: "Dior",
//     // artist:'Pop',
//   },
// ];

// Check If Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}
function pauseSong() {
  isPlaying = false;
  playBtn.setAttribute("title", "Play");
  playBtn.classList.replace("fa-pause", "fa-play");
  music.pause();
}

// Play , Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  // artist.textContent = song.artist;
  artist.textContent = "Pop Smoke";

  music.src = `music/${song.name}.mp3`;
  image.src = `img/popImage.jpg`;
}

let songIndex = 0;
// Next Song
function nextSong() {
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }

//   console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
//   console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// loadSong(songs[2]);

// Update Progress BAr And TIme
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // console.log(duration,currentTime);
    // Update progress bar width
    const progressPercent = String((currentTime / duration) * 100 + "%");
    console.log(progressPercent);
    progress.style.width = progressPercent;

    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    // console.log('minutes',durationMinutes);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // console.log(durationSeconds);
    // Delaying Display
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // Calculate display for current
    const currentMinutes = Math.floor(currentTime / 60);
    // console.log('minutes',currentMinutes);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    // console.log(durationSeconds);
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    // if (durationEl.textContent==='NaN:NaN') {
    //     durationEl.textContent='Fetching..';
    // }
  }
}


// Set Progress Bar
function setProgressBar(e) {
    console.log(e);
    const width = this.clientWidth;
    console.log(width);
    const clickX = e.offsetX;
    console.log(clickX);

    const {duration} = music;
    // console.log("MUSUIC",music);
    console.log((clickX/width)*duration);
    music.currentTime = (clickX/width)*duration;


}







// Event Listeners
music.addEventListener('ended',nextSong);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
