import React from "react";
import { View, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const StartVideo = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/rumtiden.mov")}
        useNativeControls="false"
        resizeMode="contain"
        shouldPlay
        isLooping="false"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
export default StartVideo;
