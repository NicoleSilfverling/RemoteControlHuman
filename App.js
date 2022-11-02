import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
  Text,
  TouchableHighlight,
} from "react-native";
import Actionbar from "./components/Actionbar";
import CTAButton from "./components/CTAButton";
import HiddenButton from "./components/HiddenButton";
import ShowImage from "./components/ShowImage";
import React, { useContext, useState } from "react";
import { Audio } from "expo-av";
import ContentSelector from "./components/ContentSelector";
import EStyleSheet from "react-native-extended-stylesheet";
import HelpPopUp from "./components/HelpPopUp";
import BlinkImage from "./components/BlinkImage";
import StartVideo from "./components/StartVideo";
import SoundVisual from "./components/SoundVisual";
import InfoCard from "./components/InfoCard";
import {
  SharedAudioPlayer,
  AudioPlayerContext,
  useAudioPlayerIsPlayingEffect,
  globalAudioPlayer,
} from "./SharedAudioPlayer";

export default function App() {
  EStyleSheet.build({
    $textColor: "#FFFFFF",
    $fontFamily: "Avenir-Heavy",
    $fontFamilyIOS: "Avenir-Heavy",
    $fontFamilyAndroid: "monospace",
    $fontWeight: "500",
    $white: "#FFFFFF",
    $yellow: "#ffd500",
    $orange: "orange",
    $green: "#00A300",
  });

  const [showImage, setShowImage] = useState(false);
  const [buttonId, setButtonId] = useState("");
  const [bodyHalfLeft, setBodyHalfLeft] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [showHelpPopUp, setShowHelpPopUp] = useState(false);
  const [showStartVideo, setShowStartVideo] = useState(true);
  const [soundIsPlaying, setSoundIsPlaying] = useState(false);
  const [isHand, setIsHand] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(false);

  const sharedAudioPlayer = useContext(AudioPlayerContext);

  let titlePressedbtn;
  if (
    ContentSelector(buttonId).title != "RESET" &&
    ContentSelector(buttonId).title != "STOP"
  ) {
    titlePressedbtn = ContentSelector(buttonId, true, isHand).title;
  }

  useAudioPlayerIsPlayingEffect((soundPlaying) => {
    console.log("in useAudioPlayerIsPlayingEffect callback", soundPlaying);
    setSoundIsPlaying(soundPlaying);
  });

  return (
    <AudioPlayerContext.Provider value={globalAudioPlayer}>
      <View style={styles.window}>
        <SafeAreaView style={styles.container}>
          {showStartVideo ? (
            <StartVideo
              setShowStartVideo={setShowStartVideo}
              setShowInfoCard={setShowInfoCard}
            />
          ) : null}
          {showHelpPopUp ? (
            <HelpPopUp setShowHelpPopUp={setShowHelpPopUp} />
          ) : null}
          {showInfoCard ? <InfoCard setShowInfoCard={setShowInfoCard} /> : null}

          <View style={styles.layout}>
            {/* leftside */}
            <View style={styles.leftside}>
              <View style={styles.colStyle}>
                <CTAButton
                  setBodyHalfLeft={setBodyHalfLeft}
                  bodyHalfLeft={bodyHalfLeft}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  setIsHand={setIsHand}
                  btnId="L1"
                  btnGroup="1"
                  btnTitle={ContentSelector("L1").title}
                />
                <CTAButton
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L2"
                  btnGroup="2"
                  btnTitle={ContentSelector("L2").title}
                />
                <CTAButton
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L3"
                  btnGroup="2"
                  btnTitle={ContentSelector("L3").title}
                />
                {/* <HiddenButton /> */}
                <View style={[styles.hiddenBtn, { alignItems: "flex-start" }]}>
                  <Actionbar groupId={groupId} />
                </View>
              </View>
              <View style={styles.colStyle}>
                <CTAButton
                  setShowImage={setShowImage}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  setIsHand={setIsHand}
                  btnId="L4"
                  btnGroup="2"
                  btnTitle={ContentSelector("L4").title}
                />
                <CTAButton
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L5"
                  btnGroup="2"
                  btnTitle={ContentSelector("L5").title}
                />
                <CTAButton
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L6"
                  btnGroup="2"
                  btnTitle={ContentSelector("L6").title}
                />
                {/* <HiddenButton /> */}

                <View style={styles.hiddenBtn}>
                  <Text style={styles.titlePressedbtn}>{titlePressedbtn}</Text>
                </View>
              </View>
              <View style={styles.colStyle}>
                <CTAButton
                  setBodyHalfLeft={setBodyHalfLeft}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  setIsHand={setIsHand}
                  btnId="L7"
                  btnGroup="1"
                  btnTitle={ContentSelector("L7").title}
                />
                <CTAButton
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L8"
                  btnGroup="2"
                  btnTitle={ContentSelector("L8").title}
                />
                <CTAButton
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L9"
                  btnGroup="2"
                  btnTitle={ContentSelector("L9").title}
                />
                {/* <HiddenButton /> */}
                <View style={[styles.hiddenBtn, { alignItems: "flex-end" }]}>
                  <TouchableHighlight
                    id="infobtn"
                    onPress={() => {
                      setShowHelpPopUp(true);
                      sharedAudioPlayer.stopBackgroundLoop();
                    }}
                    style={styles.infoButton}
                    // activeOpacity={0.1}
                    underlayColor={"#FFFFFF"}
                  >
                    <Image
                      style={styles.infoIcon}
                      source={require("./assets/icons/rightIcon.png")}
                    />
                  </TouchableHighlight>
                  <Text style={styles.iconText}>GUIDE</Text>
                </View>
              </View>
            </View>

            {/* center */}
            <View style={styles.center}>
              <Image
                style={styles.imageBody}
                source={require("./assets/images/humanbutt.png")}
              />
              <View style={{ display: "flex", flexDirection: "row" }}></View>
              {soundIsPlaying && <SoundVisual />}

              {showImage && (
                <BlinkImage
                  showImage={showImage}
                  setShowImage={setShowImage}
                  buttonId={buttonId}
                  bodyHalfLeft={bodyHalfLeft}
                />
              )}
            </View>

            {/* right side */}
            <View style={styles.rightside}>
              <View style={styles.colStyle}>
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R1"
                  btnGroup="3"
                  btnTitle={ContentSelector("R1").title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  isHand={isHand}
                  btnId="R2"
                  btnGroup="3"
                  btnTitle={ContentSelector("R2", true, isHand).title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  isHand={isHand}
                  btnId="R3"
                  btnGroup="3"
                  btnTitle={ContentSelector("R3", true, isHand).title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R4"
                  btnGroup="3"
                  btnTitle={ContentSelector("R4").title}
                />
              </View>
              <View style={styles.colStyle}>
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R5"
                  btnGroup="4"
                  btnTitle={ContentSelector("R5").title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R6"
                  btnGroup="4"
                  btnTitle={ContentSelector("R6").title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnGroup="4"
                  btnId="R7"
                  btnTitle={ContentSelector("R7").title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  setIsHand={setIsHand}
                  btnId="R8"
                  btnGroup="5"
                  btnTitle={ContentSelector("R8").title}
                />
              </View>
              <View style={styles.colStyle}>
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R9"
                  btnGroup="4"
                  btnTitle={ContentSelector("R9").title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R10"
                  btnGroup="4"
                  btnTitle={ContentSelector("R10").title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R11"
                  btnGroup="4"
                  btnTitle={ContentSelector("R11").title}
                />
                <CTAButton
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  setIsHand={setIsHand}
                  btnId="R12"
                  btnGroup="5"
                  btnTitle={ContentSelector("R12").title}
                />
              </View>
            </View>

            <StatusBar hidden />
          </View>
        </SafeAreaView>
      </View>
    </AudioPlayerContext.Provider>
  );
}

const styles = EStyleSheet.create({
  window: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  layout: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: "3%",
  },
  leftside: {
    // width: '40%',
    // height: '100%',
    flex: 2,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "7%",
    paddingBottom: "7%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },

  center: {
    flex: 1.5,
    // width: '25%',
    // height : '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  rightside: {
    flex: 2,
    // width: '40%',
    // height: '100%',
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "7%",
    paddingBottom: "7%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  textStyle: {
    color: "$textColor",
    fontSize: 30,
    fontFamily: "$fontFamily",
    fontWeight: "$fontWeight",
  },
  colStyle: {
    justifyContent: "space-between",
    height: "100%",
    // backgroundColor: "green",
  },
  imageBody: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  titlePressedbtn: {
    // fontFamily: "$fontFamily",
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    color: "$textColor",
    fontSize: 20,
    // fontWeight: "bold",
    textAlign: "center",
    padding: 0,
    margin: 0,
    // lineHeight: 16 * 1.4,
    height: 16,
    lineHeight: Platform.OS === "ios" ? 16 * 1.4 : 16 * 1.2,
    // height: Platform.OS === "ios" ? 16 : 16,
    width: "170%",
    // backgroundColor: "blue",
  },
  infoButton: {
    position: "relative",
    borderColor: "#FFF",
    borderWidth: 2,
    borderRadius: 50,
    width: "60%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 15,
    // paddingLeft: "25%",

    // marginTop: "5%",
    // backgroundColor: "green",
  },
  iconText: {
    textAlign: "center",
    // fontWeight: "bold",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "$fontWeight",
    height: 16,
    lineHeight: Platform.OS === "ios" ? 16 * 1.2 : 16 * 1.2,
    position: "absolute",
    bottom: 0,
    right: 0,
    // backgroundColor: "green",
  },

  infoIcon: {
    tintColor: "#FFF",
    width: "100%",
    height: "100%",
  },
  hiddenBtn: {
    height: "15%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-end",
    // borderColor: "red",
  },

  "@media (max-width: 1300)": {
    center: {
      flex: 1.2,
    },
    hiddenBtn: {
      height: "14%",
      borderRadius: 10,
      borderWidth: 1,
    },
    infoButton: {
      height: 50,
      width: 50,
      marginTop: "5%",
    },
    iconText: {
      fontSize: 16,
    },
  },

  "@media (max-width: 1000)": {
    leftside: {
      paddingTop: "3%",
      paddingBottom: "3%",
    },
    rightside: {
      paddingTop: "3%",
      paddingBottom: "3%",
    },
    infoButton: {
      height: 25,
      width: 25,
      marginTop: "5%",
    },
    hiddenBtn: {
      height: "17%",
      borderRadius: 10,
      borderWidth: 1,
    },
    titlePressedbtn: {
      fontSize: 12,
    },
  },
  "@media (max-width: 900)": {
    hiddenBtn: {
      height: "17%",
      borderRadius: 8,
      borderWidth: 1,
    },
  },
});
