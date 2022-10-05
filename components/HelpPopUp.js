import React from "react";
import {
  View,
  ScrollView,
  Button,
  TouchableHighlight,
  Text,
} from "react-native";
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

        <ScrollView style={styles.textOnTopContainer}>
          <Text style={styles.textOnTopStyle}>
            Blind Bot is a tool to remote control a human. {"\n"}
            One person is the operates the controller, the other one the robot
            and is blindfolded. {"\n"}
            Send voice commandos with the controller buttons that your robot
            must follow. {"\n"}
            Create challenges to perform a simple task.{"\n"}
            Play against other controller+robot teams.{"\n"}
            Create an abstract ballet, filmed with time lapse.{"\n"}
            For tips and inspiration, watch this video.{"\n"}
            {"\n"}
            The Controller is divided into 4 sections. The best way to create a
            commando for your robot is in this order.{"\n"}
            1. Body half - left, right{"\n"}
            2. Body part - torso, arm, hand, thumb, index finger, leg, foot
            {"\n"}
            3. Action - move, bend, stretch, twist{"\n"}
            4. Direction - up, down, forward, backward, left, right{"\n"}
            There are 2 additional buttons that are useful - stop, reset body
            position.{"\n"}
            To play Blind Bot the robot must trust the operator. Play on a flat
            surface without obstacles. Never play close to bumps, holes ot
            staircases.{"\n"}
            Feel free to film and share your Blind Bot games. Please use
            #blindbot{"\n"}
            {"\n"}
            {"\n"}Blind Bot was created by Rumtiden Idea Lab. programmed by
            Nicole Silfverling and Nasir Tedros, concept by Hakan Lidbo.
          </Text>
        </ScrollView>

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
    backgroundColor: "rgba(0, 0, 0,0.9 )",
    flex: 1,
    zIndex: 5,
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
    width: "100%",
    height: "100%",
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
    zIndex: 50,
  },
  closeText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  textOnTopContainer: {
    flex: 1,
    zIndex: 5,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
    padding: "5%",
  },
  textOnTopStyle: {
    color: "#FFF",
    fontSize: 40,
  },
});
