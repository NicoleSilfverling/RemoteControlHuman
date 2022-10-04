import React from "react";
import { Audio } from "expo-av";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View,
} from "react-native";
import ContentSelector from "./ContentSelector";
// import { playSound } from "./Audioplayer";
import { testFunc } from "./ShowImage";
import EStyleSheet from "react-native-extended-stylesheet";

export default function CTAButton({
  btnTitle,
  btnGroup,
  btnId,
  setShowImage,
  setButtonId,
  setBodyHalfLeft,
  bodyHalfLeft,
  setGroupId,
}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      ContentSelector(btnId, bodyHalfLeft).sound
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

  let leftSide;

  if (btnId == "L1") leftSide = true;
  else if (btnId == "L7") leftSide = false;

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          setShowImage ? setShowImage(true) : null,
            playSound(),
            setButtonId ? setButtonId(btnId) : null,
            setBodyHalfLeft ? setBodyHalfLeft(leftSide) : null,
            setGroupId ? setGroupId(btnGroup) : null;
        }}
        //  on press -> ShowContent(ID) -> ContentSelector(ID) -> ShowContent() -> play sound,
        style={[styles.button, colorStyles]}
        activeOpacity={0.5}
        underlayColor={btnBorderColor}
      >
        <Image style={styles.icon} source={ContentSelector(btnId).iconImg} />
      </TouchableHighlight>
      <Text style={styles.textStyle}>{btnTitle}</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    // width: "100%",
    height: "15%",
    aspectRatio: 1,

    // backgroundColor: "red",
    alignItems: "center",
  },
  button: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 6,
    borderColor: "#FFF",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    width: "250%",
    color: "#FFF",
    fontSize: "1.7rem",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: "15%",
  },
  "@media (max-width: 1300)": {
    textStyle: {
      fontSize: "1.7rem",
      width: "260%",
    },
    button: {
      borderRadius: 10,
      borderWidth: 4,
    },
    container: {
      height: "14%",
    },
  },
  "@media (max-width: 1000)": {
    textStyle: {
      fontSize: "1rem",
      width: "260%",
    },
    button: {
      borderRadius: 10,
      borderWidth: 3,
    },
    container: {
      height: "17%",
    },
  },
  "@media (max-width: 900)": {
    textStyle: {
      fontSize: "0.8rem",
      width: "260%",
      paddingTop: "7%",
    },
    button: {
      borderRadius: 8,
      borderWidth: 3,
    },
    container: {
      height: "17%",
    },
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
