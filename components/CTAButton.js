import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import ContentSelector from "./ContentSelector";
import { playSound } from "./Audioplayer";

const CTAButton = ({ btnTitle, btnGroup, btnId }) => {
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
      onPress={() => console.log("hello")}
      //  on press -> ShowContent(ID) -> ContentSelector(ID) -> ShowContent() -> play sound,
      style={[styles.container, colorStyles]}
      activeOpacity={0.5}
      underlayColor={btnBorderColor}
    >
      <Text style={styles.textStyle}>{btnTitle}</Text>
    </TouchableHighlight>
  );
};

export default CTAButton;

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
});
