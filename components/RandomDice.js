import React, { useContext } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { AudioPlayerContext } from "../SharedAudioPlayer";
import { chooseAudioFile } from "./RandomCommand";
import { TouchableHighlight, Image, View } from "react-native";

export default function RandomDice({ setButtonId, isActive, setShowImage }) {
  const sharedAudioPlayer = useContext(AudioPlayerContext);

  async function playSound() {
    const sel = chooseAudioFile();

    sharedAudioPlayer.play(sel);
  }
  return (
    <TouchableHighlight
      style={[styles.container, isActive ? styles.highlighted : null]}
      //   activeOpacity={0.5}
      underlayColor="#FFF"
      onPress={() => {
        playSound();
        setButtonId("random");
        setShowImage && setShowImage(true);
      }}
    >
      <Image
        style={[styles.dice, isActive ? styles.invert : null]}
        source={require("../assets/images/randomDice.png")}
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
    borderColor: "transparent",
    borderRadius: 10,
  },
  dice: {
    width: "65%",
    height: "65%",
  },
  highlighted: {
    backgroundColor: "#FFF",
  },
  invert: {
    // tintColor: "black",
  },

  "@media (max-width: 1300)": {
    container: {
      borderRadius: 6,
    },
  },
});
