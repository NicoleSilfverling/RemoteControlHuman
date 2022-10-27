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
            style={[styles.arrow, { right: 2 }]}
            title="Close"
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
            style={[styles.arrow, { left: 2 }]}
            title="Close"
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

        {pageNr == 1 ? (
          <View>
            <Text style={styles.textStyle}>
              Blind Bot is a tool to remote control a human.
              {"\n"}
              {"\n"}
              One person is the operates the controller, the other one the robot
              and is blindfolded.
              {"\n"}
              {"\n"}
              Send voice commandos with the controller buttons that your robot
              must follow.
            </Text>
          </View>
        ) : null}
        {pageNr == 2 ? (
          <View>
            <Text style={styles.textStyle}>
              Create challenges to perform a simple task.
              {"\n"}
              {"\n"}
              Play against other controller+robot teams.
              {"\n"}
              {"\n"}
              Create an abstract ballet, filmed with time lapse.
            </Text>
          </View>
        ) : null}
        {pageNr == 3 ? (
          <View>
            <Text style={styles.textStyle}>Page 3</Text>
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
    padding: 40,
  },
  arrow: {
    position: "absolute",
    // zIndex: 2,
    // borderColor: "#FFF",
    // borderWidth: 1,
    // borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    bottom: "50%",
  },
  arrowIcon: {
    // backgroundColor: "red",
    tintColor: "#FFF",
    width: "100%",
    height: "100%",
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
  textStyle: {
    color: "#FFF",
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    fontSize: 20,
  },
  "@media (max-width: 1000)": {
    infoCard: {
      width: 250,
      height: 250,
    },
    progressDot: {
      width: 7,
      height: 7,
    },
    arrow: {
      width: 25,
      height: 25,
    },
    textStyle: {
      fontSize: 14,
    },
  },
});
