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

import splashImg2 from "./../../../assets/images/splashImg2.png";
import splashImg2Dark from "./../../../assets/images/splashImg2Dark.png";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function ReferScreen({ navigation }) {
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
            color={theme === "dark" ? "#FFF" : "#000"}
          />
        </Pressable>
        <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
          Refer & Earn
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.imgWrap}>
        <Image
          source={theme === "dark" ? splashImg2 : splashImg2Dark}
          style={styles.img}
        />
      </View>
      <Text
        style={theme === "dark" ? styles.subHeading : styles.subHeadingDark}
      >
        Refer Your Friends, Earn Cashback
      </Text>
      <View style={styles.codeWrap}>
        <View style={styles.codeWrap1}>
          <Text style={styles.text1}>SANDSBERG3023</Text>
        </View>
        <View style={styles.codeWrap2}>
          <Text style={styles.text2}>COPY</Text>
        </View>
      </View>
      <View style={styles.btnWrap}>
        <Text style={styles.btnText}>INVITE NOW</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /////////////////////////
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
  //////////////////////////

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

  /////////////////////////
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
  /////////////////////////

  imgWrap: {
    width: win.width,
    alignItems: "center",
    marginVertical: win.height / 20,
  },

  ///////////////////////////
  subHeading: {
    fontSize: win.width / 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeadingDark: {
    fontSize: win.width / 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  ///////////////////////////

  codeWrap: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: win.height / 20,
  },
  text1: {
    color: "#FE3F47",
    fontSize: win.width / 30,
  },
  text2: {
    color: "#FFF",
    fontSize: win.width / 28,
  },
  codeWrap1: {
    backgroundColor: "#F9DAE4",
    paddingHorizontal: win.width / 15,
    paddingVertical: win.width / 25,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  codeWrap2: {
    backgroundColor: "#FE3F47",
    paddingHorizontal: win.width / 20,
    paddingVertical: win.width / 25,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: win.width / 20,
    textAlign: "center",
    padding: win.width / 40,
  },
  btnWrap: {
    backgroundColor: "#FE3F47",
    marginHorizontal: win.width / 4,
    borderRadius: 10,
    marginTop: win.height / 20,
  },
});

export default ReferScreen;
