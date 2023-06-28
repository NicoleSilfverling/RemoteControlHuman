import React, { Component } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";
import ContentSelector from "./ContentSelector";

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

    const timer = setTimeout(() => {
      this.props.setShowImage(false);
    }, 1000);
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

export default function BlinkImage({
  showImage,
  setShowImage,
  buttonId,
  bodyHalfLeft,
}) {
  return (
    <Blink
      setShowImage={setShowImage}
      showImage={showImage}
      style={styles.container}
      duration={125}
      repeat_count={3}
    >
      <Image
        style={styles.image}
        source={ContentSelector(buttonId, bodyHalfLeft).bodypartImg}
        resizeMode="contain"
      />
    </Blink>
  );
}

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
  },
});
