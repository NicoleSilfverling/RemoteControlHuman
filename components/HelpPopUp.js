import React, { useContext, useState } from "react";

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
import { AudioPlayerContext } from "../SharedAudioPlayer";

const HelpPopUp = ({ setShowHelpPopUp, muted, setMuted }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const sharedAudioPlayer = useContext(AudioPlayerContext);

  sharedAudioPlayer.stopBackgroundLoop();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.clickableBG}
        onPress={() => {
          setShowHelpPopUp(false);
          if (!muted) {
            sharedAudioPlayer.startBackgroundLoop();
          }
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
            if (!muted) {
              sharedAudioPlayer.startBackgroundLoop();
            }
          }}
        >
          <Image
            style={styles.closeIcon}
            source={require("../assets/icons/close.png")}
          />
        </TouchableHighlight>

        {/* <Text style={styles.title}>BlindBot</Text> */}
        <TouchableHighlight
          style={styles.soundBtn2}
          underlayColor="transparent"
          onPress={() => {
            if (!muted) {
              setMuted(true);
              sharedAudioPlayer.stopBackgroundLoop();
            } else {
              setMuted(false);
              // sharedAudioPlayer.startBackgroundLoop();
            }
          }}
        >
          {muted ? (
            <Image
              style={styles.icon}
              source={require("../assets/icons/soundOff.png")}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require("../assets/icons/soundOn.png")}
            />
          )}
        </TouchableHighlight>
        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/videos/robothumaninfo.mp4")}
          useNativeControls="false"
          resizeMode="contain"
          shouldPlay
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          isMuted={muted}
        />
        <View style={styles.textBox}>
          <ScrollView 
          showsVerticalScrollIndicator={true} 
          persistentScrollbar={true}
          indicatorStyle={styles.scrollbarStyle}
          style={styles.textOnTopContainer}>
            <Text style={styles.title}>BlindBot </Text>

            <Text style={styles.textOnTopStyle}>
              The Controller is divided into 4 sections.
              {"\n"}
              {"\n"}
              The best way to create a command for your robot is in this order.
              {"\n"}
              {"\n"}
              1. Body half - left, right
              {"\n"}
              <View style={styles.iconContainer}>
                <View style={styles.iconBorder}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/bold/leftIconBold.png")}
                  />
                </View>
                <View style={styles.iconBorder}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/bold/rightIconBold.png")}
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
                    source={require("../assets/icons/bold/torsoIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/bold/armIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/bold/handIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/bold/thumbIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/bold/indexIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/bold/legIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.yellowIcon]}>
                  <Image
                    style={[styles.icon, styles.yellowIcon]}
                    source={require("../assets/icons/bold/footIconBold.png")}
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
                    source={require("../assets/icons/bold/moveIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.orangeIcon]}>
                  <Image
                    style={[styles.icon, styles.orangeIcon]}
                    source={require("../assets/icons/bold/bendIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.orangeIcon]}>
                  <Image
                    style={[styles.icon, styles.orangeIcon]}
                    source={require("../assets/icons/bold/stretchIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.orangeIcon]}>
                  <Image
                    style={[styles.icon, styles.orangeIcon]}
                    source={require("../assets/icons/bold/twistIconBold.png")}
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
                    source={require("../assets/icons/bold/upIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/bold/downIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/bold/forwardIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/bold/backwardIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/bold/leftIconBold.png")}
                  />
                </View>
                <View style={[styles.iconBorder, styles.greenIcon]}>
                  <Image
                    style={[styles.icon, styles.greenIcon]}
                    source={require("../assets/icons/bold/rightIconBold.png")}
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
                    source={require("../assets/icons/bold/stopIconBold.png")}
                  />
                </View>
                <View style={styles.iconBorder}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/icons/bold/resetIconBold.png")}
                  />
                </View>
              </View>
              {"\n"}
              {"\n"}
              {"\n"}
              To play Blind Bot the robot must trust the operator.
              {"\n"}
              {"\n"}
              Play on a flat surface without obstacles. Never play close to
              bumps, holes or staircases.
              {"\n"}
              {"\n"}
              Feel free to film and share your Blind Bot games. Please use
              #blindbot{"\n"}
              {"\n"}
              {"\n"}
              Blind Bot was created by Rumtiden Idea Lab.
              {"\n"}
              {"\n"}
              Programmed by Nicole Silfverling and Nasir Tedros, concept by
              Hakan Lidbo.
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
    top: 10,
    right: 10,
    zIndex: 50,
    // borderColor: "#FFF",
    // borderWidth: 1,
    // borderRadius: 50,
    width: 22,
    height: 22,
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
  textBox: {
    flex: 1,
    zIndex: 5,
    position: "absolute",
    right: 0,
    top: "0%",
    backgroundColor: "pink",
    width: "49%",
    height: "100%",
    paddingTop: "5%",
    paddingBottom: "5%",
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
  scrollbarStyle:{
    backgroundColor: "black",
    width: 10,
  },

  textOnTopStyle: {
    color: "$textColor",
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    textTransform: "uppercase",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    height: 35,
    lineHeight: Platform.OS === "ios" ? 35 * 1.3 : 35 * 1.2,
    textTransform: "uppercase",
    marginBottom: 20,
    // backgroundColor: "blue",
  },
  iconBorder: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 3,
    width: 26,
    height: 26,
    // width: 30,
    // height: 30,
    marginTop: 10,
    marginRight: 10,
  },
  greenIcon: {
    borderColor: "$green",
    tintColor: "$green",
    borderColor: "#FFF",
    tintColor: "#FFF",
  },
  yellowIcon: {
    borderColor: "$yellow",
    tintColor: "$yellow",
    borderColor: "#FFF",
    tintColor: "#FFF",
  },
  orangeIcon: {
    borderColor: "$orange",
    tintColor: "$orange",
    borderColor: "#FFF",
    tintColor: "#FFF",
  },
  icon: {
    width: "100%",
    height: "100%",
    tintColor: "#FFFFFF",
  },
  iconContainer: {
    flexDirection: "row",
    // paddingLeft: 15,
  },
  soundBtn: {
    width: 30,
    height: 30,
    // marginLeft: 250,
    position: "absolute",
    right: "15%",
    bottom: 0,
  },
  soundBtn2: {
    position: "absolute",
    top: 50,
    right: 8,
    zIndex: 50,
    // borderColor: "#FFF",
    // borderWidth: 1,
    // borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
  },

  "@media (max-width: 1300)": {
    textOnTopStyle: {
      fontSize: 18,
    },
    popUp: {
      width: 960,
      height: 540,
    },
    video: {
      width: 960,
      height: 540,
    },
    soundBtn: {
      width: 25,
      height: 25,
    },
  },
  "@media (max-width: 1000)": {
    textOnTopStyle: {
      fontSize: 14,
    },
    title: {
      fontSize: 22,
    },
    popUp: {
      width: 580,
      height: 326,
    },
    video: {
      width: 580,
      height: 326,
    },
    iconBorder: {
      width: 20,
      height: 20,
    },
    soundBtn: {
      width: 20,
      height: 20,
    },
    soundBtn2: {
      width: 22,
      height: 22,
      top: 40,
    },
    closeButton: {
      width: 15,
      height: 15,
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
  "@media (max-width: 720)": {
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
