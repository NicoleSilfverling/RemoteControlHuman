import React, { useContext } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { AudioPlayerContext } from "../SharedAudioPlayer";
import { chooseAudioFile } from "./RandomCommand";
import { TouchableHighlight, Image, View } from "react-native";

export default function RandomDice() {
  const sharedAudioPlayer = useContext(AudioPlayerContext);

  async function playSound() {
    const sel = chooseAudioFile();

    sharedAudioPlayer.play(sel);
  }
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        playSound();
      }}
    >
      <Image
        style={styles.dice}
        source={require("../assets/images/randomDice.png")}
      />
    </TouchableHighlight>
  );
}

const styles = EStyleSheet.create({
  //   dice: {
  //     width: "90%",
  //     height: "100%",
  //   },
});
