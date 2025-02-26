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
          useNativeControls={false}
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
                bumps,{"\n"}holes or staircases.
                {"\n"}
                {"\n"}
                CONTROL YOUR ROBOT WITH THESE BUTTONS, ONE AT THE TIME
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
    borderRadius: 10,
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
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
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    tintColor: "#FFF",
    width: "50%",
    height: "50%",
  },
  soundBtn2: {
    position: "absolute",
    top: 60,
    right: 10,
    zIndex: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "75%",
    height: "75%",
    tintColor: "#FFFFFF",
  },
  btnContainer: {
    zIndex: 3,
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
    padding: "5%",
  },
  textOnTopContainer: {
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
  },

  iconContainer: {
    flexDirection: "row",
  },
  soundBtn: {
    width: 30,
    height: 30,
    position: "absolute",
    right: "15%",
    bottom: 0,
  },

  buttonMap: {
    width: 700,
    height: 500,
    padding: 20,
    alignSelf: "center",
  },

  "@media (max-width: 1300)": {
    textOnTopStyle: {
      fontSize: 18,
    },

    soundBtn: {
      width: 25,
      height: 25,
    },
  },
  "@media (max-width: 1000)": {
    textOnTopStyle: {
      fontSize: 14,
      left: 50
    },
    title: {
      fontSize: 22,
    },
    buttonMap: {
      width: 400,
      height: 300,
    },
    closeButton: {
      width: 40,
      height: 40,
    },

    soundBtn2: {
      width: 40,
      height: 40,
      top: 50,
    },
    icon: {
      height: "60%",
      width: "60%",
    },
    closeIcon: {
      tintColor: "#FFF",
      width: "40%",
      height: "40%",
    },
    soundBtn: {
      width: 20,
      height: 20,
    },
  },
  "@media (max-width: 900)": {
    textOnTopStyle: {
      fontSize: 14,
    },
  },
  "@media (max-width: 720)": {
    textOnTopStyle: {
      fontSize: 14,
    },
  },
});
