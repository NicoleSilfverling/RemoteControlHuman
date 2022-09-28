import React, {useEffect} from "react";
import { StyleSheet, View } from "react-native";

const Actionbar = (groupId) => {


  let backgroundColorFill;

  if (groupId=="1") {
    backgroundColorFill = "#FFF"
  }

  let colorStyles;


  useEffect(() => {
    colorStyles = {
  
      backgroundColor : backgroundColorFill
    }
  }, [groupId])
  

  


  return (
    <View style={styles.container}>
      <View style={[styles.bar1, colorStyles]}></View>
      <View style={styles.bar2}></View>
      <View style={styles.bar3}></View>
      <View style={styles.bar4}></View>
      <View style={styles.bar5}></View>
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
