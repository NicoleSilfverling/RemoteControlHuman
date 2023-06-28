import React from "react";
import { View, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const StartVideo = ({ setShowStartVideo, setShowInfoCard }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  _onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish === true) {
      setShowStartVideo(false);
      setShowInfoCard(true);
      console.log(playbackStatus.didJustFinish);
    }
  };

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/rumtiden.mov")}
        useNativeControls= {false}
        resizeMode="contain"
        shouldPlay
        isLooping={false}
        didJustFinish
        onPlaybackStatusUpdate={(playbackStatus) =>
          this._onPlaybackStatusUpdate(playbackStatus)
        }
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
