import React, { Component, useState, useEffect } from "react";
import { Animated, StyleSheet, View, Image } from "react-native";
import ContentSelector from "./ContentSelector";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };
  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start;
      this.props.setShowImage(false);
    }, 2000);
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default function ShowImage({
  showImage,
  setShowImage,
  buttonId,
  bodyHalfLeft,
}) {
  return (
    <View style={styles.container}>
      <ImageLoader
        style={styles.image}
        source={ContentSelector(buttonId, bodyHalfLeft).bodypartImg}
        setShowImage={setShowImage}
        showImage={showImage}
      />
    </View>
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
