---
---

var tracklistToggle = document.querySelectorAll(".js-tracklist-toggle");
var tracklistClose = document.querySelectorAll(".js-tracklist-close");
var playButton = document.querySelectorAll(".js-play");

var audioPlayer = document.getElementById("c-footer-audio__player");
var audioWrapper = document.querySelector(".c-footer-audio__wrapper");
var audioClose = document.querySelector(".js-audio-close");
var audioPlayPause = document.querySelector(".js-footer-audio__play-pause svg");
var audioElapsed = document.querySelector(".c-footer-audio--elapsed");
var audioDuration = document.querySelector(".c-footer-audio--duration");

var modalToggle = document.querySelector(".js-modal-toggle");
var modal = document.querySelector(".c-modal--about");

for (i = 0; i < tracklistToggle.length; i++) {
  tracklistToggle[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("js-tracklist-visible");
  })
};

for (i = 0; i < tracklistClose.length; i++) {
  tracklistClose[i].addEventListener("click", function(){
    this.parentElement.classList.toggle("js-tracklist-visible");
  })
};

for (i = 0; i < playButton.length; i++) {
  playButton[i].addEventListener("click", function(){
    audioWrapper.classList.add("is-visible");
    var audioFile = this.dataset.audio;
    audioPlayer.src = audioFile;
    audioPlayPause.classList.toggle("is-playing");
    audioPlayer.play();
  })
};

audioClose.addEventListener("click", function() {
  audioWrapper.classList.remove("is-visible");
  audioPlayer.pause();
})

audioPlayPause.addEventListener("click", function(){
  audioPlayPause.classList.toggle("is-playing");
  if(audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  };
})

modalToggle.addEventListener("click", function(){
  modal.classList.toggle("is-visible");
})

function SetVolume(val) {
  audioPlayer.volume = val / 100;
}

function updateTrackTime(track){
  var currTime = Math.floor(track.currentTime).toString();
  var duration = Math.floor(track.duration).toString();
  audioElapsed.innerHTML = formatSecondsAsTime(currTime);
  if (isNaN(duration)){
    audioDuration.innerHTML = '00:00';
  }
  else{
    audioDuration.innerHTML = formatSecondsAsTime(duration);
  }
}

function formatSecondsAsTime(secs, format) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

  if (min < 10){
    min = "0" + min;
  }
  if (sec < 10){
    sec  = "0" + sec;
  }

  return hr + ':' + min + ':' + sec;
}
