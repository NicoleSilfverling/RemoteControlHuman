import * as React from "react";
import { Audio } from "expo-av";

const Audioplayer = function () {
  const [soundBg, setSoundBg] = React.useState();

  async function playSoundBg() {
    console.log("Loading Sound");
    const { soundBg } = await Audio.Sound.createAsync(
      require("../assets/sounds/robotbakgrundsloop.wav")
    );
    setSoundBg(soundBg);

    console.log("Playing Sound");
    await soundBg.playAsync();
    return {
      soundBg: soundBg,
    };
  }

  React.useEffect(() => {
    return soundBg
      ? () => {
          console.log("Unloading Sound");
          soundBg.unloadAsync();
        }
      : undefined;
  }, [soundBg]);
};

export default Audioplayer;
