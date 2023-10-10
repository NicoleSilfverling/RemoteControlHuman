const groupA = [
  require("../assets/sounds/rndCmd/e1_jump_fwd.wav"),
  require("../assets/sounds/rndCmd/e2_turn180.wav"),
  require("../assets/sounds/rndCmd/e3_walk_bkw.wav"),
  require("../assets/sounds/rndCmd/e4_clap.wav"),
  require("../assets/sounds/rndCmd/e5_hello.wav"),
  require("../assets/sounds/rndCmd/e7_sit.wav"),
  require("../assets/sounds/rndCmd/ex6_shake.wav"),
  require("../assets/sounds/rndCmd/ex2_nod_head.wav"),
  require("../assets/sounds/rndCmd/ex3_fingers_crossed.wav"),
  require("../assets/sounds/rndCmd/ex1_hands_in_the_air.wav"),
  require("../assets/sounds/rndCmd/ex4_spread_toes.wav"),
];

const groupB = [
  require("../assets/sounds/rndCmd/e9_chicken.wav"),
  require("../assets/sounds/rndCmd/e10_broken_robot.wav"),
  require("../assets/sounds/rndCmd/e11_robot_dance.wav"),
  require("../assets/sounds/rndCmd/e12_lay_down.wav"),
  require("../assets/sounds/rndCmd/e13_obediant.wav"),
  require("../assets/sounds/rndCmd/e14_hurt_human.wav"),
  require("../assets/sounds/rndCmd/e15_clear_the_way.wav"),
  require("../assets/sounds/rndCmd/e16_not_to_be_trusted.wav"),
  require("../assets/sounds/rndCmd/e8_pig.wav"),
  require("../assets/sounds/rndCmd/e6_emotions.wav"),
  require("../assets/sounds/rndCmd/e22_vacuum_cleaner.wav"),
];

const groupC = [
  require("../assets/sounds/rndCmd/e17_bend_legs.wav"),
  require("../assets/sounds/rndCmd/e18_claws.wav"),
  require("../assets/sounds/rndCmd/e19_spaghetti.wav"),
  require("../assets/sounds/rndCmd/e20_fish.wav"),
  require("../assets/sounds/rndCmd/e21_flying.wav"),
  require("../assets/sounds/rndCmd/e23_stand_on_hands.wav"),
  require("../assets/sounds/rndCmd/e24_360.wav"),
  require("../assets/sounds/rndCmd/e25_sleep.wav"),
  require("../assets/sounds/rndCmd/e26_lion.wav"),
  require("../assets/sounds/rndCmd/e27_twist_head.wav"),
  require("../assets/sounds/rndCmd/e28_offend.wav"),
  require("../assets/sounds/rndCmd/ex1_bend_joints.wav"),  
  require("../assets/sounds/rndCmd/ex5_walk_on_heels.wav"),
];

let count = 0;
let selectedGroup;
let selectedSoundIndex;

export function chooseAudioFile() {
  let audioFile;

  if (count === 0) {
    const randomGroup = 0;

    if (randomGroup === 0) {
      selectedGroup = groupA;
    } else if (randomGroup === 1) {
      selectedGroup = groupB;
    } else {
      selectedGroup = groupC;
    }

    selectedSoundIndex = Math.floor(Math.random() * selectedGroup.length);
  } else {
    if (count < 7) {
      selectedGroup = groupA;
    } else if (count < 10 ) {
      selectedGroup = groupB;
    } else {
      selectedGroup = groupC;
    }

    selectedSoundIndex = (selectedSoundIndex + 1) % selectedGroup.length;
  }

  audioFile = selectedGroup[selectedSoundIndex];

  count++;
  if (count === 12) {
    count = 0;
  }

  return audioFile;
}
