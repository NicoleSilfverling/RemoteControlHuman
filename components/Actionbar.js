import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Actionbar = ({ groupId }) => {
  let backgroundColorBar1 = "transparent";
  let backgroundColorBar2;
  let backgroundColorBar3;
  let backgroundColorBar4;
  let backgroundColorMobile;

  if (groupId == "1") {
    backgroundColorBar1 = "#FFF";
    backgroundColorMobile = "#FFF";
  } else if (groupId == "2") {
    backgroundColorBar1 = "#FFF";
    backgroundColorMobile = "#ffd500";
    backgroundColorBar2 = "#ffd500";
  } else if (groupId == "3") {
    backgroundColorBar1 = "#FFF";
    backgroundColorBar2 = "#ffd500";
    backgroundColorBar3 = "orange";
    backgroundColorMobile = "orange";
  } else if (groupId == "4") {
    backgroundColorBar1 = "#FFF";
    backgroundColorBar2 = "#ffd500";
    backgroundColorBar3 = "orange";
    backgroundColorBar4 = "#00A300";
    backgroundColorMobile = "#00A300";
  } else if (groupId == "5") {
    backgroundColorBar1 = "transparent";
    backgroundColorBar2 = "transparent";
    backgroundColorBar3 = "transparent";
    backgroundColorBar4 = "transparent";
    backgroundColorMobile = "transparent";
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
  let colorStylesBarMobile = {
    backgroundColor: backgroundColorMobile,
  };

  return (
    <View style={styles.container}>
      <View style={styles.mobileContainer}>
        <View style={[styles.barMobile, colorStylesBarMobile]}></View>
      </View>
      <View style={styles.barContainer}>
        <View style={[styles.bar1, colorStylesBar1]}></View>
        <View style={[styles.bar2, colorStylesBar2]}></View>
        <View style={[styles.bar3, colorStylesBar3]}></View>
        <View style={[styles.bar4, colorStylesBar4]}></View>
      </View>
    </View>
  );
};

export default Actionbar;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: "5%",
  },

  barMobile: {
    height: 25,
    width: 25,
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 30,
  },
  barContainer: {
    //flex: 1,
    overflow: "hidden",
    borderRadius: 10,
  
    borderColor: "transparent",
    backgroundColor: "transparent",
    alignItems: "center",
    flexDirection: "row",
  },

  mobileContainer: {
    // height: 15,
    flex: 1,
    // width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    
    borderColor: "transparent",
    backgroundColor: "transparent",
    alignItems: "center",
    display: "none",
    flexDirection: "row",
  },

  bar1: {
    // flex: 1,
    /* width: "100%", */
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 15,
    marginRight: 7,
  },
  bar2: {
    width: "100%",
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#ffd500",
    borderRadius: 15,
    marginRight: 7,
  },
  bar3: {
    width: "100%",
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 15,
    marginRight: 7,
  },
  bar4: {
    width: "100%",
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#00A300",
    borderRadius: 15,
    marginRight: 7,
  },
  bar5: {
    flex: 0.5,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
    marginRight: "1%",
  },

  "@media (max-width: 1000)": {
    barContainer: {
      borderWidth: 0,
      display: "none",
    },
    mobileContainer: {
      
      display: "flex",
      /* paddingLeft: "2%", */
      paddingRight: "70%",
      marginLeft: "0%",
       //backgroundColor: "pink"
    },
  },
  "@media (max-width: 900)": {},
});
