const groupA = [
  require("./assets/audio/groupA1.mp3"),
  require("./assets/audio/groupA2.mp3"),
  require("./assets/audio/groupA3.mp3"),
];

const groupB = [
  require("./assets/audio/groupB1.mp3"),
  require("./assets/audio/groupB2.mp3"),
  require("./assets/audio/groupB3.mp3"),
];

const groupC = [
  require("./assets/audio/groupC1.mp3"),
  require("./assets/audio/groupC2.mp3"),
  require("./assets/audio/groupC3.mp3"),
];

let count = 0;

function chooseAudioFile() {
  let audioFile;

  if (count < 3) {
    audioFile = groupA[Math.floor(Math.random() * groupA.length)];
  } else if (count < 6) {
    audioFile = groupB[Math.floor(Math.random() * groupB.length)];
  } else if (count < 10) {
    audioFile = groupC[Math.floor(Math.random() * groupC.length)];
  } else {
    audioFile = groupC[Math.floor(Math.random() * groupC.length)];
    count = 0;
  }

  count++;

  return audioFile;
}
