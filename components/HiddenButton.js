import React from "react";
import { View, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const HiddenButton = () => {
  return <View style={styles.container}></View>;
};

export default HiddenButton;

const styles = EStyleSheet.create({
  container: {
    height: "15%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 6,
    borderColor: "transparent",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  "@media (max-width: 1300)": {
    container: {
      height: "14%",
      borderRadius: 10,
      borderWidth: 4,
    },
  },
  "@media (max-width: 1000)": {
    container: {
      height: "17%",
      borderRadius: 10,
      borderWidth: 3,
    },
  },
  "@media (max-width: 900)": {
    container: {
      height: "17%",
      borderRadius: 8,
      borderWidth: 3,
    },
  },
});
