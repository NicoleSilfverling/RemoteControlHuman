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
        source={require("../assets/images/InfoCardBG.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
        }}
      />

      <Text style={styles.txt}>
        <Text style={styles.txtTitle}>BLIND BOT</Text>
        {"\n"}A GAME FOR 2 PLAYERS, ROBOT AND MASTER
        {"\n"}
        THE ROBOT IS BLINDFOLDED WITH WIRELESS HEADPHONES
        {"\n"}
        THE MASTER CONTROLS THE ROBOT WITH THIS APP
      </Text>
    </View>
  );
};

const Component2 = () => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/InfoCardBG.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "absolute",
        }}
      />
      <Text style={styles.txt}>
        CONTROL THE ROBOT AND TRY TO:
        {"\n"}- WALK THROUGH AN OBSTACLE COURSE
        {"\n"}- CREATE A ROBOT BALLET
        {"\n"}- CHALLENGE OTHER TEAMS
        {/* {"\n"}- FILM THE ROBOTS WITH TIME LAPSE */}
        {"\n\n"}IT’S UP TO YOU TO CREATE THE GAMES!
      </Text>
    </View>
  );
};

const Component3 = () => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/interFaceTutorial.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.txt}>
        CONTROL THE BLIND ROBOT WITH THESE BUTTONS, ONE AT THE TIME
      </Text>
    </View>
  );
};

const Component4 = () => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/interFaceTutorial.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.txt}>EXTRA FUNCTIONS</Text>
    </View>
  );
};

const Component5 = () => {
  const sharedAudioPlayer = useContext(AudioPlayerContext);
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/InfoCardBG.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "absolute",
        }}
      />
      <Text style={styles.txt}>
        PUT ON BLINDFOLDS AND HEADPHONES PLAY BLIND BOT!
      </Text>
    </View>
  );
};

const components = [
  { key: 1, component: <Component1 /> },
  { key: 2, component: <Component2 /> },
  { key: 3, component: <Component3 /> },
  { key: 4, component: <Component4 /> },
  { key: 5, component: <Component5 /> },
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

      <TouchableHighlight
        id="infobtn"
        onPress={() => {
          sharedAudioPlayer.startBackgroundLoop();
          setShowInfoCard(false);
        }}
        style={styles.infoButton}
        // activeOpacity={0.1}
        underlayColor={"#00A300"}
      >
        <Image
          style={styles.playIcon}
          source={require("../assets/icons/playSmall.png")}
        />
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

  txt: {
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    fontSize: 20,
    color: "white",
    position: "absolute",
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    lineHeight: 35,
    // width: 600,
    //width: 300,
  },
  txtTitle: {
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "bold",
    fontSize: 27,
    // textAlign: "center",
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
    backgroundColor: "gray",
  },
  activeDot: {
    backgroundColor: "#fff",
  },
  infoButton: {
    position: "relative",
    borderColor: "$green",
    borderWidth: 2,
    borderRadius: 20,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    // backgroundColor: "green",
  },
  playIcon: {
    tintColor: "$green",
    width: "90%",
    height: "90%",
    marginLeft: 10,
  },

  "@media (max-width: 1000)": {
    txt: {
      fontSize: 12,
      lineHeight: 25,
      padding: 15,
    },
    txtTitle: {
      fontSize: 18,
    },
  },
});

export default InfoCardV2;
