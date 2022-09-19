import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import Actionbar from "./components/Actionbar";
import CTAButton from "./components/CTAButton";
import HiddenButton from "./components/HiddenButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        {/* leftside */}
        <View style={styles.leftside}>
          <View style={styles.colStyle}>
            <CTAButton btnGroup="1" btnTitle="LEFT" />
            <CTAButton btnGroup="2" btnTitle="HAND" />
            <CTAButton btnGroup="2" btnTitle="ARM" />
            <HiddenButton />
          </View>
          <View style={styles.colStyle}>
            <CTAButton btnGroup="2" btnTitle="TORSO" />
            <CTAButton btnGroup="2" btnTitle="THUMB" />
            <CTAButton btnGroup="2" btnTitle="LEG" />
            <HiddenButton />
          </View>
          <View style={styles.colStyle}>
            <CTAButton btnGroup="1" btnTitle="RIGHT" />
            <CTAButton btnGroup="2" btnTitle="INDEX" />
            <CTAButton btnGroup="2" btnTitle="FOOT" />
            <HiddenButton />
          </View>
        </View>

        {/* center */}
        <View style={styles.center}>
          <Image
            style={styles.imageBody}
            source={require("./assets/images/human.jpg")}
          />
          <Image
            style={styles.imageBodyparts}
            source={require("./assets/images/head.png")}
          />
        </View>

        {/* right side */}
        <View style={styles.rightside}>
          <View style={styles.colStyle}>
            <CTAButton btnGroup="3" btnTitle="BEND" />
            <CTAButton btnGroup="3" btnTitle="MOVE" />
            <CTAButton btnTitle="RESET" />
            <CTAButton btnGroup="4" btnTitle="LEFT" />
          </View>
          <View style={styles.colStyle}>
            <CTAButton btnGroup="3" btnTitle="STRETCH" />
            <CTAButton btnGroup="3" btnTitle="WALK" />
            <CTAButton btnGroup="STOP" btnTitle="STOP" />
            <CTAButton btnGroup="4" btnTitle="RIGHT" />
          </View>
          <View style={styles.colStyle}>
            <CTAButton btnGroup="4" btnTitle="FORWARD" />
            <CTAButton btnGroup="4" btnTitle="BACKWARD" />
            <CTAButton btnGroup="4" btnTitle="UP" />
            <CTAButton btnGroup="4" btnTitle="DOWN" />
          </View>
        </View>

        <StatusBar hidden />
      </View>
      <View style={styles.actionbar}>
        <Actionbar />
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
    padding: 30,
  },
  leftside: {
    // width: '40%',
    // height: '100%',
    flex: 2,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  center: {
    flex: 1.1,
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
    justifyContent: "space-around",
  },
  textStyle: {
    color: "#FFF",
    fontSize: 30,
  },
  colStyle: {
    justifyContent: "space-evenly",
    height: "100%",
  },
  imageBody: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  imageBodyparts: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  actionbar: {
    position: "absolute",
    left: "5%",
    bottom: "18%",
  },
});
