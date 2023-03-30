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
import InfoCardV2 from "./components/InfoCardV2";

export default function App() {
  EStyleSheet.build({
    $textColor: "#FFFFFF",
    $fontFamily: "Avenir-Heavy",
    $fontFamilyIOS: "Avenir-Heavy",
    $fontFamilyAndroid: "sans-serif",
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
  const [muted, setMuted] = useState(false);

  // const [sharedAudioPlayer, setSharedAudioPlayer] = useContext(AudioPlayerContext);
  // const sharedAudioPlayer = useContext(AudioPlayerContext);

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
            <HelpPopUp
              setShowHelpPopUp={setShowHelpPopUp}
              muted={muted}
              setMuted={setMuted}
            />
          ) : null}
          {showInfoCard ? (
            // <InfoCard
            //   setShowInfoCard={setShowInfoCard}
            //   setShowHelpPopUp={setShowHelpPopUp}
            // />
            <InfoCardV2
              setShowInfoCard={setShowInfoCard}
              setShowHelpPopUp={setShowHelpPopUp}
            />
          ) : null}

          {soundIsPlaying ? <View style={styles.overlayButtons}></View> : null}

          <View style={styles.layout}>
            {/* leftside */}
            <View style={styles.leftside}>
              <View style={styles.colStyle}>
                <CTAButton
                  isActive={buttonId === "L1" && soundIsPlaying}
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
                  isActive={buttonId === "L2" && soundIsPlaying}
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L2"
                  btnGroup="2"
                  btnTitle={ContentSelector("L2").title}
                />
                <CTAButton
                  isActive={buttonId === "L3" && soundIsPlaying}
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L3"
                  btnGroup="2"
                  btnTitle={ContentSelector("L3").title}
                />
                <View style={styles.hiddenBtn}>
                  <Actionbar groupId={groupId} />
                </View>
              </View>
              <View style={styles.colStyle}>
                <CTAButton
                  isActive={buttonId === "L4" && soundIsPlaying}
                  setShowImage={setShowImage}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  setIsHand={setIsHand}
                  btnId="L4"
                  btnGroup="2"
                  btnTitle={ContentSelector("L4").title}
                />
                <CTAButton
                  isActive={buttonId === "L5" && soundIsPlaying}
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L5"
                  btnGroup="2"
                  btnTitle={ContentSelector("L5").title}
                />
                <CTAButton
                  isActive={buttonId === "L6" && soundIsPlaying}
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L6"
                  btnGroup="2"
                  btnTitle={ContentSelector("L6").title}
                />

                <View
                  style={[styles.hiddenBtn, { borderColor: "transparent" }]}
                >
                  {soundIsPlaying && (
                    <View style={styles.earIcon}>
                      <SoundVisual
                        imagePath={require("./assets/icons/earIcon.png")}
                      />
                    </View>
                  )}
                  <View style={styles.midBtn}>
                    {soundIsPlaying && (
                      <Text style={styles.titlePressedbtn}>
                        {titlePressedbtn}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.colStyle}>
                <CTAButton
                  isActive={buttonId === "L7" && soundIsPlaying}
                  setBodyHalfLeft={setBodyHalfLeft}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  setIsHand={setIsHand}
                  btnId="L7"
                  btnGroup="1"
                  btnTitle={ContentSelector("L7").title}
                />
                <CTAButton
                  isActive={buttonId === "L8" && soundIsPlaying}
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L8"
                  btnGroup="2"
                  btnTitle={ContentSelector("L8").title}
                />
                <CTAButton
                  isActive={buttonId === "L9" && soundIsPlaying}
                  setShowImage={setShowImage}
                  setButtonId={setButtonId}
                  setGroupId={setGroupId}
                  setIsHand={setIsHand}
                  btnId="L9"
                  btnGroup="2"
                  btnTitle={ContentSelector("L9").title}
                />
                <View style={[styles.hiddenBtn, { alignItems: "flex-end" }]}>
                  <TouchableHighlight
                    id="infobtn"
                    onPress={() => {
                      setShowHelpPopUp(true);
                    }}
                    style={styles.infoButton}
                    // activeOpacity={0.1}
                    underlayColor={"#FFFFFF"}
                  >
                    <View style={styles.infoItemsBox}>
                      <Text style={styles.iconText}>i</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>

            {/* center */}
            <View style={styles.center}>
              <Image
                style={styles.imageBody}
                source={require("./assets/images/gubbe_thin.png")}
              />
              <View style={{ display: "flex", flexDirection: "row" }}></View>
              {soundIsPlaying && (
                <SoundVisual
                  imagePath={require("./assets/images/soundplaying.png")}
                />
              )}

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
                  isActive={buttonId === "R1" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R1"
                  btnGroup="3"
                  btnTitle={ContentSelector("R1").title}
                />
                <CTAButton
                  isActive={buttonId === "R2" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  isHand={isHand}
                  btnId="R2"
                  btnGroup="3"
                  btnTitle={ContentSelector("R2", true, isHand).title}
                />
                <CTAButton
                  isActive={buttonId === "R3" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  isHand={isHand}
                  btnId="R3"
                  btnGroup="3"
                  btnTitle={ContentSelector("R3", true, isHand).title}
                />
                <CTAButton
                  isActive={buttonId === "R4" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R4"
                  btnGroup="3"
                  btnTitle={ContentSelector("R4").title}
                />
              </View>
              <View style={styles.colStyle}>
                <CTAButton
                  isActive={buttonId === "R5" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R5"
                  btnGroup="4"
                  btnTitle={ContentSelector("R5").title}
                />
                <CTAButton
                  isActive={buttonId === "R6" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R6"
                  btnGroup="4"
                  btnTitle={ContentSelector("R6").title}
                />
                <CTAButton
                  isActive={buttonId === "R7" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnGroup="4"
                  btnId="R7"
                  btnTitle={ContentSelector("R7").title}
                />
                <CTAButton
                  isActive={buttonId === "R8" && soundIsPlaying}
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
                  isActive={buttonId === "R9" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R9"
                  btnGroup="4"
                  btnTitle={ContentSelector("R9").title}
                />
                <CTAButton
                  isActive={buttonId === "R10" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R10"
                  btnGroup="4"
                  btnTitle={ContentSelector("R10").title}
                />
                <CTAButton
                  isActive={buttonId === "R11" && soundIsPlaying}
                  setGroupId={setGroupId}
                  setButtonId={setButtonId}
                  btnId="R11"
                  btnGroup="4"
                  btnTitle={ContentSelector("R11").title}
                />
                <CTAButton
                  isActive={buttonId === "R12" && soundIsPlaying}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  rightside: {
    flex: 2,
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
  },
  imageBody: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  titlePressedbtn: {
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    color: "$textColor",
    fontSize: 25,
    textAlign: "center",
    /* height: 22,
    lineHeight: Platform.OS === "ios" ? 22 * 1.35 : 22 * 1.2, */
    width: "190%",
    position: "absolute",
    bottom: 5,
  },
  infoButton: {
    position: "relative",
    borderColor: "transparent",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 75,
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "100",
    // lineHeight: Platform.OS === "ios" ? 16 * 1.2 : 16 * 1.2,
  },

  earIcon: {
    tintColor: "#FFF",
    width: "70%",
    height: "70%",
  },
  overlayButtons: {
    position: "absolute",
    // flex: 1,
    width: "120%",
    height: "100%",
    // backgroundColor: "red",
    zIndex: 50,
  },
  infoItemsBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  hiddenBtn: {
    height: "14%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF",
  },
  midBtn: {
    width: "100%",
    height: "150%",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },

  "@media (max-width: 1300)": {
    center: {
      flex: 1.2,
    },
    hiddenBtn: {
      height: "13.5%",
      borderRadius: 10,
      borderWidth: 1,
    },
    iconText: {
      fontSize: 60,
    },
    infoButton: {
      borderRadius: 6,
    },
    titlePressedbtn: {
      fontSize: 22,
      height: 22,
      lineHeight: Platform.OS === "ios" ? 22 * 1.3 : 22 * 1.2,
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
    hiddenBtn: {
      height: "17%",
      borderRadius: 10,
      borderWidth: 1,
    },
    titlePressedbtn: {
      fontSize: 14,
    },
    iconText: {
      fontSize: 35,
    },
  },
  "@media (max-width: 900)": {
    hiddenBtn: {
      height: "17%",
      borderRadius: 8,
      borderWidth: 1,
    },
    titlePressedbtn: {
      bottom: 3,
    },
  },
});
