import React from "react";
import { StyleSheet, View } from "react-native";

const Actionbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar1}></View>
      <View style={styles.bar2}></View>
      <View style={styles.bar3}></View>
      <View style={styles.bar4}></View>
    </View>
  );
};

export default Actionbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  bar1: {
    flex: 1,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#FFF",
  },
  bar2: {
    flex: 1,
    backgroundColor: "#ffd500",
    borderWidth: 1,
    borderColor: "#FFF",
  },
  bar3: {
    flex: 1,
    backgroundColor: "orange",
    borderWidth: 1,
    borderColor: "#FFF",
  },
  bar4: {
    flex: 1,
    backgroundColor: "#00A300",
    borderWidth: 1,
    borderColor: "#FFF",
  },
});
