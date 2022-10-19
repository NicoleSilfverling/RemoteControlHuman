import React from "react";
import { View, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const HiddenButton = () => {
  return <View style={styles.hiddenBtn}></View>;
};

export default HiddenButton;

const styles = EStyleSheet.create({
  hiddenBtn: {
    height: "15%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  "@media (max-width: 1300)": {
    hiddenBtn: {
      height: "14%",
      borderRadius: 10,
      borderWidth: 1,
    },
  },
  "@media (max-width: 1000)": {
    hiddenBtn: {
      height: "17%",
      borderRadius: 10,
      borderWidth: 1,
    },
  },
  "@media (max-width: 900)": {
    hiddenBtn: {
      height: "17%",
      borderRadius: 8,
      borderWidth: 1,
    },
  },
});
