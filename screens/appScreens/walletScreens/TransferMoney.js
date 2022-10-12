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
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import wallet2 from "./../../../assets/images/wallet2.png";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function TransferMoney({ navigation }) {
  const theme = useSelector((state) => state.theme.value);
  const [money, setMoney] = useState(["5"]);
  function handleNumpad(val) {
    console.log("val>>>>>>", val);
    if (val === "<") {
      console.log("money[money.length-1] >>>>>>>>", money[money.length - 1]);

      const lastIndexValue = money[money.length - 1];

      setMoney(money.filter((elem) => elem !== lastIndexValue));

      // const removeItemIndex = money.indexOf(money.pop());
      // console.log("remove item value>>>>>>>", removeItemIndex);

      // setMoney((money[removeItemIndex] = ""));

      // setMoney();
      // const y = money.pop();
      // setMoney(y);
    } else {
      setMoney([...money, val]);
    }
  }
  console.log("this is state array>>>>", money);

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <View style={styles.topSection}>
        <Pressable
          style={styles.arrowWrap}
          onPress={() => navigation.navigate("transaction-screen")}
        >
          <AntDesign name="arrowleft" size={win.width / 15} color="#FFF" />
        </Pressable>
        <View>
          <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
            Enter Amount
          </Text>
          <Text style={styles.subHeading}>₵5.30 Moni available</Text>
        </View>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.topWrap}>
        <View style={styles.topWrap1}>
          <Text style={styles.topWrap1Text}>MAX</Text>
        </View>
        <View style={styles.topWrap2}>
          <Text style={styles.topWrap2Text}>€{money}</Text>
        </View>
        <View style={styles.topWrap1}>
          <FontAwesome name="arrows-v" size={win.width / 16} color="white" />
        </View>
      </View>
      <View style={theme === "dark" ? styles.assetWrap : styles.assetWrapDark}>
        <View style={styles.assetInner}>
          <Image source={wallet2} style={styles.currImg} />
          <View style={styles.assetInfo}>
            <Text
              style={
                theme === "dark" ? styles.currHeading : styles.currHeadingDark
              }
            >
              Moni Wallet
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.addressInn}>
            <Text
              style={
                theme === "dark" ? styles.innerText1 : styles.innerText1Dark
              }
            >
              ₵5.30
            </Text>
            <Text style={styles.innerText2}>0.01644481 Moni</Text>
          </View>
        </View>
      </View>
      <View style={styles.numWrap}>
        <Pressable onPress={() => handleNumpad("1")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            1
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("2")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            2
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("3")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            3
          </Text>
        </Pressable>
      </View>
      <View style={styles.numWrap}>
        <Pressable onPress={() => handleNumpad("4")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            4
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("5")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            5
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("6")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            6
          </Text>
        </Pressable>
      </View>
      <View style={styles.numWrap}>
        <Pressable onPress={() => handleNumpad("7")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            7
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("8")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            8
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("9")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            9
          </Text>
        </Pressable>
      </View>
      <View style={styles.numWrap}>
        <Pressable onPress={() => handleNumpad(".")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            .
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("0")}>
          <Text
            style={theme === "dark" ? styles.numStyle : styles.numStyleDark}
          >
            0
          </Text>
        </Pressable>
        <Pressable onPress={() => handleNumpad("<")}>
          <FontAwesome5
            name="less-than"
            size={win.width / 18}
            color={theme === "dark" ? "black" : "#fff"}
          />
        </Pressable>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </View>
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
  ////////////////////////////

  subHeading: {
    fontSize: win.width / 30,
    color: "#777777",
  },
  topWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    alignItems: "center",
    marginTop: win.height / 11,
    overflow: "hidden",
  },
  topWrap1: {
    backgroundColor: "#FE3F47",

    width: win.width / 8,
    height: win.height / 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  // topWrap2: {
  //   alignItems: "flex-end",
  //   cursor: "pointer",
  // },
  topWrap1Text: {
    color: "#fff",
  },
  topWrap2Text: {
    color: "#FE3F47",
    fontSize: win.width / 10,
    width: win.width / 1.7,
    height: win.width / 8,
    textAlign: "center",
    // cursor: "pointer",
    // borderWidth: "2px solid black",
  },

  ////////////////////
  assetWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#FFF",
    padding: win.width / 30,
    borderRadius: 10,
    marginTop: win.height / 30,
    alignItems: "center",
  },
  assetWrapDark: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: win.height / 15,
    marginHorizontal: win.width / 20,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
    padding: win.width / 30,
    borderRadius: 10,
    marginTop: win.height / 30,
    alignItems: "center",
  },
  ////////////////////////////

  currImg: {
    height: win.height / 24,
    width: win.height / 24,
  },
  assetInner: {
    flexDirection: "row",
    alignItems: "center",
  },

  ///////////////////////////
  currHeading: {
    fontSize: win.width / 26,
    fontWeight: "bold",
  },
  currHeadingDark: {
    fontSize: win.width / 26,
    fontWeight: "bold",
    color: "#FFF",
  },
  ////////////////////////////

  assetInfo: {
    marginLeft: win.width / 40,
  },
  addressInn: {
    alignItems: "flex-end",
  },

  ///////////////////////////
  innerText1: {
    fontWeight: "bold",
    fontSize: win.width / 30,
  },
  innerText1Dark: {
    fontWeight: "bold",
    fontSize: win.width / 30,
    color: "#fff",
  },
  ////////////////////////////

  innerText2: {
    color: "#777777",
    fontSize: win.width / 35,
  },
  numWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 10,
    marginTop: win.height / 30,
    alignItems: "center",
  },

  //////////////////////////////
  numStyle: {
    fontSize: win.width / 12,
    fontWeight: "bold",
  },
  numStyleDark: {
    fontSize: win.width / 12,
    fontWeight: "bold",
    color: "#fff",
  },
  ////////////////////////////////

  btn: {
    backgroundColor: "#FE3F47",
    marginHorizontal: win.width / 4,
    borderRadius: 10,
    marginTop: win.height / 20,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: win.width / 20,
    paddingVertical: win.height / 90,
  },
});

export default TransferMoney;
