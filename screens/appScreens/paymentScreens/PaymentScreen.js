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

import moniCard from "./../../../assets/images/moniCard.png";
import { Feather } from "@expo/vector-icons";
import V8 from "./../../../assets/images/V8.png";
import V9 from "./../../../assets/images/V9.png";
import V10 from "./../../../assets/images/V10.png";
// import { useFonts } from 'expo-font';
import image31 from "./../../../assets/images/image31.png";
import image40 from "./../../../assets/images/image40.png";
import image33 from "./../../../assets/images/image33.png";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function PaymentScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <View style={styles.topSection}>
        <View></View>
        <Feather
          name="settings"
          size={win.width / 15}
          color={theme === "dark" ? "#FE3F47" : "#fff"}
        />
      </View>
      <View style={styles.moniCardStyle}>
        <Image source={moniCard} style={styles.moniCardImg} />
      </View>
      <View style={styles.imgWrap}>
        <View>
          <View style={styles.imgStyle}>
            <Image source={V10} />
          </View>
          <Text style={theme === "dark" ? styles.imgtext : styles.imgtextDark}>
            Add Funds
          </Text>
        </View>
        <View>
          <View style={styles.imgStyle}>
            <Image source={V9} />
          </View>
          <Text style={theme === "dark" ? styles.imgtext : styles.imgtextDark}>
            Withdraw Funds
          </Text>
        </View>
        <View>
          <View style={styles.imgStyle}>
            <Image source={V8} />
          </View>
          <Text style={theme === "dark" ? styles.imgtext : styles.imgtextDark}>
            Freeze
          </Text>
        </View>
      </View>
      <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
        Card Activity
      </Text>
      <View
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
      >
        <View style={styles.bottomCardInner}>
          <Image source={image31} style={styles.bottomImg} />
          <View>
            <Text style={theme === "dark" ? styles.text1 : styles.text1Dark}>
              Henry Hemsworth{" "}
            </Text>
            <Text style={styles.text3}>Transfer</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text2}>-₵355.8</Text>
          <Text style={styles.text3}>4.45 AM</Text>
        </View>
      </View>
      <View
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
      >
        <View style={styles.bottomCardInner}>
          <Image source={image40} style={styles.bottomImg} />
          <View>
            <Text style={theme === "dark" ? styles.text1 : styles.text1Dark}>
              Henry Hemsworth{" "}
            </Text>
            <Text style={styles.text3}>Transfer</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text2}>-₵355.8</Text>
          <Text style={styles.text3}>4.45 AM</Text>
        </View>
      </View>
      <View
        style={theme === "dark" ? styles.bottomCard : styles.bottomCardDark}
      >
        <View style={styles.bottomCardInner}>
          <Image source={image33} style={styles.bottomImg} />
          <View>
            <Text style={theme === "dark" ? styles.text1 : styles.text1Dark}>
              Henry Hemsworth{" "}
            </Text>
            <Text style={styles.text3}>Transfer</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text2}>-₵355.8</Text>
          <Text style={styles.text3}>4.45 AM</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Pressable onPress={() => navigation.navigate("card-activity")}>
          <Text style={styles.btnText}>Show More</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /////////////////////
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
  ///////////////////////

  topSection: {
    flexDirection: "row",
    paddingTop: win.height / 17,
    paddingBottom: win.height / 30,
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
  },
  moniCardStyle: {
    width: win.width,
    alignItems: "center",
  },
  moniCardImg: {
    width: win.height / 2.1,
    height: win.height / 4,
  },

  imgWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 10,
    paddingVertical: win.height / 45,
  },
  imgStyle: {
    backgroundColor: "#F9DAE4",
    height: win.height / 13,
    width: win.height / 13,
    borderRadius: win.width / 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  ///////////////////////
  imgtext: {
    fontSize: win.width / 45,
    textAlign: "center",
    fontWeight: "bold",
  },
  imgtextDark: {
    fontSize: win.width / 45,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  //////////////////////

  /////////////////////////
  heading: {
    textAlign: "center",
    fontSize: win.width / 18,
    fontWeight: "bold",
  },
  headingDark: {
    textAlign: "center",
    fontSize: win.width / 18,
    fontWeight: "bold",
    color: "#fff",
  },
  ///////////////////////

  ///////////////////////
  bottomCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 10,
    height: win.height / 14,
    alignItems: "center",
    marginHorizontal: win.width / 25,
    paddingHorizontal: win.width / 50,
    marginVertical: win.height / 120,
  },
  bottomCardDark: {
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 10,
    height: win.height / 14,
    alignItems: "center",
    marginHorizontal: win.width / 25,
    paddingHorizontal: win.width / 50,
    marginVertical: win.height / 120,
  },
  /////////////////////////

  bottomCardInner: {
    flexDirection: "row",
  },

  //////////////////
  text1: {
    color: "#000000",
    fontSize: win.width / 40,
    fontWeight: "bold",
  },
  text1Dark: {
    color: "#FFF",
    fontSize: win.width / 40,
    fontWeight: "bold",
  },
  /////////////////

  text2: {
    color: "#FE3F47",
    fontSize: win.width / 28,
  },
  text3: {
    color: "#777777",
    fontSize: win.width / 40,
  },
  bottomImg: {
    marginRight: win.width / 40,
  },
  btn: {
    marginHorizontal: win.width / 3,
    marginTop: win.height / 90,
  },
  btnText: {
    backgroundColor: "#FE3F47",
    color: "#fff",
    fontSize: win.width / 30,
    textAlign: "center",
    paddingVertical: win.height / 90,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default PaymentScreen;
