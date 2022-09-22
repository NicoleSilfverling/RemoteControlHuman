import React, { useState } from "react";
import { Audio } from "expo-av";

export async function playSound(btnId) {
  //   const [sound, setSound] = React.useState();
  console.log("logging audioplayer and pressed buttonID: " + btnId);
  //   async function playSound() {
  //     console.log("Loading Sound");
  //     const { sound } = await Audio.Sound.createAsync(
  //       require("./assets/arm.wav")
  //     );
  //     setSound(sound);

  //     console.log("Playing Sound");
  //     await sound.playAsync();
  //   }

  //   React.useEffect(() => {
  //     return sound
  //       ? () => {
  //           console.log("Unloading Sound");
  //           sound.unloadAsync();
  //         }
  //       : undefined;
  //   }, [sound]);
}
