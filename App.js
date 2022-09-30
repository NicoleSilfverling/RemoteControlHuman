import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import Actionbar from "./components/Actionbar";
import CTAButton from "./components/CTAButton";
import HiddenButton from "./components/HiddenButton";
import ShowImage from "./components/ShowImage";
import React, { useState } from "react";
import { Audio } from "expo-av";

export default function App() {
  const [showImage, setShowImage] = useState(false);
  const [buttonId, setButtonId] = useState("");
  const [bodyHalfLeft, setBodyHalfLeft] = useState(false);
  const [groupId, setGroupId] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        {/* leftside */}
        <View style={styles.leftside}>
          <View style={styles.colStyle}>
            <CTAButton
              setBodyHalfLeft={setBodyHalfLeft}
              bodyHalfLeft={bodyHalfLeft}
              setGroupId={setGroupId}
              btnId="L1"
              btnGroup="1"
              btnTitle="LEFT"
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L2"
              btnGroup="2"
              btnTitle="HAND"
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L3"
              btnGroup="2"
              btnTitle="ARM"
            />
            <HiddenButton />
          </View>
          <View style={styles.colStyle}>
            <CTAButton
              setShowImage={setShowImage}
              setGroupId={setGroupId}
              btnId="L4"
              btnGroup="2"
              btnTitle="TORSO"
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L5"
              btnGroup="2"
              btnTitle="THUMB"
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L6"
              btnGroup="2"
              btnTitle="LEG"
            />
            <HiddenButton />
          </View>
          <View style={styles.colStyle}>
            <CTAButton
              setBodyHalfLeft={setBodyHalfLeft}
              setGroupId={setGroupId}
              btnId="L7"
              btnGroup="1"
              btnTitle="RIGHT"
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L8"
              btnGroup="2"
              btnTitle="INDEX"
            />
            <CTAButton
              setShowImage={setShowImage}
              setButtonId={setButtonId}
              setGroupId={setGroupId}
              btnId="L9"
              btnGroup="2"
              btnTitle="FOOT"
            />
            <HiddenButton />
          </View>
          <View style={styles.actionbar}>
            <Actionbar groupId={groupId} />
          </View>
        </View>

        {/* center */}
        <View style={styles.center}>
          <Image
            style={styles.imageBody}
            source={require("./assets/images/human.jpg")}
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
              btnId="R1"
              btnGroup="3"
              btnTitle="BEND"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R2"
              btnGroup="3"
              btnTitle="MOVE"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R3"
              btnGroup="5"
              btnTitle="RESET"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R4"
              btnGroup="4"
              btnTitle="LEFT"
            />
          </View>
          <View style={styles.colStyle}>
            <CTAButton
              setGroupId={setGroupId}
              btnId="R5"
              btnGroup="3"
              btnTitle="STRETCH"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R6"
              btnGroup="3"
              btnTitle="TWIST"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnGroup="5"
              btnId="R7"
              btnTitle="STOP"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R8"
              btnGroup="4"
              btnTitle="RIGHT"
            />
          </View>
          <View style={styles.colStyle}>
            <CTAButton
              setGroupId={setGroupId}
              btnId="R9"
              btnGroup="4"
              btnTitle="FORWARD"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R10"
              btnGroup="4"
              btnTitle="BACKWARD"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R11"
              btnGroup="4"
              btnTitle="UP"
            />
            <CTAButton
              setGroupId={setGroupId}
              btnId="R12"
              btnGroup="4"
              btnTitle="DOWN"
            />
          </View>
        </View>

        <StatusBar hidden />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    flex: 1.2,
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
});
