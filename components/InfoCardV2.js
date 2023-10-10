import React, { useRef, useState, useContext, useEffect } from "react";
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
import { chooseAudioFile } from "./RandomCommand";

const { width, height } = Dimensions.get("window");

const Component1 = () => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/intro1.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.txt}>
        <Text style={styles.txtTitle}>BLIND BOT</Text>
        {"\n"}A GAME FOR 2 PLAYERS, MASTER AND ROBOT.
        {"\n"}
        THE MASTER CONTROLS THE ROBOT WITH THIS APP.
        {"\n"}
        THE ROBOT IS BLINDFOLDED, WEARING WIRELESS HEADPHONES.
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
        THERE ARE NO RULES. YOU CREATE THE GAMES:
        {"\n"}- WALK THROUGH AN OBSTACLE COURSE
        {"\n"}- CREATE A ROBOT BALLET
        {"\n"}- CHALLENGE OTHER TEAMS
      </Text>
    </View>
  );
};

const Component3 = () => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/intro3.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={[styles.txt, styles.comp3]}>
        CONTROL THE BLIND ROBOT WITH THESE BUTTONS, ONE AT A TIME
      </Text>
    </View>
  );
};

const Component4 = () => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/intro4.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const Component5 = ({ setShowInfoCard }) => {
  const sharedAudioPlayer = useContext(AudioPlayerContext);
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/images/intro5.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.endBox}>
        <Text style={[styles.endTxt, {}]}>
          PUT ON BLINDFOLDS AND HEADPHONES. LET'S PLAY!{" "}
        </Text>
        <TouchableHighlight
          id="infobtn"
          onPress={() => {
            sharedAudioPlayer.play(
              require("../assets/sounds/music/welcome_new.wav")
            );
            sharedAudioPlayer.startBackgroundLoop();
            setShowInfoCard(false);
          }}
          style={styles.infoButton}
          underlayColor={"#00A300"}
        >
          <Image
            style={styles.playIcon}
            source={require("../assets/icons/playSmall.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const InfoCardV2 = ({ setShowInfoCard, setShowHelpPopUp }) => {
  const components = [
    { key: 1, component: <Component1 /> },
    { key: 2, component: <Component2 /> },
    { key: 3, component: <Component3 /> },
    { key: 4, component: <Component4 /> },
    { key: 5, component: <Component5 setShowInfoCard={setShowInfoCard} /> },
  ];

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

  useEffect(() => {
    let sel = "";
    if (activeIndex == 1) {
      sel = require("../assets/sounds/music/swipe1.wav");
    } else if (activeIndex == 2) {
      sel = require("../assets/sounds/music/swipe2.wav");
    } else if (activeIndex == 3) {
      sel = require("../assets/sounds/music/swipe3.wav");
    } else if (activeIndex == 4) {
      sel = require("../assets/sounds/music/swipe4.wav");
    }
    if (sel != "") {
      sharedAudioPlayer.play(sel);
    }
  }, [activeIndex]);

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
      {activeIndex != 4 ? (
        <TouchableHighlight
          underlayColor={"transparent"}
          style={styles.skip}
          onPress={() => {
            sharedAudioPlayer.play(
              require("../assets/sounds/music/welcome_new.wav")
            );
            sharedAudioPlayer.startBackgroundLoop();
            setShowInfoCard(false);
          }}
        >
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableHighlight>
      ) : null}
    </View>
  );
};

const styles = EStyleSheet.create({
  flatList: {
    width,
    height,
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
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    lineHeight: 35,
  },
  txtTitle: {
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "bold",
    fontSize: 27,
  },
  comp3: {
    left: "4%",
    bottom: "13%",
  },
  skip: {
    position: "absolute",
    right: 0,
    bottom: 20,
    height: 60,
    width: 100,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 14,
    paddingBottom: 4,
  },
  skipText: {
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    color: "#FFF",
    fontSize: 20,
  },

  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
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
  endBox: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  endTxt: {
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 15,
    padding: 30,
    fontFamily: Platform.OS === "ios" ? "$fontFamilyIOS" : "$fontFamilyAndroid",
    fontWeight: "$fontWeight",
    fontSize: 20,
    color: "white",
    lineHeight: 35,
    backgroundColor: "black",
  },
  infoButton: {
    borderColor: "$green",
    marginLeft: 3,
    borderWidth: 2,
    borderRadius: 15,
    height: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  playIcon: {
    tintColor: "$green",
    width: "90%",
    height: "90%",
  },

  "@media (max-width: 1000)": {
    txt: {
      fontSize: 12,
      lineHeight: 25,
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
    },
    txtTitle: {
      fontSize: 18,
    },
    endTxt: {
      fontSize: 12,
      lineHeight: 25,
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
    },
    comp3: {
      left: null,
      bottom: null,
    },
    skipText: {
      fontSize: 16,
    },
    infoButton: {
      borderRadius: 10,
      borderWidth: 1,
    },
  },
  "@media (max-width: 900)": {
    txt: {
      fontSize: 12,
      lineHeight: 22,
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
    },
  },
});

export default InfoCardV2;
