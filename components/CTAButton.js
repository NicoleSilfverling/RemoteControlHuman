import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

const CTAButton = (props) => {
  return (
    <TouchableHighlight
      onPress={() => console.log("Button pressed")}
      style={styles.container}
      activeOpacity={0.5}
      underlayColor="#67c904"
    >
      <Text style={styles.textStyle}>{props.btnTitle}</Text>
    </TouchableHighlight>
  );
};

export default CTAButton;

const styles = StyleSheet.create({
  container: {
    height: "9%",
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
});
