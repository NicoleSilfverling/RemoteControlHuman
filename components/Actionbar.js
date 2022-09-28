import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const Actionbar = ({ groupId }) => {
  let backgroundColorBar1 = "transparent";
  let backgroundColorBar2;
  let backgroundColorBar3;
  let backgroundColorBar4;
  let backgroundColorBar5;

  console.log(groupId + " actionbar groupid");
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

  useEffect(() => {
    colorStylesBar1 = {
      backgroundColor: backgroundColorBar1,
    };
    colorStylesBar2 = {
      backgroundColor: backgroundColorBar2,
    };
    colorStylesBar3 = {
      backgroundColor: backgroundColorBar3,
    };
    colorStylesBar4 = {
      backgroundColor: backgroundColorBar4,
    };
    colorStylesBar4 = {
      backgroundColor: backgroundColorBar5,
    };
  }, [groupId]);

  return (
    <View style={styles.container}>
      <View style={[styles.bar1, colorStylesBar1]}></View>
      <View style={[styles.bar2, colorStylesBar2]}></View>
      <View style={[styles.bar3, colorStylesBar3]}></View>
      <View style={[styles.bar4, colorStylesBar4]}></View>
      <View style={[styles.bar5, colorStylesBar5]}></View>
    </View>
  );
};

export default Actionbar;

const styles = StyleSheet.create({
  container: {
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
    flex: 0.5,
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
});
