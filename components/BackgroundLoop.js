import { Audio } from "expo-av";

// export default async function backgroundLoop() {
//   const playbackObject = await Audio.Sound.createAsync(
//     require("../assets/sounds/robotbakgrundsloop.wav"),
//     { isLooping: true }
//   );

//   await playbackObject.playAsync();

// }

export default async function backgroundLoop() {
  console.log("Loading Sound");
  const { sound } = await Audio.Sound.createAsync(
    require("../assets/sounds/reset.wav"),
    { isLooping: true }
  );

  console.log("Playing Sound");
  await sound.playAsync();
}