import React from "react";
import { View, Button, Touchable, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const HelpPopUp = ({ setShowHelpPopUp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Button
          title="Button"
          onPress={() => {
            setShowHelpPopUp ? setShowHelpPopUp(false) : null;
          }}
        ></Button>
      </View>
    </View>
  );
};

export default HelpPopUp;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    zIndex: 10,
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  container2: {
    backgroundColor: "pink",
    alignSelf: "center",
    width: "80%",
    height: "80%",
    justifyContent: "center",
  },
});
