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

import Rectangle from "./../../../assets/images/Rectangle.png";
import { Feather } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import MyLineChart from "../../../components/LineChart";
import barImg from "./../../../assets/images/barImg.png";

import { useSelector, useDispatch } from "react-redux";

const DATA = [
  { id: 1, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 2, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 3, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 4, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 5, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 6, amount: "+₵320", city: "Dhaka", date: "2021/4/23" },
  { id: 7, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 8, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 9, amount: "+₵320", city: "Dhaka", date: "2021/4/23" },
  { id: 10, amount: "+₵440", city: "Dhaka", date: "2021/4/23" },
  { id: 11, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
  { id: 12, amount: "+₵200", city: "Dhaka", date: "2021/4/23" },
];

const win = Dimensions.get("window");
function TransactionList({ navigation }) {
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
      <View style={styles.topSection}>
        <Pressable
          style={styles.arrowWrap}
          onPress={() => navigation.navigate("transaction-screen")}
        >
          <AntDesign
            name="arrowleft"
            size={win.width / 15}
            color={theme === "dark" ? "#FFF" : "black"}
          />
        </Pressable>
        <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
          Transaction list
        </Text>
        <View style={styles.empty}></View>
      </View>

      <View style={styles.btnWrap2}>
        <View style={styles.btn2}>
          <AntDesign
            name="upload"
            size={win.height / 50}
            style={{ marginLeft: win.width / 40 }}
            color="white"
          />
          <Text style={styles.btnText2}>In</Text>
        </View>
        <View style={styles.btn2}>
          <AntDesign
            name="download"
            size={win.height / 50}
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

  topSection: {
    flexDirection: "row",
    paddingTop: win.height / 17,
    paddingBottom: win.height / 30,
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    alignItems: "center",
    marginBottom: win.height / 60,
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

  imgCurrency: {
    width: win.width / 14,
    height: win.width / 14,
    marginRight: win.width / 120,
  },

  btnWrap2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 10,
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
    marginVertical: win.height / 185,
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
    marginVertical: win.height / 185,
  },
  //////////////////////////////

  ///////////////////////////
  textLeft: {
    fontSize: win.width / 30,
    color: "gray",
  },
  textLeftDark: {
    fontSize: win.width / 30,
    color: "white",
  },
  ////////////////////////

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
});

export default TransactionList;
