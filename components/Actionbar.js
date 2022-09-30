import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import ContentSelector from "./ContentSelector";

const Actionbar = ({ groupId, buttonId }) => {
  let titleGroup1;
  if (groupId == "1") {
    titleGroup1 = ContentSelector(buttonId).title;
  }

  let backgroundColorBar1 = "transparent";
  let backgroundColorBar2;
  let backgroundColorBar3;
  let backgroundColorBar4;
  let backgroundColorBar5;
  if (groupId == "1") {
    backgroundColorBar1 = "#FFF";
  } else if (groupId == "2") {
    backgroundColorBar1 = "#FFF";
    backgroundColorBar2 = "#ffd500";
  } else if (groupId == "3") {
    backgroundColorBar1 = "#FFF";
    backgroundColorBar2 = "#ffd500";
    backgroundColorBar3 = "orange";
  } else if (groupId == "4") {
    backgroundColorBar1 = "#FFF";
    backgroundColorBar2 = "#ffd500";
    backgroundColorBar3 = "orange";
    backgroundColorBar4 = "#00A300";
  } else if (groupId == "5") {
    backgroundColorBar1 = "#FFF";
    backgroundColorBar2 = "#ffd500";
    backgroundColorBar3 = "orange";
    backgroundColorBar4 = "#00A300";
    backgroundColorBar5 = "#FFF";

    setTimeout(() => {
      console.log("set timeout runs");
      backgroundColorBar1 = "red";
      //   backgroundColorBar2 = "transparent";
      //   backgroundColorBar3 = "transparent";
      //   backgroundColorBar4 = "transparent";
      //   backgroundColorBar5 = "transparent";
    }, 1000);
  }

  let colorStylesBar1 = {
    backgroundColor: backgroundColorBar1,
  };
  let colorStylesBar2 = {
    backgroundColor: backgroundColorBar2,
  };
  let colorStylesBar3 = {
    backgroundColor: backgroundColorBar3,
  };
  let colorStylesBar4 = {
    backgroundColor: backgroundColorBar4,
  };
  let colorStylesBar5 = {
    backgroundColor: backgroundColorBar5,
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>SECTION</Text>
        <Text style={styles.textStyle}>BODY PART</Text>
        <Text style={styles.textStyle}>ACTION</Text>
        <Text style={styles.textStyle}>DIRECTION</Text>
      </View>

      <View style={styles.barContainer}>
        <View style={[styles.bar1, colorStylesBar1]}></View>
        <View style={[styles.bar2, colorStylesBar2]}></View>
        <View style={[styles.bar3, colorStylesBar3]}></View>
        <View style={[styles.bar4, colorStylesBar4]}></View>
        {/* <View style={[styles.bar5, colorStylesBar5]}></View> */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{titleGroup1}</Text>
        <Text style={styles.textStyle}>BODY PART</Text>
        <Text style={styles.textStyle}>ACTION</Text>
        <Text style={styles.textStyle}>DIRECTION</Text>
      </View>
    </View>
  );
};

export default Actionbar;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
  },
  barContainer: {
    height: 15,
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  bar1: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
    marginRight: "1%",
  },
  bar2: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ffd500",
    borderRadius: 10,
    marginRight: "1%",
  },
  bar3: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 10,
    marginRight: "1%",
  },
  bar4: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#00A300",
    borderRadius: 10,
    marginRight: "1%",
  },
  bar5: {
    flex: 0.5,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
    marginRight: "1%",
  },
  textStyle: {
    flex: 1,
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    marginRight: "1%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
