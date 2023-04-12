const groupA = [
  require("../assets/sounds/hand.wav"),
  require("../assets/sounds/arm.wav"),
  require("../assets/sounds/index.wav"),
];

const groupB = [
  require("../assets/sounds/left.wav"),
  require("../assets/sounds/up.wav"),
  require("../assets/sounds/right.wav"),
];

const groupC = [
  require("../assets/sounds/move.wav"),
  require("../assets/sounds/twist.wav"),
  require("../assets/sounds/stretch.wav"),
];

let count = 0;

export function chooseAudioFile() {
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
