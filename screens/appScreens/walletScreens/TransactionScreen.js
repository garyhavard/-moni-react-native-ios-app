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

import Rectangle from "./../../../assets/images/Rectangle.png";
import { Feather } from "@expo/vector-icons";
import currency1 from "./../../../assets/images/curreny1.png";
import currency2 from "./../../../assets/images/curreny2.png";
import WalletImg from "./../../../assets/images/Wallet-amico.png";
import wallet1 from "./../../../assets/images/wallet1.png";
import wallet2 from "./../../../assets/images/wallet2.png";
import wallet3 from "./../../../assets/images/wallet3.png";
import wallet4 from "./../../../assets/images/wallet4.png";
import wallet5 from "./../../../assets/images/wallet5.png";
import wallet6 from "./../../../assets/images/wallet6.png";
import { AntDesign } from "@expo/vector-icons";
import MyLineChart from "../../../components/LineChart";
import barImg from "./../../../assets/images/barImg.png";
import chartImg from "./../../../assets/images/chartImg.png";
import { useSelector, useDispatch } from "react-redux";

const DATA = [
  { id: 1, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 2, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 3, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
];

const win = Dimensions.get("window");
function TransactionScreen({ navigation }) {
  const theme = useSelector((state) => state.theme.value);

  const renderItem = ({ item }) => (
    <View
      style={theme === "dark" ? styles.flatWrap : styles.flatWrapDark}
      onPress={() => navigation.navigate("")}
    >
      <Text style={theme === "dark" ? styles.textLeft : styles.textLeftDark}>
        {item.date}
      </Text>
      <Text style={styles.textMiddle}>{item.city}</Text>
      <Text style={styles.textRight}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={theme === "dark" ? styles.container : styles.containerDark}>
      <View style={styles.topWrap}>
        <Pressable
          style={styles.arrowWrap}
          onPress={() => navigation.navigate("wallet-screen")}
        >
          <AntDesign
            name="arrowleft"
            size={win.width / 15}
            color={theme === "dark" ? "#FFF" : "black"}
          />
        </Pressable>
        <View
          style={theme === "dark" ? styles.headingWrap : styles.headingWrapDark}
        >
          <Image style={styles.imgCurrency} source={wallet5} />
          <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
            BITCOIN (BTC)
          </Text>
        </View>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.belowWrap}>
        <View
          style={
            theme === "dark" ? styles.belowWrapInner : styles.belowWrapInnerDark
          }
        >
          <Text
            style={theme === "dark" ? styles.belowText1 : styles.belowText1Dark}
          >
            ₵10,000
          </Text>
          <Text
            style={
              theme === "dark"
                ? styles.belowText2Left
                : styles.belowText2LeftDark
            }
          >
            -7.27%
          </Text>
        </View>
        <View
          style={
            theme === "dark" ? styles.belowWrapInner : styles.belowWrapInnerDark
          }
        >
          <Text
            style={theme === "dark" ? styles.belowText1 : styles.belowText1Dark}
          >
            0.000046 BTC{" "}
          </Text>
          <Text style={styles.belowText2}>₵163,874.13</Text>
        </View>
      </View>
      <View style={styles.chartWrap}>
        {/* <MyLineChart /> */}
        <Image source={chartImg} style={styles.chartWrapImg} />
      </View>
      <View style={styles.btnWrap}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("recieve-moni")}
        >
          <Text style={styles.btnText}>RECEIVE</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("buyandsell")}
        >
          <Text style={styles.btnText}>BUY/SELL</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("send-moni")}
        >
          <Text style={styles.btnText}>SEND</Text>
        </Pressable>
      </View>
      <View style={styles.subheadingWrap}>
        <Text
          style={theme === "dark" ? styles.subheading : styles.subheadingDark}
        >
          Transaction list
        </Text>
      </View>
      <View style={styles.btnWrap2}>
        <View style={styles.btn2}>
          <AntDesign
            name="upload"
            size={win.width / 20}
            style={{ marginLeft: win.width / 40 }}
            color="white"
          />
          <Text style={styles.btnText2}>In</Text>
        </View>
        <View style={styles.btn2}>
          <AntDesign
            name="download"
            size={win.width / 20}
            style={{ marginLeft: win.width / 40 }}
            color="white"
          />
          <Text style={styles.btnText2}>Out</Text>
        </View>
        <View style={styles.btn2}>
          <Image source={barImg} style={styles.btnImg} />
        </View>
      </View>
      <View style={styles.flatCont}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // numColumns={2}
          // columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
        />
      </View>
      <Pressable
        style={styles.showBtn}
        onPress={() => navigation.navigate("transaction-list")}
      >
        <Text style={styles.showBtnText}>Show More</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  //////////////////////////
  container: {
    backgroundColor: "#fff",
    height: win.height + win.height / 19,
    width: win.width,
  },
  containerDark: {
    backgroundColor: "#222222",
    height: win.height + win.height / 19,
    width: win.width,
  },
  /////////////////////////

  arrowWrap: {
    backgroundColor: "#FE3F47",
    width: win.width / 10,
    height: win.width / 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  topWrap: {
    flexDirection: "row",
    marginTop: win.height / 15,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 25,
    alignItems: "center",
  },

  ///////////////////////
  heading: {
    fontSize: win.width / 22,
    fontWeight: "bold",
  },
  headingDark: {
    fontSize: win.width / 22,
    fontWeight: "bold",
    color: "#fff",
  },
  ////////////////////////

  empty: {
    width: win.width / 10,
  },
  imgCurrency: {
    width: win.width / 14,
    height: win.width / 14,
    marginRight: win.width / 120,
  },

  //////////////////////////
  headingWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
  },
  headingWrapDark: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 150,
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
  },
  ////////////////////////

  belowWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    marginTop: win.height / 30,
  },

  ///////////////////////
  belowWrapInner: {
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
  },
  belowWrapInnerDark: {
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 150,
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
  },
  ////////////////////////

  //////////////////////
  belowText1: {
    fontWeight: "bold",
    fontSize: win.width / 30,
  },
  belowText1Dark: {
    fontWeight: "bold",
    fontSize: win.width / 30,
    color: "#fff",
  },
  //////////////////////

  belowText2: {
    color: "#777777",
    fontSize: win.width / 33,
    textAlign: "center",
  },

  ////////////////////////
  belowText2Left: {
    color: "#777777",
    fontSize: win.width / 33,
    textAlign: "center",
  },
  belowText2LeftDark: {
    color: "#FE3F47",
    fontSize: win.width / 33,
    textAlign: "center",
  },
  //////////////////////////

  chartWrap: {
    height: win.height / 5,
    width: win.width,
    // borderWidth: 0.5,
    marginTop: win.height / 60,
    alignItems: "center",
  },
  chartWrapImg: {
    height: win.height / 5,
    resizeMode: "stretch",
    width: win.width / 1.08,
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 10,
    marginTop: win.height / 40,
  },
  btnText: {
    fontSize: win.width / 30,
    color: "#fff",
    paddingVertical: win.height / 70,
    paddingHorizontal: win.width / 18,
  },
  btn: {
    backgroundColor: "#FE3F47",
    borderRadius: 10,
  },

  /////////////////////////
  subheading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: win.width / 20,
  },
  subheadingDark: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: win.width / 20,
    color: "#fff",
  },
  //////////////////////

  subheadingWrap: {
    marginTop: win.height / 40,
  },
  btnWrap2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 10,
    marginTop: win.height / 50,
  },
  btn2: {
    backgroundColor: "#FE3F47",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: win.height / 100,
    width: win.width / 6,
  },
  btnImg: {
    height: win.width / 20,
    width: win.width / 20,
    marginHorizontal: win.width / 25,
  },
  btnText2: {
    fontSize: win.width / 30,
    color: "#fff",
    paddingRight: win.width / 80,
    fontWeight: "bold",
  },

  //////////////////////////
  flatWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#fff",
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 100,
    marginVertical: win.height / 150,
  },
  flatWrapDark: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    backgroundColor: "#2C2B30",
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 100,
    marginVertical: win.height / 150,
  },
  //////////////////////////

  ///////////////////////
  textLeft: {
    fontSize: win.width / 30,
    color: "gray",
  },
  textLeftDark: {
    fontSize: win.width / 30,
    color: "#fff",
  },
  /////////////////////

  textMiddle: {
    fontSize: win.width / 28,
    color: "#FE3F47",
    fontWeight: "bold",
  },
  textRight: {
    fontSize: win.width / 28,
    color: "#04DC00",
  },
  flatCont: {
    marginTop: win.height / 50,
  },
  showBtnText: {
    color: "#fff",
    fontSize: win.width / 25,
    textAlign: "center",
  },
  showBtn: {
    backgroundColor: "#FE3F47",
    paddingVertical: win.width / 50,
    marginHorizontal: win.width / 3,
    borderRadius: 10,
    marginTop: win.height / 70,
  },
});

export default TransactionScreen;
