import React, { useState, useRef, useEffect, useContext } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  View,
  ScrollView,
  TouchableHighlight,
  Text,
  Image,
} from "react-native";
import { Video } from "expo-av";
import { Audio } from "expo-av";
import { AudioPlayerContext } from "../SharedAudioPlayer";

export default function HelpPopUp({
  setShowHelpPopUp,
  soundIsPlaying,
  muted,
  setMuted,
}) {
  const [sound, setSound] = useState();
  const [videoShouldPlay, setVideoShouldPlay] = useState(false);
  const videoRef = useRef(null);

  const [status, setStatus] = React.useState({});
  const [showText, setShowText] = React.useState(false);
  const sharedAudioPlayer = useContext(AudioPlayerContext);

  const handlePlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      setVideoShouldPlay(true);
      videoRef.current.playAsync();
    }
  };

  const playSoundAndPauseVideo = async () => {
    if (videoRef.current != null) {
      await videoRef.current.pauseAsync();
    }

    sharedAudioPlayer.stopBackgroundLoop();

    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/music/information.wav")
    );

    setSound(sound);

    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate(handlePlaybackStatusUpdate);
  };

  useEffect(() => {
    playSoundAndPauseVideo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.popUp}>
        {!showText ? (
          <TouchableHighlight
            style={styles.clickableBG}
            onPress={() => {
              setShowText(true);
            }}
          >
            <View />
          </TouchableHighlight>
        ) : null}
        {showText ? (
          <View style={styles.btnContainer}>
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

            <TouchableHighlight
              style={styles.soundBtn2}
              underlayColor="transparent"
              onPress={() => {
                if (!muted) {
                  setMuted(true);
                } else {
                  setMuted(false);
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
          </View>
        ) : null}

        <Video
          ref={videoRef}
          source={require("../assets/videos/robothumaninfo.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={muted}
          useNativeControls="false"
          resizeMode="contain"
          shouldPlay={videoShouldPlay}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          style={styles.video}
        />

        {showText ? (
          <View style={styles.textBox}>
            <ScrollView
              showsVerticalScrollIndicator={true}
              persistentScrollbar={true}
              indicatorStyle={styles.scrollbarStyle}
              style={styles.textOnTopContainer}
            >
              <Text style={styles.title}>BlindBot </Text>
              <Text style={styles.textOnTopStyle}>
                To play Blind Bot the robot must trust the operator.
                {"\n"}
                {"\n"}
                Play on a flat surface without obstacles. Never play close to
                bumps, holes or staircases.
                {"\n"}
                {"\n"}
                CONTROL THE BLIND ROBOT WITH THESE BUTTONS, ONE AT THE TIME
                {"\n"}
                {"\n"}
              </Text>
              <Image
                source={require("../assets/images/intro3.png")}
                style={styles.buttonMap}
                resizeMode="contain"
              />

              <Text style={styles.textOnTopStyle}>
                {"\n"}
                {"\n"}
                Feel free to film and share your Blind Bot games. Please use
                #blindbot
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
        ) : null}
      </View>
    </View>
  );
}

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
    //backgroundColor: "rgba(0, 0, 0,0.4 )",
    backgroundColor: "transparent",
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  popUp: {
    backgroundColor: "black",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // width: 1150,
    // height: 647,
    borderRadius: 10,
    // borderColor: "#FFF",
    // borderWidth: 2,
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
    // width: 1150,
    // height: 647,
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
  btnContainer: {
    zIndex: 3,
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
    zIndex: 2,
    position: "absolute",
    right: 0,
    top: "0%",
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    height: "100%",
    // paddingTop: "5%",
    // paddingBottom: "5%",
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
  scrollbarStyle: {
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
    alignSelf: "center",
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
  buttonMap: {
    // width: 700,
    width: 700,
    height: 500,
    // backgroundColor: "red",
    padding: 20,
    alignSelf: "center",
  },

  "@media (max-width: 1300)": {
    textOnTopStyle: {
      fontSize: 18,
    },

    // popUp: {
    //   width: 960,
    //   height: 540,
    // },
    // video: {
    //   width: 960,
    //   height: 540,
    // },
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
    buttonMap: {
      // width: 700,
      width: 400,
      height: 300,
      // backgroundColor: "red",
    },
    // popUp: {
    //   width: 580,
    //   height: 326,
    // },
    // video: {
    //   width: 580,
    //   height: 326,
    // },
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
    // popUp: {
    //   width: 500,
    //   height: 281,
    // },
    // video: {
    //   width: 500,
    //   height: 281,
    // },
  },
  "@media (max-width: 720)": {
    textOnTopStyle: {
      fontSize: 14,
    },
    // popUp: {
    //   width: "75%",
    //   height: "75%",
    // },
    // video: {
    //   width: "100%",
    //   height: "100%",
    // },
  },
});
