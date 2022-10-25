import React from "react";
import {
  View,
  ScrollView,
  Button,
  TouchableHighlight,
  Text,
  Image,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Video, AVPlaybackStatus } from "expo-av";

const HelpPopUp = ({ setShowHelpPopUp }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.clickableBG}
        onPress={() => {
          setShowHelpPopUp(false);
        }}
      >
        <View />
      </TouchableHighlight>
      <View style={styles.popUp}>
        <TouchableHighlight
          style={styles.closeButton}
          title="Close"
          onPress={() => {
            setShowHelpPopUp ? setShowHelpPopUp(false) : null;
          }}
        >
          <Image
            style={styles.closeIcon}
            source={require("../assets/icons/rightIcon.png")}
          />
        </TouchableHighlight>

        {/* <Text style={styles.title}>BlindBot</Text> */}

        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/videos/robothumaninfo.mp4")}
          useNativeControls="false"
          resizeMode="contain"
          shouldPlay
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.leftContainer}>
          <ScrollView style={styles.textOnTopContainer}>
            <Text style={styles.textOnTopStyle}>
              The Controller is divided into 4 sections. The best way to create
              a commando for your robot is in this order.{"\n"}
              {"\n"}
              1. Body half - left, right
              {"\n"}
              <View style={styles.iconContainer}>
                <View style={styles.iconBorder}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/leftIcon.png")}
                  />
                </View>
                <View style={styles.iconBorder}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/rightIcon.png")}
                  />
                </View>
              </View>
              {"\n"}
              {"\n"}2. Body part - torso, arm, hand, thumb, index finger, leg,
              foot{"\n"}
              <View style={styles.iconContainer}>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/torsoIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/handIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/footIcon.png")}
                  />
                </View>
              </View>
              {"\n"}
              {"\n"}
              3. Action - move, bend, stretch, twist{"\n"}
              <View style={styles.iconContainer}>
                <View style={[styles.iconBorder, styles.orangeIcon]}>
                  <Image
                    style={[styles.icon, styles.orangeIcon]}
                    source={require("../assets/icons/moveIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.orangeIcon]}>
                  <Image
                    style={[styles.icon, styles.orangeIcon]}
                    source={require("../assets/icons/bendIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.orangeIcon]}>
                  <Image
                    style={[styles.icon, styles.orangeIcon]}
                    source={require("../assets/icons/stretchIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.orangeIcon]}>
                  <Image
                    style={[styles.icon, styles.orangeIcon]}
                    source={require("../assets/icons/twistIcon.png")}
                  />
                </View>
              </View>
              {"\n"}
              {"\n"}
              4. Direction - up, down, forward, backward, left, right{"\n"}
              <View style={styles.iconContainer}>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/upIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/downIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/forwardIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/backwardIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/leftIcon.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/rightIcon.png")}
                  />
                </View>
              </View>
              {"\n"}
              {"\n"}
              There are 2 additional buttons that are useful - stop, reset body
              position.{"\n"}
              <View style={styles.iconContainer}>
                <View style={styles.iconBorder}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/stopIcon.png")}
                  />
                </View>
                <View style={styles.iconBorder}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/resetIcon.png")}
                  />
                </View>
              </View>
              {"\n"}
              {"\n"}
              To play Blind Bot the robot must trust the operator. Play on a
              flat surface without obstacles. Never play close to bumps, holes
              ot staircases.
              {"\n"}
              {"\n"}
              Feel free to film and share your Blind Bot games. Please use
              #blindbot{"\n"}
              {"\n"}
              {"\n"}Blind Bot was created by Rumtiden Idea Lab. programmed by
              Nicole Silfverling and Nasir Tedros, concept by Hakan Lidbo.
              {"\n"}
              {"\n"}
            </Text>
          </ScrollView>
        </View>
        {/* 
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
      </View>
    </View>
  );
};

export default HelpPopUp;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    zIndex: 5,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%",
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
  },
  popUp: {
    backgroundColor: "black",
    alignSelf: "center",
    justifyContent: "center",
    // width: "80%",
    // height: "80%",
    width: 1150,
    height: 647,
    borderRadius: 10,
    // borderColor: "#FFF",
    // borderWidth: 2,
  },
  video: {
    alignSelf: "center",
    // width: "100%",
    // height: "100%",
    width: 1150,
    height: 647,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 2,
    right: 2,
    zIndex: 50,
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
  },
  closeIcon: {
    // backgroundColor: "red",
    tintColor: "#FFF",
    width: "100%",
    height: "100%",
  },
  closeText: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: "bold",
  },
  leftContainer: {
    flex: 1,
    zIndex: 5,
    position: "absolute",
    right: 0,
    top: "0%",
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "54%",
    height: "60%",
    padding: "5%",
  },
  textOnTopContainer: {
    // flex: 1,
    // zIndex: 5,
    // position: "absolute",
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
    // width: "100%",
    // height: "100%",
    // padding: "5%",
  },

  textOnTopStyle: {
    color: "$textColor",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
  },
  iconBorder: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 3,
    width: 30,
    height: 30,
    margin: 4,
  },
  greenIcon: {
    borderColor: "$green",
    tintColor: "$green",
  },
  yellowIcon: {
    borderColor: "$yellow",
    tintColor: "$yellow",
  },
  orangeIcon: {
    borderColor: "$orange",
    tintColor: "$orange",
  },
  icon: {
    width: "100%",
    height: "100%",
    tintColor: "#FFFFFF",
  },
  iconContainer: {
    flexDirection: "row",
    paddingLeft: 15,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 50,
    zIndex: 10,
    marginLeft: "5%",
  },

  "@media (max-width: 1300)": {
    textOnTopStyle: {
      fontSize: 16,
    },
    popUp: {
      width: 960,
      height: 540,
    },
    video: {
      width: 960,
      height: 540,
    },
  },
  "@media (max-width: 1000)": {
    textOnTopStyle: {
      fontSize: 14,
    },
    popUp: {
      width: 580,
      height: 326,
    },
    video: {
      width: 580,
      height: 326,
    },
  },
  "@media (max-width: 900)": {
    textOnTopStyle: {
      fontSize: 14,
    },
    popUp: {
      width: 500,
      height: 281,
    },
    video: {
      width: 500,
      height: 281,
    },
  },
  "@media (max-width: 780)": {
    textOnTopStyle: {
      fontSize: 14,
    },
    popUp: {
      width: "75%",
      height: "75%",
    },
    video: {
      width: "100%",
      height: "100%",
    },
  },
});
