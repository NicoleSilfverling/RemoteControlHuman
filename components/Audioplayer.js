import * as React from "react";
import { Audio } from "expo-av";

const Audioplayer = function () {
  const [soundBackground, setSoundBackground] = React.useState();

  async function playBackgroundSound() {
    console.log("Loading Sound");
    const { soundBackground } = await Audio.Sound.createAsync(
      require("../assets/sounds/robotbakgrundsloop.wav")
    );
    setSound(soundBackground);

    console.log("Playing Sound");
    await soundBackground.playAsync();
  }
  return {
    playBackgroundSound: playBackgroundSound,
  };
  // playSound();

  React.useEffect(() => {
    return soundBackground
      ? () => {
          console.log("Unloading Sound");
          soundBackground.unloadAsync();
        }
      : undefined;
  }, [soundBackground]);
};

export default Audioplayer;
