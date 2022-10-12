import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import V7 from "./../../../assets/images/V7.png";
import ForwardArrow from "./../../../assets/images/forwardArrow.png";
import Language from "./../../../assets/images/Language.png";
import Currency from "./../../../assets/images/Currency.png";
import pricealert from "./../../../assets/images/pricealert.png";
import pushnotification from "./../../../assets/images/pushnotification.png";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function PreferenceScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <View style={styles.topSection}>
        <Pressable
          style={styles.arrowWrap}
          onPress={() => navigation.navigate("user-screen")}
        >
          <AntDesign
            name="arrowleft"
            size={win.width / 15}
            color={theme === "dark" ? "#FFF" : "black"}
          />
        </Pressable>
        <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
          Preference
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.topView}></View>
      <View
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
      >
        <View style={styles.bottomCardInner}>
          <Image source={Language} style={styles.vImage} />
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Language
          </Text>
        </View>
      </View>

      <View
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
      >
        <View style={styles.bottomCardInner}>
          <Image source={Currency} style={styles.vImage} />
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Currency
          </Text>
        </View>
      </View>

      <View
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
      >
        <View style={styles.bottomCardInner}>
          <Image source={pricealert} style={styles.vImage} />
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Price Alert
          </Text>
        </View>
      </View>

      <View
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
      >
        <View style={styles.bottomCardInner}>
          <Image source={pushnotification} style={styles.vImage} />
          <Text
            style={theme === "dark" ? styles.bottomText : styles.bottomTextDark}
          >
            Push Notification
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ////////////////////////
  container: {
    backgroundColor: "#FFF",
    height: win.height + win.height / 19,
    width: win.width,
  },
  containerDark: {
    backgroundColor: "#222222",
    height: win.height + win.height / 19,
    width: win.width,
  },
  //////////////////////

  card: {
    backgroundColor: "#FE3F47",
    borderRadius: 10,
    height: win.height / 4,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 40,
    marginHorizontal: win.width / 25,
    marginTop: win.height / 40,
    marginBottom: win.height / 80,
  },

  vImage: {
    marginHorizontal: win.width / 50,
  },

  ///////////////////////
  bottomCard: {
    flexDirection: "row",
    borderColor: "lightgray",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: win.width / 25,
    marginVertical: win.height / 120,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 40,
    height: win.height / 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
  },
  bottomCardDark: {
    flexDirection: "row",
    borderColor: "lightgray",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: win.width / 25,
    marginVertical: win.height / 120,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 40,
    height: win.height / 15,
    backgroundColor: "#2C2B30",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
  },
  /////////////////////////////

  ////////////////////////////
  bottomText: {
    color: "#000000",
    fontSize: win.width / 25,
    fontWeight: "bold",
  },
  bottomTextDark: {
    color: "#fff",
    fontSize: win.width / 25,
    fontWeight: "bold",
  },
  ////////////////////////////

  topView: {
    flexDirection: "row",
    paddingTop: win.height / 30,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 30,
  },
  arrWrap: {
    backgroundColor: "#FE3F47",
    height: win.width / 19,
    width: win.width / 19,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: win.width / 50,
  },
  arrWrap2: {
    height: win.width / 19,
    width: win.width / 19,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: win.width / 50,
  },
  bottomCardInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  topSection: {
    flexDirection: "row",
    paddingTop: win.height / 17,
    paddingBottom: win.height / 30,
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    alignItems: "center",
  },
  arrowWrap: {
    backgroundColor: "#FE3F47",
    width: win.width / 10,
    height: win.width / 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  empty: {
    width: win.width / 15,
  },

  /////////////////////////////
  heading: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
  },
  headingDark: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
    color: "#fff",
  },
  //////////////////////////////
});

export default PreferenceScreen;
