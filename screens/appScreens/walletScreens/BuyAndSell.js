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

import debitCredit from "./../../../assets/images/debitCredit.png";
import paypalImg from "./../../../assets/images/paypal.png";
import googleImg from "./../../../assets/images/googleImg.png";
import mobileMoney from "./../../../assets/images/mobileMoney.png";
import apple from "./../../../assets/images/apple.png";
import appleDark from "./../../../assets/images/appleDark.png";
import { useSelector, useDispatch } from "react-redux";

const win = Dimensions.get("window");
function BuyAndSell({ navigation }) {
  const theme = useSelector((state) => state.theme.value);
  const [activeBtn, setActiveBtn] = useState(false);

  const [activeTab, setActiveTab] = useState("card");

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
            color={theme === "dark" ? "#FFF" : "#000"}
          />
        </Pressable>
        <Text style={theme === "dark" ? styles.heading : styles.headingDark}>
          Buy And Sell
        </Text>
        <View style={styles.empty}></View>
      </View>
      <View style={styles.btnWrap}>
        <Pressable
          onPress={() => setActiveBtn(true)}
          style={activeBtn ? styles.btn1 : styles.btn2}
        >
          <Text style={activeBtn ? styles.text1 : styles.text2}>Buy</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveBtn(false)}
          style={!activeBtn ? styles.btn1 : styles.btn2}
        >
          <Text style={!activeBtn ? styles.text1 : styles.text2}>Sell</Text>
        </Pressable>
      </View>
      <Pressable
        style={theme === "dark" ? styles.cardWrap : styles.cardWrapDark}
        onPress={() => setActiveTab("card")}
      >
        <View style={styles.cardLeft}>
          <AntDesign
            name="checkcircle"
            size={win.width / 20}
            color={activeTab === "card" ? "#FE3F47" : "#F9DAE4"}
          />
          <Text
            style={theme === "dark" ? styles.cardText : styles.cardTextDark}
          >
            Debit/Credit card
          </Text>
        </View>
        <Image style={styles.socialImg} source={debitCredit} />
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.cardWrap : styles.cardWrapDark}
        onPress={() => setActiveTab("paypal")}
      >
        <View style={styles.cardLeft}>
          <AntDesign
            name="checkcircle"
            size={win.width / 20}
            color={activeTab === "paypal" ? "#FE3F47" : "#F9DAE4"}
          />
          <Text
            style={theme === "dark" ? styles.cardText : styles.cardTextDark}
          >
            Paypal
          </Text>
        </View>
        <Image style={styles.socialImg} source={paypalImg} />
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.cardWrap : styles.cardWrapDark}
        onPress={() => setActiveTab("mobilemoney")}
      >
        <View style={styles.cardLeft}>
          <AntDesign
            name="checkcircle"
            size={win.width / 20}
            color={activeTab === "mobilemoney" ? "#FE3F47" : "#F9DAE4"}
          />
          <Text
            style={theme === "dark" ? styles.cardText : styles.cardTextDark}
          >
            Mobile Money
          </Text>
        </View>
        <Image style={styles.socialImg} source={mobileMoney} />
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.cardWrap : styles.cardWrapDark}
        onPress={() => setActiveTab("appleandroidpay")}
      >
        <View style={styles.cardLeft}>
          <AntDesign
            name="checkcircle"
            size={win.width / 20}
            color={activeTab === "appleandroidpay" ? "#FE3F47" : "#F9DAE4"}
          />
          <Text
            style={theme === "dark" ? styles.cardText : styles.cardTextDark}
          >
            Apple/Android Pay
          </Text>
        </View>
        <Image style={styles.socialImg} source={googleImg} />
      </Pressable>
      <Pressable
        style={theme === "dark" ? styles.cardWrap : styles.cardWrapDark}
        onPress={() => setActiveTab("applepay")}
      >
        <View style={styles.cardLeft}>
          <AntDesign
            name="checkcircle"
            size={win.width / 20}
            color={activeTab === "applepay" ? "#FE3F47" : "#F9DAE4"}
          />
          <Text
            style={theme === "dark" ? styles.cardText : styles.cardTextDark}
          >
            Apple Pay
          </Text>
        </View>
        <Image
          style={styles.socialImg}
          source={theme === "dark" ? apple : appleDark}
        />
      </Pressable>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Next</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //////////////////////////
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
  ///////////////////////////

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
    color: "#FFF",
  },
  ////////////////////////////

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
  circleText: {
    fontWeight: "bold",
    fontSize: win.width / 25,
    marginTop: win.height / 100,
  },
  textNotify: {
    textAlign: "center",
    marginTop: win.height / 60,
    fontSize: win.width / 30,
    color: "#777777",
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: win.width / 20,
    marginVertical: win.height / 40,
  },
  btn1: {
    backgroundColor: "#FE3F47",
    width: win.width / 4.5,
    height: win.width / 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text1: {
    color: "#fff",
    fontSize: win.width / 25,
  },
  btn2: {
    backgroundColor: "#F9DAE4",
    width: win.width / 4.5,
    height: win.width / 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text2: {
    color: "#FE3F47",
    fontSize: win.width / 25,
  },

  //////////////////////////////
  cardWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: win.height / 14,
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
    marginTop: win.height / 50,
  },
  cardWrapDark: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: win.height / 14,
    marginHorizontal: win.width / 20,

    shadowColor: "#FFF",
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
    marginTop: win.height / 50,
    backgroundColor: "#2C2B30",
  },
  ///////////////////////////////

  cardLeft: {
    flexDirection: "row",
  },

  ///////////////////////////
  cardText: {
    fontSize: win.width / 26,
    fontWeight: "bold",
    marginLeft: win.width / 40,
  },
  cardTextDark: {
    fontSize: win.width / 26,
    fontWeight: "bold",
    marginLeft: win.width / 40,
    color: "#fff",
  },
  /////////////////////////////

  btn: {
    backgroundColor: "#FE3F47",
    marginHorizontal: win.width / 3,
    borderRadius: 10,
    marginTop: win.height / 22,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: win.height / 70,
    fontSize: win.width / 22,
  },
});

export default BuyAndSell;
