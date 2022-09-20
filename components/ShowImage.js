import React, { Component } from "react";
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

const ShowImage = () => {
  return (
    <View style={styles.container}>
      <ImageLoader
        style={styles.image}
        source={ContentSelector("L3").bodypartImg}
      />
    </View>
  );
};

export default ShowImage;

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
