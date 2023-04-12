import React, { useContext } from "react";
import { Audio } from "expo-av";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View,
} from "react-native";
import ContentSelector from "./ContentSelector";
import { AudioPlayerContext } from "../SharedAudioPlayer";
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
  setIsHand,
  isHand,
  isActive,
}) {
  const sharedAudioPlayer = useContext(AudioPlayerContext);

  async function playSound() {
    console.log("Loading Sound", btnId);
    const sel = ContentSelector(btnId, bodyHalfLeft, isHand).sound;

    sharedAudioPlayer.play(sel);
  }

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

  const colorStyleIcon = {
    tintColor: btnBorderColor,
  };

  let leftSide;

  if (btnId == "L1") leftSide = true;
  else if (btnId == "L7") leftSide = false;

  let toggleIsHand;
  if (btnId == "L2") toggleIsHand = true;
  else toggleIsHand = false;

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          setShowImage && setShowImage(true);
          playSound();
          setButtonId && setButtonId(btnId);
          setBodyHalfLeft && setBodyHalfLeft(leftSide);
          setGroupId && setGroupId(btnGroup);
          setIsHand && setIsHand(toggleIsHand);
        }}
        style={[
          styles.button,
          colorStyles,
          {
            backgroundColor: isActive ? colorStyles.borderColor : "transparent",
          },
        ]}
        activeOpacity={0.5}
        underlayColor={btnBorderColor}
      >
        <Image
          style={[styles.icon, colorStyleIcon]}
          source={ContentSelector(btnId).iconImg}
        />
      </TouchableHighlight>
      <Text style={styles.textStyle}>{btnTitle}</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    // width: "100%",
    height: "14%",
    aspectRatio: 1,

    // backgroundColor: "red",
    alignItems: "center",
  },
  button: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  highlighted: {
    backgroundColor: "red",
  },
  textStyle: {
    width: "250%",
    color: "$textColor",
    fontSize: "1.7rem",
    textAlign: "center",
    paddingTop: 10,
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
  },
  "@media (max-width: 1300)": {
    textStyle: {
      fontSize: "1.3rem",
      width: "260%",
    },
    button: {
      borderRadius: 10,
      borderWidth: 1,
    },
    container: {
      height: "13.5%",
    },
  },
  "@media (max-width: 1000)": {
    textStyle: {
      fontSize: "1rem",
      width: "260%",
    },
    button: {
      borderRadius: 10,
      borderWidth: 1,
    },
    container: {
      height: "17%",
    },
  },
  "@media (max-width: 900)": {
    textStyle: {
      fontSize: "0.8rem",
      width: "260%",
      paddingTop: 5,
    },
    button: {
      borderRadius: 8,
      borderWidth: 1,
    },
    container: {
      height: "17%",
    },
  },
  icon: {
    width: "100%",
    height: "100%",
    tintColor: "#FFFFFF",
  },
});
