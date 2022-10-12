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

import { AntDesign } from "@expo/vector-icons";

import Vector20 from "./../../../assets/images/Vector20.png";
import Vector21 from "./../../../assets/images/Vector21.png";

import Vector22 from "./../../../assets/images/Vector22.png";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function IDVerificationScreen({ navigation }) {
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
          ID Verification
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.circleWrap}>
        <View style={styles.circleImg}>
          <Image source={Vector20} style={styles.Img} />
        </View>
        <Text
          style={theme === "dark" ? styles.circleText : styles.circleTextDark}
        >
          Passport
        </Text>
      </View>
      <View style={styles.circleWrap}>
        <View style={styles.circleImg}>
          <Image source={Vector21} style={styles.Img} />
        </View>
        <Text
          style={theme === "dark" ? styles.circleText : styles.circleTextDark}
        >
          Driver license
        </Text>
      </View>
      <View style={styles.circleWrap}>
        <View style={styles.circleImg}>
          <Image source={Vector22} style={styles.Img} />
        </View>
        <Text
          style={theme === "dark" ? styles.circleText : styles.circleTextDark}
        >
          Photo ID
        </Text>
      </View>
      <Text
        style={theme === "dark" ? styles.textNotify : styles.textNotifyDark}
      >
        I don’t have one of these ID’s{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //////////////////////////////
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
  //////////////////////////////

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

  ///////////////////////////
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
  ///////////////////////////

  circleImg: {
    backgroundColor: "#F9DAE4",
    width: win.width / 5,
    height: win.width / 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
  },
  circleWrap: {
    alignItems: "center",
    marginVertical: win.height / 40,
  },

  ////////////////////////////
  circleText: {
    fontWeight: "bold",
    fontSize: win.width / 25,
    marginTop: win.height / 100,
  },
  circleTextDark: {
    fontWeight: "bold",
    fontSize: win.width / 25,
    marginTop: win.height / 100,
    color: "#fff",
  },
  /////////////////////////////

  //////////////////////////
  textNotify: {
    textAlign: "center",
    marginTop: win.height / 60,
    fontSize: win.width / 30,
    color: "#777777",
  },
  textNotifyDark: {
    textAlign: "center",
    marginTop: win.height / 60,
    fontSize: win.width / 30,
    color: "#F9DAE4",
  },
  ////////////////////////////
});

export default IDVerificationScreen;
