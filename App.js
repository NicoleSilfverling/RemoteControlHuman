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
import React, { useState } from "react";
import { Audio } from "expo-av";
import ContentSelector from "./components/ContentSelector";
import EStyleSheet from "react-native-extended-stylesheet";
import HelpPopUp from "./components/HelpPopUp";
import BlinkImage from "./components/BlinkImage";
import StartVideo from "./components/StartVideo";
import SoundVisual from "./components/SoundVisual";

export default function App() {
  EStyleSheet.build({
    $textColor: "#FFF",
  });

  const [showImage, setShowImage] = useState(false);
  const [buttonId, setButtonId] = useState("");
  const [bodyHalfLeft, setBodyHalfLeft] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [showHelpPopUp, setShowHelpPopUp] = useState(false);
  const [showStartVideo, setShowStartVideo] = useState(true);
  const [soundIsPlaying, setSoundIsPlaying] = useState(false);

  return (
    <View style={styles.window}>
      <SafeAreaView style={styles.container}>
        {showStartVideo ? (
          <StartVideo setShowStartVideo={setShowStartVideo} />
        ) : null}
        {showHelpPopUp ? (
          <HelpPopUp setShowHelpPopUp={setShowHelpPopUp} />
        ) : null}
        <View style={styles.layout}>
          {/* leftside */}
          <View style={styles.leftside}>
            <View style={styles.colStyle}>
              <CTAButton
                setBodyHalfLeft={setBodyHalfLeft}
                bodyHalfLeft={bodyHalfLeft}
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L1"
                btnGroup="1"
                btnTitle={ContentSelector("L1").title}
              />
              <CTAButton
                setShowImage={setShowImage}
                setButtonId={setButtonId}
                setGroupId={setGroupId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L2"
                btnGroup="2"
                btnTitle={ContentSelector("L2").title}
              />
              <CTAButton
                setShowImage={setShowImage}
                setButtonId={setButtonId}
                setGroupId={setGroupId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L3"
                btnGroup="2"
                btnTitle={ContentSelector("L3").title}
              />
              <HiddenButton />
            </View>
            <View style={styles.colStyle}>
              <CTAButton
                setShowImage={setShowImage}
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L4"
                btnGroup="2"
                btnTitle={ContentSelector("L4").title}
              />
              <CTAButton
                setShowImage={setShowImage}
                setButtonId={setButtonId}
                setGroupId={setGroupId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L5"
                btnGroup="2"
                btnTitle={ContentSelector("L5").title}
              />
              <CTAButton
                setShowImage={setShowImage}
                setButtonId={setButtonId}
                setGroupId={setGroupId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L6"
                btnGroup="2"
                btnTitle={ContentSelector("L6").title}
              />
              <HiddenButton />
            </View>
            <View style={styles.colStyle}>
              <CTAButton
                setBodyHalfLeft={setBodyHalfLeft}
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L7"
                btnGroup="1"
                btnTitle={ContentSelector("L7").title}
              />
              <CTAButton
                setShowImage={setShowImage}
                setButtonId={setButtonId}
                setGroupId={setGroupId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L8"
                btnGroup="2"
                btnTitle={ContentSelector("L8").title}
              />
              <CTAButton
                setShowImage={setShowImage}
                setButtonId={setButtonId}
                setGroupId={setGroupId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="L9"
                btnGroup="2"
                btnTitle={ContentSelector("L9").title}
              />
              <HiddenButton />
            </View>
            <View style={styles.actionbar}>
              <Actionbar groupId={groupId} buttonId={buttonId} />
              <TouchableHighlight
                id="infobtn"
                onPress={() => {
                  setShowHelpPopUp(true);
                }}
                style={styles.infoButton}
              >
                <Text style={styles.iconText}>i</Text>
              </TouchableHighlight>
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
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R1"
                btnGroup="3"
                btnTitle={ContentSelector("R1").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R2"
                btnGroup="3"
                btnTitle={ContentSelector("R2").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R3"
                btnGroup="3"
                btnTitle={ContentSelector("R3").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R4"
                btnGroup="3"
                btnTitle={ContentSelector("R4").title}
              />
            </View>
            <View style={styles.colStyle}>
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R5"
                btnGroup="4"
                btnTitle={ContentSelector("R5").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R6"
                btnGroup="4"
                btnTitle={ContentSelector("R6").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnGroup="4"
                btnId="R7"
                btnTitle={ContentSelector("R7").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R8"
                btnGroup="5"
                btnTitle={ContentSelector("R8").title}
              />
            </View>
            <View style={styles.colStyle}>
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R9"
                btnGroup="4"
                btnTitle={ContentSelector("R9").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R10"
                btnGroup="4"
                btnTitle={ContentSelector("R10").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
                btnId="R11"
                btnGroup="4"
                btnTitle={ContentSelector("R11").title}
              />
              <CTAButton
                setGroupId={setGroupId}
                setButtonId={setButtonId}
                setSoundIsPlaying={setSoundIsPlaying}
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
    color: "#FFF",
    fontSize: 30,
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
  actionbar: {
    position: "absolute",
    zIndex: 2,
    bottom: 18,
    marginTop: "5%",
    marginBottom: "8%",
    marginLeft: "10%",
    width: "100%",
    paddingLeft: "3%",
    paddingRight: "3%",
    backgroundColor: "transparent",

    // backgroundColor: "blue",
  },
  infoButton: {
    borderColor: "#FFF",
    borderWidth: 2,
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: "flex-end",
    marginTop: "5%",
  },
  iconball: {
    // backgroundColor: "green",
    borderWidth: 3,
    borderColor: "#FFF",
    borderRadius: 50,
    width: 40,
    height: 40,
    zIndex: 2,
  },
  iconText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 24,
  },
  iconCon: {
    flexDirection: "row",
    // justifyContent: "space-around",
  },

  "@media (max-width: 1300)": {
    center: {
      flex: 1.2,
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
    actionbar: {
      flexDirection: "row",
      marginBottom: "0%",
      justifyContent: "space-between",
      /* backgroundColor: "blue" */
    },
    infoButton: {
      height: 25,
      width: 25,
      marginTop: "5%",
    },
  },
});
