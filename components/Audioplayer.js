import * as React from "react";
import { Audio } from "expo-av";

export default Audioplayer() {
  console.log("logging audioplayer and pressed buttonID: " + btnId);
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/arm.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  playSound();
/* 
  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]); */
}
