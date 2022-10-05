import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
  Text,
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

export default function App() {
  EStyleSheet.build({
    $textColor: "#FFF",
  });

  const [showImage, setShowImage] = useState(false);
  const [buttonId, setButtonId] = useState("");
  const [bodyHalfLeft, setBodyHalfLeft] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [showHelpPopUp, setShowHelpPopUp] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {showHelpPopUp ? <HelpPopUp setShowHelpPopUp={setShowHelpPopUp} /> : null}
      <View style={styles.layout}>
        {/* leftside */}
        <View style={styles.leftside}>
          <View style={styles.colStyle}>
            <CTAButton
              setBodyHalfLeft={setBodyHalfLeft}
              bodyHalfLeft={bodyHalfLeft}
              setGroupId={setGroupId}
              setButtonId={setButtonId}
              btnId="L1"
              btnGroup="1"
              btnTitle={ContentSelector("L1").title}
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L2"
              btnGroup="2"
              btnTitle={ContentSelector("L2").title}
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
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
              btnId="L4"
              btnGroup="2"
              btnTitle={ContentSelector("L4").title}
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L5"
              btnGroup="2"
              btnTitle={ContentSelector("L5").title}
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
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
              btnId="L7"
              btnGroup="1"
              btnTitle={ContentSelector("L7").title}
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L8"
              btnGroup="2"
              btnTitle={ContentSelector("L8").title}
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L9"
              btnGroup="2"
              btnTitle={ContentSelector("L9").title}
            />
            <HiddenButton />
          </View>
          <View style={styles.actionbar}>
            <Actionbar groupId={groupId} buttonId={buttonId} />
            <Button
              title="Info"
              onPress={() => {
                setShowHelpPopUp(true);
              }}
            ></Button>
            {/* <View style={styles.iconCon}>
              <View style={styles.iconball}>
                <Text style={styles.iconText}>i</Text>
              </View>
              <View style={styles.iconball}>
                <Text style={styles.iconText}>i</Text>
              </View> 
            </View>*/}
          </View>
        </View>

        {/* center */}
        <View style={styles.center}>
          <Image
            style={styles.imageBody}
            source={require("./assets/images/humanbutt.png")}
          />
          {/* <ShowImage /> */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            {/* <Counter count={showImage} setCount={setShowImage} /> */}
          </View>
          {showImage && (
            <ShowImage
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
              btnId="R2"
              btnGroup="3"
              btnTitle={ContentSelector("R2").title}
            />
            <CTAButton
              setGroupId={setGroupId}
              setButtonId={setButtonId}
              btnId="R3"
              btnGroup="3"
              btnTitle={ContentSelector("R3").title}
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
              btnId="R12"
              btnGroup="5"
              btnTitle={ContentSelector("R12").title}
            />
          </View>
        </View>

        <StatusBar hidden />
      </View>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
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
    bottom: 0,
    paddingBottom: "18%",
    marginLeft: "10%",
    width: "100%",
    // backgroundColor: "blue",
  },
  iconball: {
    // backgroundColor: "green",
    borderWidth: 3,
    borderColor: "#FFF",
    borderRadius: 50,
    width: 50,
    height: 50,
    zIndex: 2,
  },
  iconText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
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
});
