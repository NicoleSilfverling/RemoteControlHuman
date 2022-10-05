import React from "react";
import { View, Button, TouchableHighlight, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Video, AVPlaybackStatus } from "expo-av";

const HelpPopUp = ({ setShowHelpPopUp }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableHighlight
          style={styles.closeButton}
          title="Close"
          onPress={() => {
            setShowHelpPopUp ? setShowHelpPopUp(false) : null;
          }}
        >
          <Text style={styles.closeText}>X</Text>
        </TouchableHighlight>

        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/videos/testinfovid.mov")}
          useNativeControls
          resizeMode="contain"
          shouldPlay
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          {/* <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          /> */}
        </View>
      </View>
    </View>
  );
};

export default HelpPopUp;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0,0.6 )",
    flex: 1,
    zIndex: 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container2: {
    backgroundColor: "#333",
    alignSelf: "center",
    justifyContent: "center",
    width: "80%",
    height: "80%",
    borderRadius: 10,
  },
  video: {
    alignSelf: "center",
    width: "90%",
    height: "90%",
    // width: 320,
    // height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    width: 30,
    position: "absolute",
    top: 0,
    right: 0,
    // backgroundColor: "red",
  },
  closeText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});
