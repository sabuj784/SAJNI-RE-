const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const result = document.getElementById('result');
const yesAudio = document.getElementById('yesAudio');

const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Array of music files
const musicFiles = [
    '128-Tum Hi Ho - Aashiqui 2 128 Kbps.mp3',
    'Yeh Rishta Kya Kehlata Hai_320(PagalWorld.com.so).mp3',
    'Tera Ban Jaunga Kabir Singh 320 Kbps.mp3',
    'Husn(PagalWorld.com.sb).mp3'
];

let currentTrack = 0;
let currentImage = 0;

// Function to load and play the current track
function loadTrack(trackIndex) {
    yesAudio.src = musicFiles[trackIndex];
    yesAudio.play();
    playPauseButton.textContent = '⏸️ Pause';
}

// Event listener for the 'Yes' button
yesButton.addEventListener('click', () => {
    result.style.display = 'block';
    document.querySelector('.container').style.display = 'none';
    loadTrack(currentTrack); // Start playing music immediately
    displayImages();
});
noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    noButton.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
});
// Function to display the love message and images
function displayImages() {
    const loveMessage = document.querySelector('.loveMessage');
    loveMessage.style.display = 'block';
    
    const images = document.querySelectorAll('.images img');
    images[currentImage].classList.add('active');
    
    // Show the next image every 3 seconds
    setInterval(() => {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }, 3000); // Adjust the interval timing if needed

    // Show music controls immediately
    document.querySelector('.music-controls').style.display = 'block';
}

// Play/Pause button event listener
playPauseButton.addEventListener('click', () => {
    if (yesAudio.paused) {
        yesAudio.play();
        playPauseButton.textContent = '⏸️ Pause';
    } else {
        yesAudio.pause();
        playPauseButton.textContent = '⏯️ Play';
    }
});

// Previous button event listener
prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + musicFiles.length) % musicFiles.length;
    loadTrack(currentTrack);
});

// Next button event listener
nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % musicFiles.length;
    loadTrack(currentTrack);
});
var i = 0;
var txt1 = "Hi Sathi.....!  <<               Now I want to say something special to you. <<<                So, Please read everything carefully...!                                                                           > When I saw you for the first time < You seem something Special to me.  <<                  As the days go on < you get closer to me....! <<                           I don't know the reason why your thoughts always resonate inside my mind...!                                                     > Everything about you is always interesting for me...!                     << I am somewhat nervous because I haven't said these words to anyone and I won't say them to anyone in the future...!                                                     > I Love my Parents so much more than anything else in this world....!                    << Now You are the only person whom I love equally with my parents....!                                                             > I Love You, Sathi.....! |                  <<<< Give me one chance to Prove my Love ...!";
var speed = 50;

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == '<') {
      document.getElementById("text1").innerHTML += '<br>';  // Adds a line break
    } else if (txt1.charAt(i) == '>') {
      document.getElementById("text1").innerHTML = '';  // Clears the text
    } else {
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
