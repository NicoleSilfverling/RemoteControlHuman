import React, { useContext, useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { AudioPlayerContext } from "../SharedAudioPlayer";

const InfoCard = ({ setShowInfoCard }) => {
  const [pageNr, setPageNr] = useState(1);
  const sharedAudioPlayer = useContext(AudioPlayerContext)
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.clickableBG}
        onPress={() => {
          sharedAudioPlayer.startBackgroundLoop()
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
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableHighlight>
        ) : null}

        {pageNr == 3 ? (
          <TouchableHighlight
            underlayColor={"#00A300"}
            style={styles.startBtn}
            onPress={() => {
              sharedAudioPlayer.startBackgroundLoop()
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
            {/* <Text style={styles.textStyle}>
              Blind Bot is a tool to remote control a human.
              {"\n"}
              {"\n"}
              Blind Bot was created by Rumtiden Idea Lab. programmed by Nicole
              Silfverling and Nasir Tedros, concept by Hakan Lidbo.
            </Text> */}
            <Text style={styles.textStyle}>
              Send voice commandos with the controller buttons that your robot
              must follow.
              {/* Play against other controller+robot teams. */}
            </Text>
            <View style={styles.imageBox}>
              <Image
                style={[styles.gubbe]}
                source={require("../assets/images/gubbe.png")}
              />
            </View>
            <Text style={styles.textStyle}>
              Use wireless headphones and a blindfold for best effect.
            </Text>
          </View>
        ) : null}
        {pageNr == 2 ? (
          <View style={styles.txtBox}>
            {/* <Text style={styles.textStyle}>
              One person is the operates the controller, the other one the robot
              and is blindfolded.
              {"\n"}
              {"\n"}
              Send voice commandos with the controller buttons that your robot
              must follow.
              {"\n"}
              {"\n"}
              Create challenges to perform a simple task.
            </Text> */}
            <Text style={styles.textStyle}>
              Create challenges to perform a simple task. Play against other
              controller+robot teams.
            </Text>
            <View style={styles.imageBox}>
              <Image
                style={styles.ballet}
                source={require("../assets/images/ballerina2.png")}
              />
              <Image
                style={styles.blocks}
                source={require("../assets/images/blocks.png")}
              />
              {/* <Image
                style={styles.ballet}
                source={require("../assets/images/ballerina2.png")}
              /> */}
            </View>
            <Text style={styles.textStyle}>
              Create an abstract ballet or try to build the highest tower.
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
          <View
            style={[
              styles.progressDot,
              pageNr == 1
                ? { backgroundColor: "#FFF" }
                : { backgroundColor: "transparent" },
            ]}
          />
          <View
            style={[
              styles.progressDot,
              pageNr == 2
                ? { backgroundColor: "#FFF" }
                : { backgroundColor: "transparent" },
            ]}
          />
          <View
            style={[
              styles.progressDot,
              pageNr == 3
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
  },
  arrow: {
    position: "absolute",
    zIndex: 1,
    width: "40%",
    height: "100%",
    justifyContent: "center",
    // backgroundColor: "blue",
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
    borderRadius: 50,
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
    height: "80%",
    // backgroundColor: "green",
  },
  textStyle: {
    color: "#FFF",
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    fontSize: 18,
    textTransform: "uppercase",

    alignSelf: "center",
    textAlign: "center",
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
    fontSize: 16,
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
  ballet: {
    height: 120,
    width: 50,
    tintColor: "#FFF",
    marginLeft: 15,
    // borderColor: "red",
    // borderWidth: 1,
  },
  blocks: {
    height: 120,
    width: 110,
    tintColor: "#FFF",
    marginLeft: 15,
  },
  imageBox: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 25,
    // paddingLeft: 15,
  },
  gubbe: {
    height: 120,
    width: 120,
    tintColor: "#FFF",
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
    imageBox: {
      marginTop: 15,
      marginBottom: 15,
    },
    gubbe: {
      height: 60,
      width: 60,
      tintColor: "#FFF",
    },
    ballet: {
      height: 60,
      width: 25,
      tintColor: "#FFF",
      marginLeft: 15,
    },
  },
});
