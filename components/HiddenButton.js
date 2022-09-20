import React from "react";
import { View, StyleSheet } from "react-native";

const HiddenButton = () => {
  return <View style={styles.container}></View>;
};

export default HiddenButton;

const styles = StyleSheet.create({
  container: {
    height: "12%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "transparent",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
