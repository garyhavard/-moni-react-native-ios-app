import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Ellipse1 from "./../../../assets/images/Ellipsw1.png";
import Ellipse2 from "./../../../assets/images/Ellipsw2.png";
import { Fontisto } from "@expo/vector-icons";
import seperatorImg from "./../../../assets/images/seperatorImg.png";
import { useSelector, useDispatch } from "react-redux";

// import { useFonts } from 'expo-font';

const win = Dimensions.get("window");
function SwapScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
        Swap Tokens
      </Text>
      <View style={theme === "dark" ? styles.stats : styles.statsDark}>
        <View style={styles.statsTop}>
          <View style={styles.leftWrap}>
            <Text style={styles.text1}>You Pay</Text>
            <View style={styles.leftWrapInner}>
              <Image source={Ellipse1} style={styles.currencyImg} />
              <Text style={styles.currencyName}>SOL</Text>
              <Feather name="arrow-down" size={win.width / 30} color="white" />
            </View>
          </View>
          <View>
            <Text style={styles.text1}>
              Max{" "}
              <Text style={theme === "dark" ? styles.text2 : styles.text2Dark}>
                0 SOL
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.statsMiddle}>
          <View style={styles.middleLeft}>
            <Text
              style={
                theme === "dark" ? styles.middleText : styles.middleTextDark
              }
            >
              0
            </Text>
            <View></View>
          </View>
          <View style={styles.middleCenter}>
            {/* <View style={styles.twinArr}><Fontisto name="arrow-swap" size={win.width / 20} color="white" /></View> */}
            <Image source={seperatorImg} style={styles.middleImage} />
          </View>
          <View style={styles.middleLeft}>
            <View></View>
            <Text
              style={
                theme === "dark" ? styles.middleText : styles.middleTextDark
              }
            >
              0
            </Text>
          </View>
        </View>
        <View style={styles.statsTop}>
          <View></View>
          <View style={styles.leftWrap}>
            <View style={styles.leftWrapInner}>
              <Image source={Ellipse2} style={styles.currencyImg} />
              <Text style={styles.currencyName}>USDC</Text>
              <Feather name="arrow-down" size={win.width / 30} color="white" />
            </View>
            <Text style={styles.text1}>You Recieve</Text>
          </View>
        </View>
      </View>
      <View style={theme === "dark" ? styles.statsList : styles.statsListDark}>
        <View style={styles.statsListInner}>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            Best price
          </Text>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            -
          </Text>
        </View>
        <View style={styles.statsListInner}>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            Slippage To lerance
            <Ionicons
              name="information-circle"
              size={win.height / 45}
              color={theme === "dark" ? "black" : "white"}
            />
          </Text>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            1%
            <MaterialCommunityIcons
              name="greater-than"
              size={win.width / 30}
              color={theme === "dark" ? "black" : "white"}
            />
          </Text>
        </View>
        <View style={styles.statsListInner}>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            Estimated Fess
          </Text>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            -
          </Text>
        </View>
        <View style={styles.statsListInner}>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            Price Impact
            <Ionicons
              name="information-circle"
              size={win.height / 45}
              color={theme === "dark" ? "black" : "white"}
            />
          </Text>
          <Text
            style={
              theme === "dark" ? styles.statsListText : styles.statsListTextDark
            }
          >
            -
          </Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Review Order</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ////////////////////
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
  ///////////////////

  //////////////////
  heading: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
    paddingTop: win.height / 16,
  },
  headingDark: {
    fontWeight: "bold",
    fontSize: win.width / 20,
    textAlign: "center",
    paddingTop: win.height / 16,
    color: "#fff",
  },
  ////////////////////

  ////////////////////////////
  stats: {
    height: win.height / 2.5,
    backgroundColor: "#F8F8F8",
    marginTop: win.height / 30,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 30,
  },
  statsDark: {
    height: win.height / 2.5,
    backgroundColor: "#2C2B30",
    marginTop: win.height / 30,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 30,
  },
  //////////////////////////////

  //////////////////////////
  statsList: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    height: win.height / 5,
    backgroundColor: "#F8F8F8",
    marginTop: win.height / 35,
    marginHorizontal: win.width / 10,
    borderRadius: 10,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 30,
  },
  statsListDark: {
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    height: win.height / 5,
    backgroundColor: "#2C2B30",
    marginTop: win.height / 35,
    marginHorizontal: win.width / 10,
    borderRadius: 10,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 30,
  },

  ////////////////////////////
  statsListInner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ////////////////////////
  statsListText: {
    fontWeight: "400",
    fontSize: win.height / 55,
  },
  statsListTextDark: {
    fontWeight: "400",
    fontSize: win.height / 55,
    color: "#fff",
  },
  ////////////////////////////

  btn: {
    marginHorizontal: win.width / 3.5,
    marginTop: win.height / 40,
  },
  btnText: {
    backgroundColor: "#FE3F47",
    color: "#fff",
    fontSize: win.height / 50,
    textAlign: "center",
    paddingVertical: win.height / 70,
    borderRadius: 10,
    overflow: "hidden",
  },
  leftWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftWrapInner: {
    flexDirection: "row",

    height: win.height / 30,
    // width: win.width / 5.5,
    paddingHorizontal: win.width / 50,
    marginHorizontal: win.width / 50,
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
    justifyContent: "space-around",
    marginLeft: win.width / 40,
  },
  currencyName: {
    color: "#fff",
    fontSize: win.width / 30,
    padding: 3,
  },
  currencyImg: {
    width: win.width / 20,
    height: win.width / 23,
    paddingRight: 4,
  },
  statsTop: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    paddingVertical: win.height / 80,
    height: "16%",
    alignItems: "center",
  },
  text1: {
    color: "#777777",
    fontSize: win.width / 30,
  },

  /////////////////////////
  text2: {
    color: "black",
    fontWeight: "bold",
  },
  text2Dark: {
    color: "white",
    fontWeight: "bold",
  },
  //////////////////////

  statsMiddle: {
    flexDirection: "row",

    height: win.height / 4,
    justifyContent: "space-between",
  },
  middleLeft: {
    justifyContent: "space-between",
  },

  /////////////////////////////////
  middleText: {
    color: "#777777",
    fontWeight: "bold",
    fontSize: win.height / 30,
  },
  middleTextDark: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: win.height / 30,
  },
  ///////////////////////////

  twinArr: {
    backgroundColor: "#FE3F47",
    height: win.width / 10,
    width: win.width / 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  middleCenter: {
    justifyContent: "center",
    // borderWidth: 1,
    borderColor: "black",
  },
  middleImage: {},
});

export default SwapScreen;
