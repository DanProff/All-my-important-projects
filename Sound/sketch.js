function preload() {
  mySound = loadSound('Gelo  - Subjective Faiths.mp3')
}

function setup() {
  noCanvas();
  play = select("#play");
  play.mousePressed(playMusic);
}

function playMusic() {
      mySound.setVolume(0.1);
      mySound.play();
}
