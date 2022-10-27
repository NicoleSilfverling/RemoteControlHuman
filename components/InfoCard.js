import React, { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const InfoCard = ({ setShowInfoCard }) => {
  const [pageNr, setPageNr] = useState(1);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.clickableBG}
        onPress={() => {
          setShowInfoCard(false);
        }}
      >
        <View />
      </TouchableHighlight>
      <View style={styles.infoCard}>
        {pageNr < 3 ? (
          <TouchableHighlight
            underlayColor={"transparent"}
            style={[styles.arrow, { right: 2, alignItems: "flex-end" }]}
            onPress={() => {
              setPageNr(pageNr + 1);
            }}
          >
            <Image
              style={styles.arrowIcon}
              source={require("../assets/icons/rightIcon.png")}
            />
          </TouchableHighlight>
        ) : null}
        {pageNr > 1 ? (
          <TouchableHighlight
            underlayColor={"transparent"}
            style={[styles.arrow, { left: 2, alignItems: "flex-start" }]}
            onPress={() => {
              setPageNr(pageNr - 1);
            }}
          >
            <Image
              style={styles.arrowIcon}
              source={require("../assets/icons/leftIcon.png")}
            />
          </TouchableHighlight>
        ) : null}

        {pageNr < 3 ? (
          <TouchableHighlight
            underlayColor={"transparent"}
            style={styles.skip}
            onPress={() => {
              setShowInfoCard(false);
            }}
          >
            <Text style={styles.skipText}>skip</Text>
          </TouchableHighlight>
        ) : null}

        {pageNr == 3 ? (
          <TouchableHighlight
            underlayColor={"#00A300"}
            style={styles.startBtn}
            onPress={() => {
              setShowInfoCard(false);
            }}
          >
            <View style={styles.startCont}>
              <Text style={styles.startText}>LET'S PLAY</Text>
              <Image
                style={styles.startIcon}
                source={require("../assets/icons/rightIcon.png")}
              />
            </View>
          </TouchableHighlight>
        ) : null}

        {pageNr == 1 ? (
          <View style={styles.txtBox}>
            <Text style={styles.textStyle}>
              Blind Bot is a tool to remote control a human.
              {"\n"}
              {"\n"}
              Blind Bot was created by Rumtiden Idea Lab. programmed by Nicole
              Silfverling and Nasir Tedros, concept by Hakan Lidbo.
            </Text>
          </View>
        ) : null}
        {pageNr == 2 ? (
          <View style={styles.txtBox}>
            <Text style={styles.textStyle}>
              One person is the operates the controller, the other one the robot
              and is blindfolded.
              {"\n"}
              {"\n"}
              Send voice commandos with the controller buttons that your robot
              must follow.
              {"\n"}
              {"\n"}
              Create challenges to perform a simple task.
            </Text>
          </View>
        ) : null}
        {pageNr == 3 ? (
          <View style={styles.txtBox}>
            <Text style={styles.textStyle}>
              For further instructions, please watch this video.
            </Text>
          </View>
        ) : null}

        <View style={styles.dotContainer}>
          <View style={styles.progressDot} />
          <View
            style={[
              styles.progressDot,
              pageNr > 1
                ? { backgroundColor: "#FFF" }
                : { backgroundColor: "transparent" },
            ]}
          />
          <View
            style={[
              styles.progressDot,
              pageNr > 2
                ? { backgroundColor: "#FFF" }
                : { backgroundColor: "transparent" },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    zIndex: 2,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 0,
    padding: 0,
  },
  clickableBG: {
    backgroundColor: "rgba(0, 0, 0,0.4 )",
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // backgroundColor: "blue",
  },
  infoCard: {
    width: 400,
    height: 400,
    backgroundColor: "rgba(40, 40, 40,1 )",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
    // padding: 40,
  },
  arrow: {
    position: "absolute",
    zIndex: 1,
    // borderColor: "#FFF",
    // borderWidth: 1,
    // borderRadius: 50,
    // width: 40,
    // height: 40,
    width: "40%",
    height: "100%",
    justifyContent: "center",
    // backgroundColor: "blue",
    // bottom: "50%",
  },
  arrowIcon: {
    // backgroundColor: "red",
    tintColor: "#FFF",
    width: 40,
    height: 40,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: "50%",
    backgroundColor: "#FFF",
    marginRight: 5,
  },
  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
  },
  txtBox: {
    width: "80%",
    height: "90%",
    // backgroundColor: "green",
  },
  textStyle: {
    color: "#FFF",
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    fontSize: 20,
  },
  skip: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: "10%",
    width: "30%",
    // backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    zIndex: 3,
    paddingRight: 14,
    paddingBottom: 4,
  },
  skipText: {
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    color: "#FFF",
    fontSize: 15,
  },
  startBtn: {
    borderWidth: 1,
    borderColor: "$green",
    borderRadius: 3,
    width: 110,
    height: 30,
    margin: 4,
    zIndex: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "75%",
  },
  startIcon: {
    width: 25,
    height: "100%",
    tintColor: "$green",
    // backgroundColor: "pink",
  },
  startCont: {
    flexDirection: "row",
    paddingLeft: 10,
    // backgroundColor: "blue",
  },
  startText: {
    // backgroundColor: "blue",

    // width: 60,
    color: "#FFF",
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
  },
  "@media (max-width: 1000)": {
    infoCard: {
      width: 260,
      height: 250,
    },
    progressDot: {
      width: 7,
      height: 7,
    },
    arrowIcon: {
      width: 25,
      height: 25,
    },
    textStyle: {
      fontSize: 14,
    },
    skipText: {
      fontSize: 14,
    },
  },
});
