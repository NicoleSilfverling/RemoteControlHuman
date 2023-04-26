import React, { useContext } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { AudioPlayerContext } from "../SharedAudioPlayer";
import { chooseAudioFile } from "./RandomCommand";
import { TouchableHighlight, Image, View } from "react-native";

export default function RandomDice({ setButtonId, isActive }) {
  const sharedAudioPlayer = useContext(AudioPlayerContext);

  async function playSound() {
    const sel = chooseAudioFile();

    sharedAudioPlayer.play(sel);
  }
  return (
    <TouchableHighlight
      style={[styles.container]}
      //   activeOpacity={0.5}
      //   underlayColor="red"
      onPress={() => {
        playSound();
        setButtonId("random");
      }}
    >
      <Image
        style={[styles.dice, isActive ? styles.highlighted : null]}
        source={require("../assets/images/randomDiceBG.png")}
        resizeMode="contain"
      />
    </TouchableHighlight>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    width: "100%",
    height: "100%",
  },
  highlighted: {
    backgroundColor: "pink",
  },
});
