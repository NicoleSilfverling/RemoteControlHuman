import React from "react";
import { Audio } from "expo-av";
import { StyleSheet, TouchableHighlight, Text, Image } from "react-native";
import ContentSelector from "./ContentSelector";
// import { playSound } from "./Audioplayer";
import { testFunc } from "./ShowImage";

export default function CTAButton({
  btnTitle,
  btnGroup,
  btnId,
  showImage,
  setShowImage,
}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      ContentSelector(btnId).sound
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  let btnBorderColor = "#FFF";
  let btnBackgroundColor = "black";

  if (btnGroup == "1") {
    btnBorderColor = "#FFF";
  } else if (btnGroup == "2") {
    btnBorderColor = "#ffd500";
  } else if (btnGroup == "3") {
    btnBorderColor = "orange";
  } else if (btnGroup == "4") {
    btnBorderColor = "#00A300";
  } else if (btnGroup == "STOP") {
    btnBackgroundColor = "#f70903";
    btnBorderColor = "#FFF";
  } else {
    btnBorderColor = "#FFF";
    btnBackgroundColor = "black";
  }
  const colorStyles = {
    borderColor: btnBorderColor,
    backgroundColor: btnBackgroundColor,
  };
  return (
    <TouchableHighlight
      onPress={() => {
        setShowImage(true), playSound();
      }}
      //  on press -> ShowContent(ID) -> ContentSelector(ID) -> ShowContent() -> play sound,
      style={[styles.container, colorStyles]}
      activeOpacity={0.5}
      underlayColor={btnBorderColor}
    >
      <React.Fragment>
        <Image style={styles.icon} source={ContentSelector(btnId).iconImg} />
        <Text style={styles.textStyle}>{btnTitle}</Text>
      </React.Fragment>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "12%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#FFF",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    width: "245%",
    color: "#FFF",
    fontSize: 24,
    position: "absolute",
    bottom: -50,
    textAlign: "center",
    fontWeight: "bold",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
