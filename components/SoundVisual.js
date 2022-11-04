import React, { Component } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";

class Blink extends Component {
  constructor(props) {
    super(props);
    this.fadeAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.fadeAnimation, {
          toValue: 1,
          duration: this.props.duration,
          useNativeDriver: true,
        }),
        Animated.timing(this.fadeAnimation, {
          toValue: 0,
          duration: this.props.duration,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: this.props.repeat_count,
      }
    ).start();
  }
  render() {
    return (
      <View style={{ ...this.props.style }}>
        <Animated.View style={{ opacity: this.fadeAnimation }}>
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}

const SoundVisual = ({imagePath}) => {
 

  return (
    <Blink style={styles.container} duration={125}>
      <Image
        style={styles.image}
        source={imagePath}
      />
    </Blink>
  );
};

export default SoundVisual;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    tintColor: "#FFF"
  },
});




