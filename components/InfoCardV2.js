import React, { useRef, useState, useContext } from "react";
import {
  View,
  FlatList,
  Dimensions,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { AudioPlayerContext } from "../SharedAudioPlayer";

const { width, height } = Dimensions.get("window");

const Component1 = () => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/interFaceTutorial.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const Component2 = () => {
  return (
    <View style={styles.component}>
      <Text style={{ color: "white" }}> Component2</Text>
    </View>
  );
};

const Component3 = () => {
  return (
    <View style={styles.component}>
      <Text style={{ color: "white" }}>Component3</Text>
    </View>
  );
};

const components = [
  { key: 1, component: <Component1 /> },
  { key: 2, component: <Component2 /> },
  { key: 3, component: <Component3 /> },
];

const InfoCardV2 = ({ setShowInfoCard, setShowHelpPopUp }) => {
  const sharedAudioPlayer = useContext(AudioPlayerContext);

  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
  };
  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / width);
    setActiveIndex(index);
  };

  const renderItem = ({ item }) => {
    return (
      <View key={item.key} style={styles.container}>
        {item.component}
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={components}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
        style={styles.flatList}
      />
      <View style={styles.dotContainer}>
        {components.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
      <TouchableHighlight
        underlayColor={"transparent"}
        style={styles.skip}
        onPress={() => {
          sharedAudioPlayer.startBackgroundLoop();
          setShowInfoCard(false);
        }}
      >
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = EStyleSheet.create({
  flatList: {
    // flex: 1,
    width,
    height,
    // backgroundColor: "red",
  },
  container: {
    width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderWidth: 2,
  },
  component: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  image: {
    width,
    height,
  },

  skip: {
    position: "absolute",
    right: 0,
    bottom: 20,
    height: 60,
    width: 100,
    // backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // zIndex: 3,
    paddingRight: 14,
    paddingBottom: 4,
  },
  skipText: {
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    color: "#FFF",
    fontSize: 16,
  },

  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    // backgroundColor: "green",
    // zIndex: 2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "lightgray",
  },
  activeDot: {
    backgroundColor: "gray",
  },
});

export default InfoCardV2;
