const groupA = [
  require("../assets/sounds/rndCmd/e1_jump fwd.wav"),
  require("../assets/sounds/rndCmd/e2_turn180.wav"),
  require("../assets/sounds/rndCmd/e3_walk bkw.wav"),
  require("../assets/sounds/rndCmd/e4_clap.wav"),
  require("../assets/sounds/rndCmd/e5_hello.wav"),
  require("../assets/sounds/rndCmd/e6_emotions.wav"),
  require("../assets/sounds/rndCmd/e7_sit.wav"),
  require("../assets/sounds/rndCmd/e8_pig.wav"),
];

const groupB = [
  require("../assets/sounds/rndCmd/e9_chicken.wav"),
  require("../assets/sounds/rndCmd/e10_broken_robot.wav"),
  require("../assets/sounds/rndCmd/e11_robot_dance.wav"),
  require("../assets/sounds/rndCmd/e12_lay down.wav"),
  
  require("../assets/sounds/rndCmd/e13_obediant.wav"),
  require("../assets/sounds/rndCmd/e14_hurt_human.wav"),
  require("../assets/sounds/rndCmd/e15_clear_the_way.wav"),
  require("../assets/sounds/rndCmd/e16_not_to_be_trusted.wav"),
];

const groupC = [
  require("../assets/sounds/rndCmd/e17_bend_legs.wav"),
  require("../assets/sounds/rndCmd/e18_claws.wav"),
  require("../assets/sounds/rndCmd/e19_spaghetti.wav"),
  require("../assets/sounds/rndCmd/e20_fish.wav"),
  require("../assets/sounds/rndCmd/e21_flying.wav"),
  require("../assets/sounds/rndCmd/e22_vacuum_cleaner.wav"),
  require("../assets/sounds/rndCmd/e23_stand_on_hands.wav"),
  require("../assets/sounds/rndCmd/e24_360.wav"),
  require("../assets/sounds/rndCmd/e25_sleep.wav"),
  require("../assets/sounds/rndCmd/e26_lion.wav"),
  require("../assets/sounds/rndCmd/e27_twist_head.wav"),
  require("../assets/sounds/rndCmd/e28_offend.wav"),
  require("../assets/sounds/rndCmd/e29_quit.wav"),
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
